/**
 * SMARTCALC PRO — MODERN CALCULATION ENGINE
 * Pure Vanilla JavaScript • Safe Parser (Zero eval) • Shunting-Yard Algorithm
 * Operator Precedence (BODMAS/PEMDAS) • History Persistence • Keyboard Support
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. STATE MANAGEMENT
  // =========================================================================

  const state = {
    expression: '',       // Full mathematical expression, e.g. "12 + 4 * 2"
    currentNumber: '0',   // Current number token being entered
    lastResult: null,     // Result of previous equals evaluation
    hasEvaluated: false,  // True right after '=' was pressed
    history: [],          // Array of history items: { id, expr, result, timestamp }
    isDarkMode: true      // Current theme mode
  };

  // Cached DOM elements
  const dom = {
    // Calculator Display
    expressionDisplay: document.getElementById('expression-display'),
    resultDisplay: document.getElementById('result-display'),
    statusPill: document.getElementById('status-pill'),
    statusLabel: document.getElementById('status-label'),
    keypad: document.getElementById('keypad'),
    copyBtn: document.getElementById('copy-btn'),
    toast: document.getElementById('toast'),

    // History Panel & Controls
    mainContent: document.getElementById('main-content'),
    historyPanel: document.getElementById('history-panel'),
    historyList: document.getElementById('history-list'),
    historyBadge: document.getElementById('history-badge'),
    toggleHistoryBtn: document.getElementById('toggle-history-btn'),
    clearHistoryBtn: document.getElementById('clear-history-btn'),
    quickExportCsv: document.getElementById('quick-export-csv'),
    quickExportTxt: document.getElementById('quick-export-txt'),
    exportCsvBtn: document.getElementById('export-csv-btn'),
    exportTxtBtn: document.getElementById('export-txt-btn'),

    // Theme & Shortcuts
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    shortcutsBtn: document.getElementById('shortcuts-btn'),
    shortcutsModal: document.getElementById('shortcuts-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    modalGotitBtn: document.getElementById('modal-gotit-btn')
  };

  // =========================================================================
  // 2. SAFE MATHEMATICAL PARSER (STRICTLY NO eval / new Function)
  // Implements: Lexical Tokenizer, Shunting-Yard Algorithm, RPN Stack Evaluator
  // =========================================================================

  /**
   * Safe calculation entry point
   * @param {string} rawExpr Raw mathematical string e.g. "12 + 4 * 2"
   * @returns {number} Evaluated result
   */
  function safeCalculate(rawExpr) {
    if (!rawExpr || typeof rawExpr !== 'string') return 0;
    const cleanStr = rawExpr.trim();
    if (!cleanStr) return 0;

    // Step 1: Tokenize
    const tokens = tokenize(cleanStr);
    if (!tokens || tokens.length === 0) {
      throw new Error('Invalid Expression');
    }

    // Step 2: Infix to Reverse Polish Notation (RPN) via Shunting-Yard
    const rpn = infixToRPN(tokens);

    // Step 3: Evaluate RPN stack
    const result = evaluateRPN(rpn);
    return result;
  }

  /**
   * Lexical analyzer for math expressions
   */
  function tokenize(expr) {
    const tokens = [];
    let i = 0;
    const len = expr.length;

    while (i < len) {
      const char = expr[i];

      // Skip whitespace
      if (char === ' ') {
        i++;
        continue;
      }

      // Digits & Decimal point
      if (isDigit(char) || char === '.') {
        let numStr = '';
        let hasDot = false;
        while (i < len && (isDigit(expr[i]) || expr[i] === '.')) {
          if (expr[i] === '.') {
            if (hasDot) break; // Avoid malformed double dot in single token
            hasDot = true;
          }
          numStr += expr[i];
          i++;
        }
        tokens.push({ type: 'NUMBER', value: parseFloat(numStr) });
        continue;
      }

      // Operators (+, -, *, /)
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        // Detect unary negative number: at start of expression or immediately after another operator
        const prevToken = tokens[tokens.length - 1];
        const isUnary = (char === '-') && (!prevToken || prevToken.type === 'OPERATOR');

        if (isUnary) {
          i++;
          // Skip whitespace between unary minus and number if any
          while (i < len && expr[i] === ' ') i++;

          let numStr = '-';
          let hasDot = false;
          while (i < len && (isDigit(expr[i]) || expr[i] === '.')) {
            if (expr[i] === '.') {
              if (hasDot) break;
              hasDot = true;
            }
            numStr += expr[i];
            i++;
          }

          if (numStr === '-') {
            throw new Error('Malformed expression');
          }
          tokens.push({ type: 'NUMBER', value: parseFloat(numStr) });
          continue;
        } else {
          tokens.push({ type: 'OPERATOR', value: char });
          i++;
          continue;
        }
      }

      throw new Error(`Unsupported character: ${char}`);
    }

    return tokens;
  }

  function isDigit(c) {
    return c >= '0' && c <= '9';
  }

  // Operator precedence table (BODMAS/PEMDAS: * and / precede + and -)
  const PRECEDENCE = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  };

  /**
   * Shunting-yard algorithm: converts infix tokens to postfix (RPN)
   */
  function infixToRPN(tokens) {
    const outputQueue = [];
    const operatorStack = [];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token.type === 'NUMBER') {
        outputQueue.push(token);
      } else if (token.type === 'OPERATOR') {
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1].type === 'OPERATOR' &&
          PRECEDENCE[operatorStack[operatorStack.length - 1].value] >= PRECEDENCE[token.value]
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      }
    }

    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop());
    }

    return outputQueue;
  }

  /**
   * Evaluates Postfix (Reverse Polish Notation) token stack
   */
  function evaluateRPN(rpnTokens) {
    const stack = [];

    for (let i = 0; i < rpnTokens.length; i++) {
      const token = rpnTokens[i];

      if (token.type === 'NUMBER') {
        stack.push(token.value);
      } else if (token.type === 'OPERATOR') {
        if (stack.length < 2) {
          throw new Error('Malformed expression');
        }
        const b = stack.pop();
        const a = stack.pop();

        let res;
        switch (token.value) {
          case '+':
            res = a + b;
            break;
          case '-':
            res = a - b;
            break;
          case '*':
            res = a * b;
            break;
          case '/':
            if (b === 0) {
              throw new Error('Cannot divide by zero');
            }
            res = a / b;
            break;
          default:
            throw new Error(`Unknown operator: ${token.value}`);
        }
        stack.push(res);
      }
    }

    if (stack.length !== 1) {
      throw new Error('Malformed expression');
    }

    return formatPrecision(stack[0]);
  }

  /**
   * Clean floating-point precision artifacts (e.g., 0.1 + 0.2 = 0.3)
   */
  function formatPrecision(num) {
    if (!isFinite(num)) {
      throw new Error('Numeric Overflow');
    }
    // Round to 12 decimal places to fix IEEE 754 precision artifacts without truncating valid small decimals
    const factor = Math.pow(10, 12);
    const rounded = Math.round((num + Number.EPSILON) * factor) / factor;
    return rounded;
  }

  // =========================================================================
  // 3. UI FORMATTING & DISPLAY CONTROLLERS
  // =========================================================================

  /**
   * Converts raw operators (*, /) to user-friendly mathematical glyphs (×, ÷, −)
   */
  function formatDisplayExpression(raw) {
    if (!raw) return '';
    return raw
      .replace(/\*/g, ' × ')
      .replace(/\//g, ' ÷ ')
      .replace(/\+/g, ' + ')
      .replace(/-/g, ' − ');
  }

  /**
   * Updates display screen, font scaling, and status indicator
   */
  function updateUI(statusState = 'READY', isError = false) {
    // 1. Expression preview line
    if (state.expression) {
      dom.expressionDisplay.textContent = formatDisplayExpression(state.expression);
    } else {
      dom.expressionDisplay.innerHTML = '&nbsp;';
    }

    // 2. Result text
    let displayText = state.currentNumber;
    if (displayText === '') displayText = '0';

    // 3. Dynamic font scaling for readability on large digit numbers
    dom.resultDisplay.classList.remove('font-md', 'font-sm', 'font-xs', 'is-error');

    if (isError) {
      dom.resultDisplay.classList.add('is-error');
      dom.resultDisplay.textContent = displayText;
    } else {
      const charCount = displayText.length;
      if (charCount > 15) {
        dom.resultDisplay.classList.add('font-xs');
      } else if (charCount > 11) {
        dom.resultDisplay.classList.add('font-sm');
      } else if (charCount > 8) {
        dom.resultDisplay.classList.add('font-md');
      }
      dom.resultDisplay.textContent = displayText;
    }

    // 4. Status Indicator update
    dom.statusPill.classList.remove('is-calc', 'is-error');
    if (statusState === 'CALC') {
      dom.statusPill.classList.add('is-calc');
      dom.statusLabel.textContent = 'CALC';
    } else if (statusState === 'ERROR' || isError) {
      dom.statusPill.classList.add('is-error');
      dom.statusLabel.textContent = 'ERROR';
    } else {
      dom.statusLabel.textContent = 'READY';
    }

    // 5. Update history count badge
    if (dom.historyBadge) {
      dom.historyBadge.textContent = state.history.length;
    }
  }

  // =========================================================================
  // 4. USER ACTION HANDLERS
  // =========================================================================

  /**
   * Handles digit click (0-9)
   */
  function handleNumberInput(digit) {
    if (state.hasEvaluated) {
      // Start fresh calculation if digit entered right after equals
      state.expression = '';
      state.currentNumber = digit;
      state.hasEvaluated = false;
    } else {
      if (state.currentNumber === '0') {
        state.currentNumber = digit;
      } else {
        // Prevent exceeding 16 digits
        if (state.currentNumber.replace('-', '').length >= 16) return;
        state.currentNumber += digit;
      }
    }
    updateUI('CALC');
  }

  /**
   * Handles decimal point input (.)
   */
  function handleDecimal() {
    if (state.hasEvaluated) {
      state.expression = '';
      state.currentNumber = '0.';
      state.hasEvaluated = false;
      updateUI('CALC');
      return;
    }

    // Prevent duplicate decimal points in the same number
    if (!state.currentNumber.includes('.')) {
      if (state.currentNumber === '' || state.currentNumber === '0') {
        state.currentNumber = '0.';
      } else {
        state.currentNumber += '.';
      }
    }
    updateUI('CALC');
  }

  /**
   * Handles arithmetic operators (+, -, *, /)
   */
  function handleOperator(op) {
    state.hasEvaluated = false;

    // Case 1: If current number exists, append it to the expression with operator
    if (state.currentNumber !== '') {
      if (state.expression === '') {
        state.expression = state.currentNumber + ' ' + op;
      } else {
        state.expression += ' ' + state.currentNumber + ' ' + op;
      }
      state.currentNumber = '';
    } else if (state.expression !== '') {
      // Case 2: If user clicks another operator consecutively, gracefully replace it
      const trimmed = state.expression.trim();
      const lastChar = trimmed[trimmed.length - 1];
      if (['+', '-', '*', '/'].includes(lastChar)) {
        state.expression = trimmed.slice(0, -1).trim() + ' ' + op;
      }
    }
    updateUI('READY');
  }

  /**
   * Handles Equals (=)
   */
  function handleEquals() {
    if (state.expression === '' && state.currentNumber === '') return;

    let fullExpr = state.expression;
    if (state.currentNumber !== '') {
      fullExpr += (fullExpr ? ' ' : '') + state.currentNumber;
    }

    // Clean up trailing operators if user clicked '=' right after an operator
    fullExpr = fullExpr.trim();
    const lastChar = fullExpr[fullExpr.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      fullExpr = fullExpr.slice(0, -1).trim();
    }

    if (!fullExpr) return;

    try {
      const evaluated = safeCalculate(fullExpr);
      const resultStr = String(evaluated);

      // Save to history
      addToHistory(fullExpr, resultStr);

      state.expression = fullExpr + ' =';
      state.currentNumber = resultStr;
      state.lastResult = resultStr;
      state.hasEvaluated = true;

      updateUI('READY');
    } catch (err) {
      const errorMsg = err.message === 'Cannot divide by zero' ? 'Cannot divide by zero' : 'Error';
      state.currentNumber = errorMsg;
      state.hasEvaluated = true;
      updateUI('ERROR', true);
    }
  }

  /**
   * Clears all input (C / AC)
   */
  function handleClear() {
    state.expression = '';
    state.currentNumber = '0';
    state.hasEvaluated = false;
    updateUI('READY');
  }

  /**
   * Deletes last character (DEL)
   */
  function handleDelete() {
    if (state.hasEvaluated) {
      handleClear();
      return;
    }

    if (state.currentNumber.length > 1) {
      state.currentNumber = state.currentNumber.slice(0, -1);
      if (state.currentNumber === '-' || state.currentNumber === '-0') {
        state.currentNumber = '0';
      }
    } else {
      state.currentNumber = '0';
    }
    updateUI('READY');
  }

  /**
   * Toggles positive / negative sign (±)
   */
  function handleSignToggle() {
    if (state.currentNumber === '0' || state.currentNumber === '') {
      if (state.lastResult && state.hasEvaluated) {
        state.currentNumber = state.lastResult;
        state.expression = '';
        state.hasEvaluated = false;
      } else {
        return;
      }
    }

    if (state.currentNumber.startsWith('-')) {
      state.currentNumber = state.currentNumber.slice(1);
    } else {
      state.currentNumber = '-' + state.currentNumber;
    }
    updateUI('CALC');
  }

  /**
   * Percentage calculation with clearly defined behavior:
   * 1. If in expression "A + B%": evaluates B% of A
   * 2. If in expression "A * B%": evaluates A * (B / 100)
   * 3. If standalone "X%": evaluates X / 100
   */
  function handlePercentage() {
    if (state.currentNumber === '' && state.lastResult) {
      state.currentNumber = state.lastResult;
    }

    const currentVal = parseFloat(state.currentNumber);
    if (isNaN(currentVal)) return;

    // Check if there is an active preceding expression like "200 +"
    if (state.expression) {
      const trimmed = state.expression.trim();
      const tokens = trimmed.split(' ');
      const lastOp = tokens[tokens.length - 1];

      if (['+', '-'].includes(lastOp) && tokens.length >= 2) {
        // Find preceding base value
        try {
          const baseExpr = tokens.slice(0, -1).join(' ');
          const baseVal = safeCalculate(baseExpr);
          const percentVal = (baseVal * currentVal) / 100;
          state.currentNumber = String(formatPrecision(percentVal));
          updateUI('CALC');
          return;
        } catch (e) {
          // fallback to simple division
        }
      }
    }

    // Standalone percentage: divide by 100
    const pct = currentVal / 100;
    state.currentNumber = String(formatPrecision(pct));
    updateUI('CALC');
  }

  // =========================================================================
  // 5. HISTORY MANAGEMENT & LOCALSTORAGE PERSISTENCE
  // =========================================================================

  const STORAGE_KEY = 'smartcalc_history_v2';

  function loadHistory() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        state.history = JSON.parse(stored);
      } else {
        // Helpful initial entries for immediate test & showcase
        const now = new Date();
        state.history = [
          {
            id: Date.now() - 4000,
            expr: '125 * 8 + 450',
            result: '1450',
            timestamp: new Date(now.getTime() - 1000 * 60 * 15).toISOString()
          },
          {
            id: Date.now() - 2500,
            expr: '2400 / 12',
            result: '200',
            timestamp: new Date(now.getTime() - 1000 * 60 * 8).toISOString()
          },
          {
            id: Date.now() - 1000,
            expr: '45.5 * 1.08',
            result: '49.14',
            timestamp: new Date(now.getTime() - 1000 * 60 * 2).toISOString()
          }
        ];
        saveHistory();
      }
      renderHistory();
    } catch (e) {
      console.warn('LocalStorage unavailable:', e);
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history.slice(0, 50)));
    } catch (e) {
      console.warn('Failed saving history:', e);
    }
  }

  function addToHistory(expr, result) {
    const item = {
      id: Date.now(),
      expr: expr,
      result: result,
      timestamp: new Date().toISOString()
    };

    state.history.unshift(item);
    if (state.history.length > 50) state.history.pop();
    saveHistory();
    renderHistory();
  }

  function renderHistory() {
    if (dom.historyBadge) {
      dom.historyBadge.textContent = state.history.length;
    }

    if (!dom.historyList) return;

    if (state.history.length === 0) {
      dom.historyList.innerHTML = `
        <div class="empty-history">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"></path>
          </svg>
          <p>No calculations yet.</p>
          <span>Past equations appear here for 1-click reuse.</span>
        </div>
      `;
      return;
    }

    dom.historyList.innerHTML = '';

    state.history.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'history-item';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('title', 'Click to recall this result');

      let timeLabel = '';
      if (item.timestamp) {
        try {
          const d = new Date(item.timestamp);
          timeLabel = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } catch (e) {}
      }

      const formattedExpr = formatDisplayExpression(item.expr);

      card.innerHTML = `
        <div class="history-item-meta">
          <span class="history-item-time">${timeLabel}</span>
          <span class="history-item-expr">${escapeHtml(formattedExpr)}</span>
        </div>
        <div class="history-item-result">${escapeHtml(item.result)}</div>
      `;

      // 1-Click Recall
      card.addEventListener('click', () => {
        recallHistoryValue(item.result);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          recallHistoryValue(item.result);
        }
      });

      dom.historyList.appendChild(card);
    });
  }

  function recallHistoryValue(val) {
    state.currentNumber = String(val);
    state.hasEvaluated = false;
    updateUI('READY');
    showToast(`Loaded: ${val}`);
  }

  function clearHistory() {
    if (state.history.length === 0) return;
    state.history = [];
    saveHistory();
    renderHistory();
    showToast('History cleared');
  }

  // =========================================================================
  // 6. EXPORT HISTORY (CSV & TXT)
  // =========================================================================

  function getFormattedDateStamp() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function triggerDownload(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  function exportCSV() {
    if (!state.history || state.history.length === 0) {
      showToast('No history to export');
      return;
    }

    const dateStamp = getFormattedDateStamp();
    const filename = `smartcalc_history_${dateStamp}.csv`;

    let csv = 'Index,Timestamp,Expression,Result\r\n';
    state.history.forEach((item, index) => {
      const idx = state.history.length - index;
      const time = item.timestamp ? new Date(item.timestamp).toLocaleString() : '';
      const safeExpr = `"${(item.expr || '').replace(/"/g, '""')}"`;
      const safeResult = `"${(item.result || '').replace(/"/g, '""')}"`;
      const safeTime = `"${time.replace(/"/g, '""')}"`;
      csv += `${idx},${safeTime},${safeExpr},${safeResult}\r\n`;
    });

    triggerDownload(filename, csv, 'text/csv;charset=utf-8;');
    showToast(`Exported ${state.history.length} records to CSV`);
  }

  function exportTXT() {
    if (!state.history || state.history.length === 0) {
      showToast('No history to export');
      return;
    }

    const dateStamp = getFormattedDateStamp();
    const filename = `smartcalc_history_${dateStamp}.txt`;
    const nowStr = new Date().toLocaleString();

    let txt = '=====================================================\n';
    txt += '            SMARTCALC PRO — CALCULATION REPORT       \n';
    txt += ` Exported Date: ${nowStr}                            \n`;
    txt += ` Total Calculations: ${state.history.length}        \n`;
    txt += '=====================================================\n\n';

    state.history.forEach((item, index) => {
      const num = String(state.history.length - index).padStart(3, '0');
      const time = item.timestamp ? new Date(item.timestamp).toLocaleTimeString() : 'N/A';
      const expr = formatDisplayExpression(item.expr || '');
      const res = item.result || '0';

      txt += `[#${num}] ${time}\n`;
      txt += `  Expression : ${expr}\n`;
      txt += `  Result     : ${res}\n`;
      txt += '-----------------------------------------------------\n';
    });

    txt += '\nGenerated by SmartCalc Pro • Precision Math Parser (Zero eval)';

    triggerDownload(filename, txt, 'text/plain;charset=utf-8;');
    showToast(`Exported ${state.history.length} records to TXT`);
  }

  // =========================================================================
  // 7. KEYPAD & CLICK DISPATCHER
  // =========================================================================

  dom.keypad.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    // Visual press animation
    btn.classList.add('is-pressed');
    setTimeout(() => btn.classList.remove('is-pressed'), 120);

    // Number input
    if (btn.hasAttribute('data-number')) {
      handleNumberInput(btn.getAttribute('data-number'));
      return;
    }

    // Operator input
    if (btn.hasAttribute('data-operator')) {
      handleOperator(btn.getAttribute('data-operator'));
      return;
    }

    // Action input
    if (btn.hasAttribute('data-action')) {
      const action = btn.getAttribute('data-action');
      switch (action) {
        case 'clear':
          handleClear();
          break;
        case 'delete':
          handleDelete();
          break;
        case 'decimal':
          handleDecimal();
          break;
        case 'equals':
          handleEquals();
          break;
        case 'negate':
          handleSignToggle();
          break;
        case 'percent':
          handlePercentage();
          break;
      }
    }
  });

  // =========================================================================
  // 8. KEYBOARD NAVIGATION & MAPPING
  // =========================================================================

  window.addEventListener('keydown', (e) => {
    // Avoid capturing inside inputs or if modal is open
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const key = e.key;

    // Digits 0-9
    if (key >= '0' && key <= '9') {
      e.preventDefault();
      animateButton(`[data-number="${key}"]`);
      handleNumberInput(key);
      return;
    }

    // Operators: +, -, *, /
    if (key === '+' || key === '-' || key === '*' || key === '/') {
      e.preventDefault();
      animateButton(`[data-operator="${key}"]`);
      handleOperator(key);
      return;
    }

    // Equals: Enter or =
    if (key === 'Enter' || key === '=') {
      e.preventDefault();
      animateButton('[data-action="equals"]');
      handleEquals();
      return;
    }

    // Decimal Point: . or ,
    if (key === '.' || key === ',') {
      e.preventDefault();
      animateButton('[data-action="decimal"]');
      handleDecimal();
      return;
    }

    // Clear: Escape or 'c' / 'C'
    if (key === 'Escape' || key === 'c' || key === 'C') {
      e.preventDefault();
      animateButton('[data-action="clear"]');
      handleClear();
      return;
    }

    // Delete: Backspace
    if (key === 'Backspace') {
      e.preventDefault();
      animateButton('[data-action="delete"]');
      handleDelete();
      return;
    }

    // Percentage: %
    if (key === '%') {
      e.preventDefault();
      animateButton('[data-action="percent"]');
      handlePercentage();
      return;
    }

    // Sign Toggle: F9
    if (key === 'F9') {
      e.preventDefault();
      animateButton('[data-action="negate"]');
      handleSignToggle();
      return;
    }
  });

  function animateButton(selector) {
    const btn = dom.keypad.querySelector(selector);
    if (btn) {
      btn.classList.add('is-pressed');
      setTimeout(() => btn.classList.remove('is-pressed'), 140);
    }
  }

  // =========================================================================
  // 9. THEME TOGGLE (DARK / LIGHT)
  // =========================================================================

  const THEME_KEY = 'smartcalc_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setTheme(isDark);
  }

  function setTheme(isDark) {
    state.isDarkMode = isDark;
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem(THEME_KEY, 'light');
    }
  }

  dom.themeToggleBtn.addEventListener('click', () => {
    setTheme(!state.isDarkMode);
  });

  // =========================================================================
  // 10. CLIPBOARD COPY & TOAST NOTIFICATION
  // =========================================================================

  dom.copyBtn.addEventListener('click', () => {
    const textToCopy = state.currentNumber || '0';
    if (textToCopy === 'Error' || textToCopy === 'Cannot divide by zero') {
      showToast('Nothing to copy');
      return;
    }

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        showToast(`Copied: ${textToCopy}`);
      })
      .catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${textToCopy}`);
      });
  });

  let toastTimeout;
  function showToast(msg) {
    if (!dom.toast) return;
    clearTimeout(toastTimeout);
    dom.toast.textContent = msg;
    dom.toast.classList.add('show');
    toastTimeout = setTimeout(() => {
      dom.toast.classList.remove('show');
    }, 2400);
  }

  // =========================================================================
  // 11. MODAL & DRAWER TOGGLES
  // =========================================================================

  // History Panel Toggle
  dom.toggleHistoryBtn.addEventListener('click', () => {
    const isHidden = dom.historyPanel.classList.toggle('is-hidden');
    if (isHidden) {
      dom.mainContent.classList.remove('history-open');
    } else {
      dom.mainContent.classList.add('history-open');
    }
  });

  // Initialize history panel visibility on desktop/mobile
  function initHistoryPanel() {
    if (window.innerWidth < 768) {
      dom.historyPanel.classList.add('is-hidden');
      dom.mainContent.classList.remove('history-open');
    } else {
      dom.historyPanel.classList.remove('is-hidden');
      dom.mainContent.classList.add('history-open');
    }
  }

  // History Controls wire-up
  dom.clearHistoryBtn.addEventListener('click', clearHistory);
  dom.quickExportCsv.addEventListener('click', exportCSV);
  dom.quickExportTxt.addEventListener('click', exportTXT);
  dom.exportCsvBtn.addEventListener('click', exportCSV);
  dom.exportTxtBtn.addEventListener('click', exportTXT);

  // Shortcuts Modal
  dom.shortcutsBtn.addEventListener('click', () => {
    dom.shortcutsModal.classList.add('is-active');
    dom.shortcutsModal.setAttribute('aria-hidden', 'false');
  });

  function closeShortcutsModal() {
    dom.shortcutsModal.classList.remove('is-active');
    dom.shortcutsModal.setAttribute('aria-hidden', 'true');
  }

  dom.closeModalBtn.addEventListener('click', closeShortcutsModal);
  dom.modalGotitBtn.addEventListener('click', closeShortcutsModal);
  dom.shortcutsModal.addEventListener('click', (e) => {
    if (e.target === dom.shortcutsModal) {
      closeShortcutsModal();
    }
  });

  // Escape key closes modal if open
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dom.shortcutsModal.classList.contains('is-active')) {
      closeShortcutsModal();
    }
  });

  // Utility HTML Escape
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // =========================================================================
  // 12. INITIALIZATION
  // =========================================================================

  initTheme();
  initHistoryPanel();
  loadHistory();
  updateUI('READY');

})();

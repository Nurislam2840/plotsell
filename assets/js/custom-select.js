/* ============================================
   START: Custom Select Enhancement
   ============================================ */
(function () {
  function enhanceSelect(select) {
    if (select.dataset.enhanced) return;
    select.dataset.enhanced = '1';
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select';
    const trigger = document.createElement('div');
    trigger.className = 'custom-select__trigger';
    trigger.tabIndex = 0;
    trigger.setAttribute('role', 'button');
    const valueSpan = document.createElement('span');
    valueSpan.className = 'custom-select__value';
    const arrow = document.createElement('span');
    arrow.className = 'custom-select__arrow';
    arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg>';
    trigger.appendChild(valueSpan);
    trigger.appendChild(arrow);
    const menu = document.createElement('div');
    menu.className = 'custom-select__menu';

    const updateValue = () => {
      const opt = select.options[select.selectedIndex];
      valueSpan.textContent = opt ? opt.textContent : '';
      valueSpan.classList.toggle('placeholder', !select.value);
    };

    const buildMenu = () => {
      menu.innerHTML = '';
      Array.from(select.options).forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'custom-select__option';
        if (opt.value === '') div.classList.add('placeholder-opt');
        if (i === select.selectedIndex) div.classList.add('selected');
        div.textContent = opt.textContent;
        div.addEventListener('click', e => {
          e.stopPropagation();
          select.selectedIndex = i;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          select.dispatchEvent(new Event('input', { bubbles: true }));
          updateValue();
          wrapper.classList.remove('open');
          menu.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
          div.classList.add('selected');
        });
        menu.appendChild(div);
      });
      updateValue();
    };
    buildMenu();

    trigger.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.custom-select.open').forEach(el => { if (el !== wrapper) el.classList.remove('open'); });
      wrapper.classList.toggle('open');
    });
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); wrapper.classList.toggle('open'); }
      if (e.key === 'Escape') wrapper.classList.remove('open');
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
    select.parentNode.insertBefore(wrapper, select);
    select.classList.add('custom-select-native');
    new MutationObserver(() => buildMenu()).observe(select, { childList: true });
  }

  window.initCustomSelects = function () {
    document.querySelectorAll('select:not(.custom-select-native)').forEach(enhanceSelect);
  };
  document.addEventListener('click', () => {
    document.querySelectorAll('.custom-select.open').forEach(el => el.classList.remove('open'));
  });
  document.addEventListener('DOMContentLoaded', () => setTimeout(window.initCustomSelects, 0));
})();
/* ============================================
   END: Custom Select Enhancement
   ============================================ */
/* =====================================================================
   Chanu Kalubowila — Engineering Workbench
   Tab switching for project deep pages
   ===================================================================== */

document.querySelectorAll('.tabs').forEach(tabsEl => {
  const buttons = tabsEl.querySelectorAll('.tab');
  const panes = tabsEl.parentElement.querySelectorAll('.tab-pane');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
});
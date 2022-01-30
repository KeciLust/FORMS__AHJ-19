export default function widget() {
  const widgetRun = document.querySelector('.widget_run');

  const widgetForm = document.createElement('div');
  widgetForm.classList.add('widget_form');
  widgetForm.innerHTML = `
    <h2 class="widget_title">Помошник</h2><span class="widget_text">А я не придумал что сюда написать)))</span>
    `;
  widgetRun.addEventListener('click', () => {
    widgetRun.appendChild(widgetForm);
    widgetForm.style.top = `${widgetRun.clientTop - widgetForm.offsetHeight - 20}px `;
  });
}

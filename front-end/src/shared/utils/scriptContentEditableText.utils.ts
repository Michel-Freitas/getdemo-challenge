export const scriptContentEditableText = `
-- REMOVED --
<script>
  window.addEventListener('load', () => {
    document.querySelectorAll(['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'a', 'button']).forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
      });

      item.addEventListener('dblclick', (subItem) => {
        subItem.target.contentEditable = true;
        subItem.target.focus();

        var oldTag = subItem.target.innerHTML;

        subItem.target.addEventListener('blur', () => {
        const newTag = subItem.target.innerHTML;
        window.parent.postMessage({
            oldTag,
            newTag
          }, '*');
        });
      });
    });
  });
</script>
`;

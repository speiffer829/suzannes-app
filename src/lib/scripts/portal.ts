  export function portal(node, {to}: {to: string} = {to: 'body'}) {
    let target;

    function update() {
      target = document.querySelector(to);
      target.appendChild(node);
      node.hidden = false;
    }

    function destroy() {
      if (node.parentNode) {
        // Child demands parent to kill it. dark
        node.parentNode.removeChild(node);
      }
    }

    update();

    return {
      update,
      destroy,
    };
  }
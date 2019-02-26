function onDomLoad(eventFunction) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", eventFunction);
  } else {
    eventFunction();
  }
}

onDomLoad(function () {
  var form = document.querySelector('#form-jobboerse');
  var textareas = form.querySelectorAll('textarea');
  var inputs = form.querySelectorAll('.input-container input');
  var sCheckbox = form.querySelectorAll('.sons-checkbox');
  var sInputs = form.querySelectorAll('.sons-input');
  var sOtherCheckbox = form.querySelectorAll('.form-sonstige-container input:not(.sons-input):not(.sons-checkbox)');
  var msgBox = form.querySelector('.msg-box');

  autosize(textareas);
  addELM([textareas, inputs], 'focus', handleFocusIn);
  addELM([textareas, inputs], 'blur', handleFocusOut);
  addELM(sCheckbox, 'click', handleSonstigeCheckbox);
  addELM(sInputs, 'blur', handleSonstigeInput);
  addELM(sOtherCheckbox, 'click', handlesOtherCheckbox);

  function handleFocusIn(e) {
    var container = this.parentNode;
    container.classList.add('focused');
  }
  function handleFocusOut(e) {
    var container = this.parentNode;
    if(!e.srcElement.value)
      container.classList.remove('focused');
  }

  function handleSonstigeCheckbox(e) {
    var target = document.querySelector(this.getAttribute('data-target'));
    if(!this.checked) {
      target.setAttribute('disabled', true);
      target.setAttribute('hidden', true);
    } else {
      target.removeAttribute('disabled');
      target.removeAttribute('hidden');
    }
  }
  function handleSonstigeInput(e) {
    var target = document.querySelector(this.getAttribute('data-target'));
    target.setAttribute('value', this.value);
  }
  function handlesOtherCheckbox(e) {
    var container = this.parentNode.parentNode;
    var checkbox = container.querySelector('.sons-checkbox');
    if(checkbox.checked) return;
    var target = container.querySelector('.sons-input');
    target.setAttribute('disabled', true);
    target.setAttribute('hidden', true);
  }



  function addELM(elements, event, callback) {
    if(Array.isArray(elements)) {
      elements.forEach(function (item) {
        addEL(item, event, callback);
      })
    } else {
      addEL(elements, event, callback);
    }
  }
  function addEL(nodes, event, callback) {
    if(NodeList.prototype.isPrototypeOf(nodes)) {
      nodes.forEach(function (el) {
        el.addEventListener(event, callback);
      })
    } else if (nodes instanceof Element) {
      nodes.addEventListener(event, callback);
    } else {
      console.log('addEL --> !!ERRROR!! given element is not a dom NODE');
    }
  }

  var scroll = new Bouncer('form', {
    disableSubmit: true,
  });

  document.addEventListener('bouncerFormValid', handleSubmit, false);

  function handleSubmit() {
    axios({
      method: 'post',
      url: form.getAttribute('action'),
      data: serializeForm(form),
      config: { headers: {'Content-Type': 'multipart/form-data' }},
    }).then(function (res) {
      console.log(res);
      console.log(res.data);
      renderMessage(msgBox, 'success', res.data)
    }).catch(function (err) {
      console.log(err);
      renderMessage(msgBox, 'error', 'Es scheint etwas schiefgelaufen zu sein, bitte versuchen Sie es erneut!')
    })
  }

  function renderMessage(el, className, msg) {
    if(className === "error") {
      el.classList.remove('success');
    } else {
      el.classList.remove('error');
    }
    el.classList.add(className);
    el.innerHTML = '<p>'+ msg +'</p>';
  }

  function serializeForm(form) {
    var formData = new FormData(form);
    return formData;
  }

})

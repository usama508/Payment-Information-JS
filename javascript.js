  /* Dropdownmenu 1 */
  $(document).ready(function () {
    const dropdownMenu = $(".dropdown-menu");
    const dropdownToggle = $("#dropdownToggle i");
    const label = $(".select-label");
    const inputField = $("#select1");
    const dropdownItems = $(".dropdown-menu li");
  
    function showDropdown() {
      dropdownMenu.css("display", "block");
      label.addClass("select-label").css("color", "#4957f4");
      inputField.css("border-bottom", "2px solid #4957f4");
      dropdownToggle.attr("class", "fa-solid fa-angle-up");
    }
  
    function hideDropdown() {
      dropdownMenu.css("display", "none");
      label.removeClass("select-label").css("color", "");
    //   inputField.css("border", "");
      dropdownToggle.attr("class", "fa-solid fa-angle-down");
    }
  
    function filterDropdown() {
      const searchText = inputField.val().toLowerCase();
      dropdownItems.each(function () {
        const itemText = $(this).text().toLowerCase();
        if (itemText.includes(searchText)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  
    dropdownToggle.click(function (e) {
      e.stopPropagation();
      if (dropdownMenu.css("display") === "block") {
        hideDropdown();
      } else {
        showDropdown();
      }
    });
  
    inputField.on("input", function (e) {
      e.stopPropagation();
      showDropdown();
      filterDropdown();
    });
  
    dropdownItems.click(function () {
      inputField.val($(this).text());
      inputField.attr("data-value", $(this).attr("data-value"));
      $(".dropdown-menu li").removeClass("selected");
      $(this).addClass("selected");
      hideDropdown();
    });
  
    $(document).click(function (event) {
      if (
        !dropdownMenu.is(event.target) &&
        !dropdownToggle.is(event.target) &&
        !inputField.is(event.target)
      ) {
        hideDropdown();
      }
    });
  });
  
  
  
  
  
   /* Dropdownmenu 2 */
  
   $(document).ready(function () {
    const dropdownMenu1 = $(".dropdown-menu1");
    const dropdownToggle1 = $("#dropdownToggle1 i");
    const label1 = $(".select-label1");
    const inputField1 = $("#floatingInput1");
    dropdownMenu1.css("display", "none");
  
    function showDropdown() {
      dropdownMenu1.css("display", "block");
      label1.addClass("select-label").css("color", "#4957f4");
      inputField1.css("border-bottom", "2px solid #4957f4");
      dropdownToggle1.attr("class", "fa-solid fa-angle-up");
    }
  
    function hideDropdown() {
      dropdownMenu1.css("display", "none");
      label1.removeClass("select-label1").css("color", "");
      inputField1.css("border", "");
      dropdownToggle1.attr("class", "fa-solid fa-angle-down");
    }
  
    function filterDropdown() {
      const searchText = inputField1.val().toLowerCase();
      $(".dropdown-menu1 li").each(function () {
        const itemText = $(this).text().toLowerCase();
        if (itemText.includes(searchText)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  
    dropdownToggle1.click(function (e) {
      e.stopPropagation();
      if (dropdownMenu1.css("display") === "block") {
        hideDropdown();
      } else {
        showDropdown();
      }
    });
  
    inputField1.on("input", function (e) {
      e.stopPropagation();
      showDropdown();
      filterDropdown();
    });
  
    $(".dropdown-menu1 li").click(function () {
      inputField1.val($(this).text());
      inputField1.attr("data-value", $(this).attr("data-value"));
  
      $(".dropdown-menu1 li").removeClass("selected");
      $(this).addClass("selected");
  
      hideDropdown();
    });
  
    $(document).click(function (event) {
      if (
        !dropdownMenu1.is(event.target) &&
        !dropdownToggle1.is(event.target) &&
        !inputField1.is(event.target)
      ) {
        hideDropdown();
      }
    });
  });
  
  
   /* Dropdownmenu 3 */
  
   $(document).ready(function () {
    const dropdownMenu2 = $(".dropdown-menu2");
    const dropdownToggle2 = $("#dropdownToggle2 i");
    const label2 = $(".select-label2");
    const inputField2 = $("#floatingInput2");
    dropdownMenu2.css("display", "none");
  
    function showDropdown() {
      dropdownMenu2.css("display", "block");
      label2.addClass("select-label").css("color", "#4957f4");
      inputField2.css("border-bottom", "2px solid #4957f4");
      dropdownToggle2.attr("class", "fa-solid fa-angle-up");
    }
  
    function hideDropdown() {
      dropdownMenu2.css("display", "none");
      label2.removeClass("select-label2").css("color", "");
      inputField2.css("border", "");
      dropdownToggle2.attr("class", "fa-solid fa-angle-down");
    }
  
    function selectValue(value) {
      inputField2.val(value);
      hideDropdown();
    }
  
    dropdownToggle2.click(function (e) {
      e.stopPropagation();
      if (dropdownMenu2.css("display") === "block") {
        hideDropdown();
      } else {
        showDropdown();
      }
    });
  
    inputField2.click(function (e) {
      e.stopPropagation();
      if (dropdownMenu2.css("display") === "block") {
        hideDropdown();
      } else {
        showDropdown();
      }
    });
  
    $(".dropdown-menu2 .prefix-div").click(function () {
      const selectedValue = $(this).find(".prefix-span").text();
      selectValue(selectedValue);
    });
  
    $(document).click(function (event) {
      if (
        !dropdownMenu2.is(event.target) &&
        !dropdownToggle2.is(event.target) &&
        !inputField2.is(event.target)
      ) {
        hideDropdown();
      }
    });
  });
  
  
  
  
  // Validate input
  
  function validateInput(input, message, warn, label, requiredMessage) {
          function showErrorMessage() {
              // message.textContent = 'Address line 1 is required';
              message.style.color = 'red';
              label.style.color = 'red';
              input.style.borderColor = 'red';
              input.style.borderBottom = '3px solid red';
              warn.style.display = 'block';
              message.style.display = 'block';
              // Hide the "*Required" message
              requiredMessage.style.display = 'none';
  
              hideDropdown();
          }
  
          function clearErrorMessage() {
              message.textContent = '';
              input.style.borderColor = '';
              warn.style.display = 'none';
              message.style.display = 'none';
              input.style.borderBottom = '';
              label.style.color = '';
              // Show the "*Required" message
              requiredMessage.style.display = 'block';
          }
  
          // Blur event listener
          input.addEventListener('blur', () => {
              if (input.value === '') {
                  showErrorMessage();
              } else {
                  clearErrorMessage();
              }
          });
  
          // Input event listener to clear error when the user starts typing
          input.addEventListener('input', clearErrorMessage);
      }
  
      const input11 = document.getElementById('input11');
      const message11 = document.getElementById('message11');
      const warn11 = document.getElementById('warn11');
      const label11 = document.getElementById('label11');
      const requiredMessage11 = document.getElementById('requiredMessage');
      validateInput(input11, message11, warn11, label11, requiredMessage11);
  
   
  
  // Usage for each input and message pair
  const input1 = document.getElementById('input1');
  const message1 = document.getElementById('message1');
  const warn1 = document.getElementById('warn1');
  const label1 = document.getElementById('label1');
  validateInput(input1, message1,warn1,label1);
  
  const input2 = document.getElementById('input2');
  const message2 = document.getElementById('message2');
  const warn2 = document.getElementById('warn2');
  const label2 = document.getElementById('label2');
  
  validateInput(input2, message2,warn2,label2);
  
  // const input3 = document.getElementById('input3');
  // const message3 = document.getElementById('message3');
  // const warn3 = document.getElementById('warn3');
  // validateInput(input3, message3,warn3);
  
  const input4 = document.getElementById('input4');
  const message4 = document.getElementById('message4');
  const warn4 = document.getElementById('warn4');
  const label4 = document.getElementById('label4');
  validateInput(input4, message4,warn4,label4);
  
  const input5 = document.getElementById('input5');
  const message5 = document.getElementById('message5');
  const warn5 = document.getElementById('warn5');
  const label5 = document.getElementById('label5');
  validateInput(input5, message5,warn5,label5);
  
  const input6 = document.getElementById('input6');
  const message6 = document.getElementById('message6');
  const label6 = document.getElementById('label6');
  const warn6 = document.getElementById('warn6');
  validateInput(input6, message6,warn6,label6);
  
  const input7 = document.getElementById('select1');
  const message7 = document.getElementById('message7');
  const warn7 = document.getElementById('warn7');
  const label7 = document.getElementById('label7');
  validateInput(input7, message7,warn7,label7);
  
  
  const input8 = document.getElementById('floatingInput1');
  const message8 = document.getElementById('message8');
  const warn8 = document.getElementById('warn8');
  const label8 = document.getElementById('label8');
  validateInput(input8, message8,warn8,label8);
  
  const input9 = document.getElementById('input9');
  const message9 = document.getElementById('message9');
  const warn9 = document.getElementById('warn9');
  const label9 = document.getElementById('label9');
  validateInput(input9, message9,warn9,label9);
  
  const input10 = document.getElementById('floatingInput2');
  const message10 = document.getElementById('message10');
  const warn10 = document.getElementById('warn10');
  const label10 = document.getElementById('label10');
  validateInput(input10, message10,warn10,label10);
  
  
  
  // const input12 = document.getElementById('input12');
  // const message12 = document.getElementById('message12');
  // const warn12 = document.getElementById('warn12');
  // validateInput(input12, message12,warn12);
  
  const input13 = document.getElementById('input13');
  const message13 = document.getElementById('message13');
  const warn13 = document.getElementById('warn13');
  const label13 = document.getElementById('label13');
  validateInput(input13, message13,warn13,label13);
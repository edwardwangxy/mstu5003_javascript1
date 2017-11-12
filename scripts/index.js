var gender,
  main_fea,
  pick_story,
  your_code = "/*First Character*/\r\n";
$(".main-feature").hide();
$(".main-value").hide();
$(".ene-feature").hide();
$(".ene-value").hide();
$(".common-fea").hide();
$(".create-obj").hide();
$("#fullcode").hide();
function getusergender() {
  var radioEl = document.querySelector('[name="gender"]:checked');
  gender = radioEl.value;
  if (gender != "") {
    switch (gender) {
      case "m":
        pick_story = "#story1";
        break;
      case "f":
        pick_story = "#story2";
        break;
    }
    $(".main-feature").hide();
    $(".main-value").hide();
    $(".ene-feature").hide();
    $(".ene-value").hide();
    $(".common-fea").hide();
    $(".create-obj").hide();
    $("#fullcode").hide();
    $(pick_story + " .main-feature").show();
    $(pick_story + " .main-feature").velocity("scroll", {
      duration: 500,
      offset: -40,
      easing: "ease-in-out"
    });
  }
  // alert(gender);
}

function check_fea(input_feature) {
  var getfeaturelist = [];
  var input_fea = input_feature.split(";");
  for (var each_var of input_fea) {
    if (each_var.length > 0) {
      var check_each = each_var.split(" ");
      if (check_each.length > 1) {
        each_var = check_each.join("_");
        getfeaturelist.push(each_var);
      } else {
        getfeaturelist.push(each_var);
      }
    }
  }
  return getfeaturelist;
}

function main_fea() {
  var input_fea = $(pick_story + " .main-feature .form-control").val();
  var new_arr = check_fea(input_fea);
  printTags($(pick_story + " .main-feature .def-fea-res"), new_arr);
}

function main_fea_sub() {
  var tagsHTML = "";
  var i = 0;
  var input_fea = $(pick_story + " .main-feature .form-control").val();
  var new_arr = check_fea(input_fea);
  for (var each of new_arr) {
    tagsHTML += `<label for="fea1">${each}:</label><input type="text" class="form-control" id="fea-${each +
      i}" placeholder="${each}">`;
  }
  $(pick_story + " .main-value .label-value").html(tagsHTML);
  $(pick_story + " .main-value").show();
  $(pick_story + " .main-value").velocity("scroll", {
    duration: 500,
    offset: -40,
    easing: "ease-in-out"
  });
}

function firstobj() {
  var objname = "char1";
  var input_idtext = pick_story + " .main-value .label-value";
  var input_fea = $(pick_story + " .main-feature .form-control").val();
  var newobj = createobj(objname, input_idtext, input_fea);
  your_code += "var char1=" + "{" + newobj.split("{")[1] + "\r\n";
  $("#su-obj-mod .modal-content").html(
    "<br>Congradulation, You have just create your first javascript object<br><br>" +
      newobj +
      "<br>"
  );
  $("#su-obj-mod").modal("show");
  $(pick_story + " .ene-feature .form-control").val(
    $(pick_story + " .main-feature .form-control").val()
  );
  input_fea = $(pick_story + " .ene-feature .form-control").val();
  var new_arr = check_fea(input_fea);
  printTags($(pick_story + " .ene-feature .def-fea-res"), new_arr);
  $(pick_story + " .ene-feature").show();
  $(pick_story + " .ene-feature").velocity("scroll", {
    duration: 500,
    offset: -40,
    easing: "ease-in-out"
  });
}

function ene_fea() {
  var input_fea = $(pick_story + " .ene-feature .form-control").val();
  var new_arr = check_fea(input_fea);
  printTags($(pick_story + " .ene-feature .def-fea-res"), new_arr);
}

function ene_fea_sub() {
  var tagsHTML = "";
  var i = 0;
  var input_fea = $(pick_story + " .ene-feature .form-control").val();
  var new_arr = check_fea(input_fea);
  for (var each of new_arr) {
    tagsHTML += `<label for="fea1">${each}:</label><input type="text" class="form-control" id="ene-fea-${each +
      i}" placeholder="${each}">`;
  }
  $(pick_story + " .ene-value .label-value").html(tagsHTML);
  $(pick_story + " .ene-value").show();
  $(pick_story + " .ene-value").velocity("scroll", {
    duration: 500,
    offset: -40,
    easing: "ease-in-out"
  });
}

function secondobj() {
  var objname = "char2";
  var input_idtext = pick_story + " .ene-value .label-value";
  var input_fea = $(pick_story + " .ene-feature .form-control").val();
  var newobj = createobj(objname, input_idtext, input_fea);
  your_code +=
    "/*Second Character*/\r\n" +
    "var char2=" +
    "{" +
    newobj.split("{")[1] +
    "\r\n";
  $("#su-obj-mod-2 .modal-content").html(
    "<br>Congradulation, You have just create your second javascript object<br><br>" +
      newobj +
      "<br>"
  );
  $("#su-obj-mod-2").modal("show");
  var main_val = check_fea(
    $(pick_story + " .main-feature .form-control").val()
  );
  var ene_val = check_fea($(pick_story + " .ene-feature .form-control").val());
  var common = [];
  if (ene_val.length <= main_val) {
    for (var each of ene_val) {
      if (main_val.indexOf(each) > -1) {
        common.push(each);
      }
    }
  } else {
    for (var each of main_val) {
      if (ene_val.indexOf(each) > -1) {
        common.push(each);
      }
    }
  }
  $(pick_story + " .common-fea .common-fea-text").val(common.join(";"));
  printTags($(pick_story + " .common-fea .def-fea-res"), common);
  $(pick_story + " .common-fea").show();
  $(pick_story + " .common-fea").velocity("scroll", {
    duration: 500,
    offset: -40,
    easing: "ease-in-out"
  });
}

function common_fea() {
  var input_fea = $(pick_story + " .common-fea .common-fea-text").val();
  var new_arr = check_fea(input_fea);
  printTags($(pick_story + " .common-fea .def-fea-res"), new_arr);
}

function common_sub() {
  var classname = $(pick_story + " .common-fea .group-objs").val();
  var input_fea = $(pick_story + " .common-fea .common-fea-text").val();
  var newclass = createclass(classname, input_fea);
  your_code += "/*Your Class*/\r\n" + newclass + "\r\n";
  $("#su-obj-mod-3 .modal-content").html(
    "<br>Congradulation, You have just create your first javascript class<br><br>" +
      newclass +
      "<br>"
  );
  $("#su-obj-mod-3").modal("show");
  $(pick_story + " .create-obj").show();
  $(pick_story + " .create-obj").velocity("scroll", {
    duration: 500,
    offset: -40,
    easing: "ease-in-out"
  });
}

function create_obj_class() {
  var classname = $(pick_story + " .group-objs").val();
  var input_fea = $(pick_story + " .common-fea .common-fea-text").val();
  var char1_str = $(pick_story + " .char1-str").val();
  var char2_str = $(pick_story + " .char2-str").val();
  if (char1_str == "" || char2_str == "") {
    alert("Please create both variables");
    return 0;
  }
  if (char1_str.search(classname) < 0) {
    alert("Please create the object with your class");
    return 0;
  }

  var newclass = createclass(classname, input_fea);
  var split = newclass.split(classname);
  var newfunc = "function " + classname + split[1];
  eval(newfunc);
  try {
    eval(char1_str);
    eval(char2_str);
  } catch (err) {
    alert(
      "There is something wrong with your code, Please check. Err MSG:" + err
    );
    return 0;
  }
  var char1_name = char1_str.split("=")[0];
  var char2_name = char2_str.split("=")[0];
  if (
    char1_name == char2_name ||
    char1_name == "char1" ||
    char2_name == "char2"
  ) {
    alert(
      "please use different variable names! Do not use char1 or char2 as name here."
    );
    return 0;
  }
  your_code +=
    "/*First Character using Class*/\r\nvar " + char1_str + ";" + "\r\n";
  your_code +=
    "/*Second Character using Class*/\r\nvar " + char2_str + ";" + "\r\n";
  alert(
    "Congradulation, you have create two objects using your class. " +
      char1_name +
      JSON.stringify(eval(char1_name)) +
      " " +
      char2_name +
      JSON.stringify(eval(char2_name))
  );
  $("#full-code-text").val(your_code);
  $("#fullcode").show();
  $("#fullcode").velocity("scroll", {
    duration: 500,
    offset: -40,
    easing: "ease-in-out"
  });
}

function showfull() {
  var text = $("#full-code-text").val();
  eval(text);
  document.getElementById("full-code-text").innerHtml =
    "<script>" + text + "</script>";
}

function isNumber(obj) {
  return !isNaN(parseFloat(obj));
}

function createclass(objname, input_fea) {
  var objtext = "";
  var new_arr = check_fea(input_fea);

  objtext = "function " + objname + "(" + new_arr.join(",") + "){";
  for (var each of new_arr) {
    objtext = objtext + "this." + each + "=" + each + ";";
  }
  objtext = objtext + "}";
  return objtext;
}

function createobj(objname, input_idtext, input_fea) {
  var objtext = "";
  var new_arr = check_fea(input_fea);
  var i = 0;
  var end = ",";
  objtext = objname + "{";
  $(input_idtext)
    .find("input")
    .each(function() {
      var current_val = this.value;
      var current_fea = new_arr[i];
      if (i == new_arr.length - 1) {
        end = "";
      }
      if (isNumber(current_val)) {
        objtext = objtext + current_fea + ":" + current_val + end;
      } else {
        objtext = objtext + current_fea + ":'" + current_val + "'" + end;
      }
      i += 1;
    });
  objtext = objtext + "};";
  return objtext;
}

function printTags(print_id_obj, input_value) {
  var tagsHTML = "";

  for (var each of input_value) {
    tagsHTML += `<span class="label label-default">${each}</span> `;
  }

  print_id_obj.html(tagsHTML);
}

console.log("JavaScript is amazing!");

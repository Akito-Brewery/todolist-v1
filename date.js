exports.getDate = function () {

  let today = new Date();

  let options = {
    weekday: "short",
    day: "numeric",
    month: "short"
  };

  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function() {

  let today = new Date();

  let options = {
    weekday: "short",
  };

  return  today.toLocaleDateString("en-US", options);

};

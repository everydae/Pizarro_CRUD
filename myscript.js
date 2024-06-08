var rollV, nameV, middleV, surnameV, addressV, emailV;

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  middleV = document.getElementById("middle").value;
  surnameV = document.getElementById("surname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  console.log(rollV, nameV, middleV, surnameV, addressV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
     middle: middleV,
      surname: surnameV,
      address: addressV,
      email: emailV,
    });
    Swal.fire("Data Inserted!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("middle").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("middle").value = snap.val().middle;
      document.getElementById("surname").value = snap.val().surname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      middle: middleV,
      surname: surnameV,
      address: addressV,
      email: emailV,
    });
  Swal.fire("Data Updated!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("middle").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
    Swal.fire("Data has been deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("middle").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
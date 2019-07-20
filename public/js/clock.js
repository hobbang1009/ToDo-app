const headerClock = document.querySelector("#jsHeaderClock");
const clockDate = document.querySelector("#jsClockDate");

function clock() {
  const location = window.location.search.split("=")[1];

  if (location === "shanghai") {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Shanghai"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }
  if (location === "beijing") {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Shanghai"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }
  if (location === "seoul") {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Seoul"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }
  if (location === "tokyo") {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Tokyo"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }
  if (location === "london") {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "Europe/London"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }
  if (location === "newyork") {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }

  if (location === "saopaulo") {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "America/Sao_Paulo"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }
  if (location === undefined) {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Seoul"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }
  if (location === "undefined") {
    let timeset = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Seoul"
    });
    let month = new Date(timeset).getMonth() + 1;
    month = month.toLocaleString();
    let date = new Date(timeset).getDate().toLocaleString();
    let hour = new Date(timeset).getHours().toLocaleString();
    let minutes = new Date(timeset).getMinutes().toLocaleString();

    headerClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clockDate.innerHTML = `${month < 10 ? `0${month}` : month} / ${
      date < 10 ? `0${date}` : date
    }`;
  }

  setInterval(clock, 10000);
}

function init() {
  clock();
}

init();

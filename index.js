// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(d => console.log(d.name));
}
function logDriversByHometown(drivers, location) {
  drivers.forEach(
    function (driver) {
      if (driver.hometown === location) {
        console.log(driver.name);
      }
    }
  );
}

function driversByRevenue(drivers) {
  let array = [...drivers]
  return array.sort( function (a, b) {
    return parseInt(a.revenue) - parseInt(b.revenue);
  });
}

function driversByName(drivers) {
  let array = [...drivers]
  return array.sort( function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  const reduceRevenue = function (agg, el, i, arr) {
    return agg + el.revenue;
  }

  return drivers.reduce(reduceRevenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}

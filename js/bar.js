$(function() {

  /********************
   * PARAMETERS - Adjust as needed
   ********************/

  const storageTotal = 1000;
  const storageUsed = 815;

  /********************
   * FUNCTIONS
   ********************/

  // Calculate numbers based on total and used
  function calcStorage(total, used) {
    const storage = {
      total: total,
      used: used,
      left: total - used,
      pc: (used / total) * 100
    };
    return storage;
  }

  // Populate numbers in the UI
  function populateStorage(nums) {
    // Get DOM elements
    const gbLeftSpan = document.getElementById("gb-left");
    const gbUsedSpan = document.getElementById("gb-used");
    const gbTotalSpan = document.getElementById("gb-total");
    // Populate UI
    gbLeftSpan.textContent = nums.left;
    gbUsedSpan.textContent = nums.used;
    gbTotalSpan.textContent = nums.total;
  }

  // Populate the storage bar indicator in the UI
  function populateBar(nums) {
    // Get DOM elements
    const bar = $("#bar");
    const barDot = $("#bar-dot");
    // Adjust the UI
    bar.animate({ width: nums.pc + '%' }, 500);
    barDot.animate({ right: '2px'}, 500);
  }

  // Bringing it all together.
  // Calculate numbers, then populate the UI
  function populateUI() {
    const nums = calcStorage(storageTotal, storageUsed);
    populateStorage(nums);
    populateBar(nums);
  }

  /********************
   * RUN
   ********************/
  populateUI();

})

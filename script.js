document.addEventListener("DOMContentLoaded", () => {
  // Booking Level Gauge
  const gaugeElement = document.querySelector(".gauge"); // Gauge container element
  const bookingsCountElement = document.getElementById("bookings-count"); // Element displaying booking count

  // Example booking level - adjust this value or set dynamically
  const bookingLevel = 650; // Represents number of booking

  // Display booking count inside gauge center
  bookingsCountElement.textContent = bookingLevel;

  // Function to set risk level based on booking percentage
  function setRiskLevel(percentage) {
    gaugeElement.classList.remove("rischio1", "rischio2", "rischio3", "rischio4");

    if (percentage <= 250) {
      gaugeElement.classList.add("rischio1"); // Low risk
    } else if (percentage <= 450) {
      gaugeElement.classList.add("rischio2"); // Moderate risk
    } else if (percentage <= 750) {
      gaugeElement.classList.add("rischio3"); // High risk
    } else {
      gaugeElement.classList.add("rischio4"); // Critical risk
    }
  }

  // Set the risk level based on the booking level
  setRiskLevel(bookingLevel);

  // Interaction Chart
  const interactionData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
      label: "Page Interactions",
      data: [300, 350, 400, 150],
      backgroundColor: "rgba(0, 74, 173, 0.2)",
      borderColor: "#004aad",
      borderWidth: 1
    }]
  };

  const interactionChartCtx = document.getElementById('interactionChart').getContext('2d');
  new Chart(interactionChartCtx, {
    type: 'line',
    data: interactionData,
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Traffic Data
  const trafficData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
      label: "Website Traffic",
      data: [4000, 5000, 6000, 3000],
      backgroundColor: "rgba(220, 53, 69, 0.2)",
      borderColor: "#dc3545",
      borderWidth: 1
    }]
  };

  const trafficChartCtx = document.getElementById('trafficChart').getContext('2d');
  new Chart(trafficChartCtx, {
    type: 'bar',
    data: trafficData,
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Intersection Observer for Chart Animations
  const charts = document.querySelectorAll('.chart');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  charts.forEach(chart => observer.observe(chart));
});

// JavaScript to toggle the navbar
document.getElementById('hamburger-icon').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.getElementById('hamburger-icon');

  // Toggle the active class for dropdown visibility
  navLinks.classList.toggle('active');
  
  // Toggle the active state of the hamburger icon for animation
  hamburger.classList.toggle('active');
});

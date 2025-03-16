document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-text");

    const countUp = (element, target) => {
        let start = 0;
        const duration = 2000; // 2 seconds
        const interval = 50; // Update every 50ms
        const increment = target / (duration / interval);

        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.innerText = Math.ceil(start) + "+";
                setTimeout(updateCounter, interval);
            } else {
                element.innerText = target + "+"; // Ensure it reaches the exact number
            }
        };

        updateCounter();
    };

    stats.forEach(stat => {
        const target = +stat.getAttribute("data-target");
        countUp(stat, target);
    });
});

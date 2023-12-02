 function DateTime() {
            const now = new Date();
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
            
            const formattedDate = now.toLocaleDateString('en-US', dateOptions);
            const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

            document.getElementById('date').textContent = formattedDate;
            document.getElementById('time').textContent = formattedTime;
        }

        DateTime(); // Initial call
        setInterval(DateTime, 1000); 
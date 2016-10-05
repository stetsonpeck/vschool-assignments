        var coach = {
            firstName: "Kyle",
            lastName: "Whit",
            school: "university of utah",
            sport: "football",
            phoneNumber: "801.123.4567",
            email: "kyle.whit@example.com",
            };
        var coach = {
            firstName: "Kalani",
            lastName: "Sitake",
            school: "BYU",
            sport: "football",
            phoneNumber: "801.123.4567",
            email: "kalani.sitake@example.com",
            };
        function coach (firstName, lastName, school, sport, email, phoneNumber) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.school = school;
            this.sport = sport;
            this.email = email;
            this.phoneNumber = phoneNumber;
            };
        var ed = new coach("Ed", "Lamb", "BYU", "football", "ed.lamb@example.com", "801.123.4567");
        console.log

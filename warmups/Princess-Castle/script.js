var howManyActions = 3;

var player = {
        name: "John",
        totalCoins: 24,
        status: "small",
        isStarActive: false,
        setName: function (namePicked) {
            if (toLowerCase(namePicked === "mario")) {
                this.name = "Mario";
            } else if {
                (namePicked.toLowercase() === "luigi")
            } else
                alert("mario or luigi")
        }
        gotHit: function () {
            switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            default:
                this.status = "Dead";
                this.gameActive = false;
            }
        },
        gotPowerup: function () {
            if (this.staus === "big") {
                this.stus = "poweredUp";
            } else if (this.staus = "small") {
                this.staus = "big";
            }
        };
        gameAvtive: true,
        addCoin: function () {
            this.totalCoins++
        }

            console.log(this.name);
        console.log(this.totalCoins);
        console.log(this.status);
        console.log(this.star);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function doAction() {
            switch (getRandomInt(0, 2)) {
            case 0:
                player.gotHit();
                break;
            case 1:
                player.gotPowerup();
                break;
            case 2:
                player.addCoin
            default:
                console.error("Broke")

            }
        }
        for (var i = 0; i < howManyActions; i++) {
            doAction()
        }
        player.print()
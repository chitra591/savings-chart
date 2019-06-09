export default class NetworkManager {
    static DATA = {
        "data": {
            "totalSavings": {
                "edges": [
                    {
                        "node": {
                            "id": "qerqwefretqadcxvADWQ",
                            "date": "2018-12-01",
                            "amount":  400
                        }
                    },
                    {
                        "node": {
                            "id": "WRvhjgYUmbjkrgegreg",
                            "date": "2018-11-01",
                            "amount":  300
                        }
                    },
                    {
                        "node": {
                            "id": "eTqrgGefOPgbvKcbcxthwr",
                            "date": "2018-10-01",
                            "amount":  250
                        }
                    },
                    {
                        "node": {
                            "id": "rtgUhmuilHLKkyiuhbnfDndt",
                            "date": "2018-08-01",
                            "amount":  100
                        }
                    },
                    {
                        "node": {
                            "id": "soTUdvfthyrFTYukihvfPOasvcr",
                            "date": "2018-09-01",
                            "amount":  150
                        }
                    }
                ]
            }
        }
    };

    static getTotalSavings = (callback) => {
        var response = NetworkManager.DATA, error = null;
        callback(error, response);
    };
}
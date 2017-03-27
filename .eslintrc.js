module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "standard",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "standard",
        "promise",
        "react"
    ]
};

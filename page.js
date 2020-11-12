const frontPage = (hands) => {
    return (
        `
        <html>
            <head>
            <title>Poker Cheatsheet</title>
            <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
            <div>
                <h1>Poker Cheatsheet</h1>
                ${ hands.map(hand => `
                <div>
                    <h2><a href="/${ hand.id }">${ hand.name }</a></h2>
                </div>`
                ).join('')}
            </div>
            </body>
        </html>
        `
    )
}

const handPage = (hand) => {
    return (
        `
        <html>
            <head>
                <title>Poker Cheatsheet</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <div>
                <h1><a href='/'>Poker Cheatsheet</a></h1>
                <div class='container'>
                    <h2 class='display-bottom'>${ hand.name }</h2>
                    <div id='cards'>
                        <img src='${ hand.image }'/>
                    </div>
                    <h3 class='display-top'>${ hand.content }</h3>
                </div>
            </body>
        </html>
        `
    )
}

module.exports = {
    frontPage,
    handPage
}
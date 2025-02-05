const { chromium } = require('playwright');
const fs = require('fs');

async function generatePDF() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Your HTML content as a string
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
    <!-- Prism.js CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
    
    <!-- Prism.js JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
        <title>dhruv</title>
        <style>
            body {
                background-color: #111827;
                color: white;
                font-family: Arial, sans-serif;
                margin: 0 auto;
                max-width: 800px;
                padding: 20px;
                line-height: 1.6;
            }
            h1, h2 {
                color: red;
            }

            pre[class*="language-"],
code[class*="language-"] {
    white-space: pre-wrap !important;
    /* Wrap text */
    word-wrap: break-word !important;
    /* Break long words */
    overflow-x: auto !important;
    /* Enable horizontal scroll only if needed */
    max-width: 100% !important;
    /* Prevent from exceeding container */
    display: block !important;
    /* Ensure proper block display */
}

            .note-section {
                margin-bottom: 30px;
                width: 50rem;
            }

            .mt-div {
                margin-top: 2rem;
            }


            /* for table */


            table {
                width: 60%;
                border-collapse: collapse;
                margin: 20px 0;
                font-size: 18px;
                text-align: left;
            }

            th,
            td {
                padding: 10px;
                border: 1px solid #ddd;
            }
        </style>
    </head>
    <body>
    </body>
    </html>`;

    // Set the content of the page
    await page.setContent(htmlContent);

    // Save PDF with background color
    await page.pdf({
        path: '/home/loha/Desktop/notes_maker/string.pdf',
        // string.pdf h usme tu name change krde jiska tuje pdf chaiye uska naam dalde
        format: 'A4',
        printBackground: true // ✅ Background color enable
    });

    await browser.close();
}

generatePDF().then(() => console.log('✅ PDF generated successfully!'));
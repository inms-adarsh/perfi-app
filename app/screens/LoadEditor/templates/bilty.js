const bilty = (props) => {
    const valueWithoutGst = (Number(props.load.freight) || 0) + (Number(props.load.hamali) || 0) + (Number(props.load.haltage) || 0) + (Number(props.load.otherCharges) || 0);
    const totalFreight = (valueWithoutGst || 0) + ((valueWithoutGst || 0) * (props.load.gst || 0) * 0.01);
    const toPay = totalFreight - (props.load.advancePaid || 0);
    return `
    <html>
        <head>
            <meta charset="utf-8">
            <title>Invoice</title>
            <link rel="stylesheet" href="style.css">
            <style>
            /* reset */

            *
            {
                border: 0;
                box-sizing: content-box;
                color: inherit;
                font-family: inherit;
                font-size: inherit;
                font-style: inherit;
                font-weight: inherit;
                line-height: inherit;
                list-style: none;
                margin: 0;
                padding: 0;
                text-decoration: none;
                vertical-align: top;
            }
            
            /* content editable */
            
            *[contenteditable] { border-radius: 0.25em; min-width: 1em; outline: 0; }
            
            *[contenteditable] { cursor: pointer; }
            
            *[contenteditable]:hover, *[contenteditable]:focus, td:hover *[contenteditable], td:focus *[contenteditable], img.hover { background: #DEF; box-shadow: 0 0 1em 0.5em #DEF; }
            
            span[contenteditable] { display: inline-block; }
            
            /* heading */
            
            h1 { font: bold 100% sans-serif; letter-spacing: 0.5em; text-align: center; text-transform: uppercase; }
            
            /* table */
            
            table { font-size: 75%; table-layout: fixed; width: 100%; }
            table { border-collapse: separate; border-spacing: 2px; }
            th, td { border-width: 1px; padding: 0.5em; position: relative; text-align: left; }
            th, td { border-radius: 0.25em; border-style: solid; }
            th { background: #EEE; border-color: #BBB; }
            td { border-color: #DDD; }
            
            /* page */
            
            html { font: 16px/1 'Open Sans', sans-serif; overflow: auto; padding: 0.5in; }
            html { background: #999; cursor: default; }
            
            body { box-sizing: border-box; height: 11in; margin: 0 auto; overflow: hidden; padding: 0.5in; width: 8.5in; }
            body { background: #FFF; border-radius: 1px; box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5); }
            
            /* header */
            
            header { margin: 0 0 3em; }
            header:after { clear: both; content: ""; display: table; }
            
            header h1 { background: #000; border-radius: 0.25em; color: #FFF; margin: 0 0 1em; padding: 0.5em 0; }
            header address { float: left; font-size: 75%; font-style: normal; line-height: 1.25; margin: 0 1em 1em 0; }
            header address p { margin: 0 0 0.25em; }
            header span, header img { display: block; float: right; }
            header span { margin: 0 0 1em 1em; max-height: 25%; max-width: 60%; position: relative; }
            header img { max-height: 100%; max-width: 100%; }
            header input { cursor: pointer; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"; height: 100%; left: 0; opacity: 0; position: absolute; top: 0; width: 100%; }
            
            /* article */
            
            article, article address, table.meta, table.inventory { margin: 0 0 3em; }
            article:after { clear: both; content: ""; display: table; }
            article h1 { clip: rect(0 0 0 0); position: absolute; }
            
            article address { float: left; font-size: 125%; font-weight: bold; }
            
            /* table meta & balance */
            
            table.meta, table.balance { float: right; width: 40%; }
            table.meta:after, table.balance:after { clear: both; content: ""; display: table; }
            
            /* table meta */
            
            table.meta th { width: 40%; }
            table.meta td { width: 60%; text-align: left }
            
            /* table items */
            
            table.inventory { clear: both; width: 100%; }
            table.inventory th { font-weight: bold; text-align: center; }
            
            table.inventory td:nth-child(1) { text-align: center; width: 26%; }
            table.inventory td:nth-child(2) { text-align: center; width: 38%; }
            table.inventory td:nth-child(3) { text-align: center; width: 12%; }
            table.inventory td:nth-child(4) { text-align: center; width: 12%; }
            table.inventory td:nth-child(5) { text-align: center; width: 12%; }            
            table.inventory td:nth-child(6) { text-align: center; width: 12%; }

            /* table general */
            table.general { clear: both; width: 100%; }
            table.general th { font-weight: bold; text-align: center; }
            table.general td { text-align: left; }
            table.general td b { font-weight: bold; }
            /* table balance */
            
            table.balance th, table.balance td { width: 50%; }
            table.balance td { text-align: right; }
            table.balance td b { font-weight: bold; }
            /* aside */
            
            aside h1, h1.title { border: none; border-width: 0 0 1px; margin: 0 0 1em; }
            aside h1, h1.title { border-color: #999; border-bottom-style: solid; }
            
            /* javascript */
            
            .add, .cut
            {
                border-width: 1px;
                display: block;
                font-size: .8rem;
                padding: 0.25em 0.5em;	
                float: left;
                text-align: center;
                width: 0.6em;
            }
            
            .add, .cut
            {
                background: #9AF;
                box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                background-image: -moz-linear-gradient(#00ADEE 5%, #0078A5 100%);
                background-image: -webkit-linear-gradient(#00ADEE 5%, #0078A5 100%);
                border-radius: 0.5em;
                border-color: #0076A3;
                color: #FFF;
                cursor: pointer;
                font-weight: bold;
                text-shadow: 0 -1px 2px rgba(0,0,0,0.333);
            }
            
            .add { margin: -2.5em 0 0; }
            
            .add:hover { background: #00ADEE; }
            
            .cut { opacity: 0; position: absolute; top: 0; left: -1.5em; }
            .cut { -webkit-transition: opacity 100ms ease-in; }
            
            tr:hover .cut { opacity: 1; }
            
            @media print {
                * { -webkit-print-color-adjust: exact; }
                html { background: none; padding: 0; }
                body { box-shadow: none; margin: 0; }
                span:empty { display: none; }
                .add, .cut { display: none; }
            }
            
            @page { margin: 0; }
            </style>
        </head>
        <body>
            <header>
                <h1>Bilty</h1>
                <address contenteditable>
                    ${header(props.settings)}
                </address>
                <table class="meta">
                   ${biltyBasics(props.load)}
                </table>
            </header>
            <h1 class="title">General Info</h1>
            ${generalInfo(props.load)}
            
            <h1 class="title">Items</h1>
            <article>
                <table class="inventory">
                    <thead>
                        <tr>
                            <th><span contenteditable>Item</span></th>
                            <th><span contenteditable>Weight</span></th>
                            <th><span contenteditable>Units</span></th>
                            <th><span contenteditable>No.of Packets</span></th>
                        </tr>
                    </thead>
                    <tbody>
                       ${lineItems(props.load.items)}
                    </tbody>
                </table>
                
                <table class="balance">
                    <tr>
                        <th><span contenteditable>Freight</span></th>
                        <td><span data-prefix>${props.load.freight || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Hamali</span></th>
                        <td><span data-prefix>${props.load.hamali || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Haltage</span></th>
                        <td><span data-prefix>${props.load.haltage || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Other Charges</span></th>
                        <td><span data-prefix>${props.load.otherCharges || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Total Freight Without GST</span></th>
                        <td><span data-prefix>${valueWithoutGst || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>GST</span></th>
                        <td><span data-prefix>${props.load.gst} %</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Total Freight</span></th>
                        <td><span data-prefix>${totalFreight || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Advance Payment</span></th>
                        <td><span data-prefix>${props.load.advancePaid || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>To Pay</span></th>
                        <td><b><span data-prefix>${toPay || 0} ₹</span></b></td>
                    </tr>
                </table>
                <table class="balance">
                    <tr>
                        <th><span contenteditable>Goods Value</span></th>
                        <td><span data-prefix>${props.load.goodsValue || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Total Quantity</span></th>
                        <td><span data-prefix>${props.load.totalQuantity || 0} ${props.load.quantityUnit || ''}</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Rate per unit</span></th>
                        <td><span data-prefix>${props.load.ratePerUnit || 0} ₹</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Freight Paid By</span></th>
                        <td><span data-prefix>${props.load.freightBy || ''}</span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>GST Paid By</span></th>
                        <td><span data-prefix>${props.load.gstBy || ''}</span></td>
                    </tr>
                </table>
            </article>
            <aside>
                <h1><span contenteditable>Additional Notes</span></h1>
                <div contenteditable>
                    <p>${props.settings && props.settings.notes ? props.settings.notes : ''}</p>
                </div>
            </aside>
        </body>
    </html>`
}

const header = (settings) => {
    if (!settings) {
        return ``
    }
    return `
                    <p>${settings.name || ''}</p>
                    <p>${settings.address || ''}</p>
                    <p>${settings.phone || ''}</p>
                    <p>${settings.email || ''}</p>
                    <p>GSTIN: ${settings.gst || ''}</p>
    `
}


const biltyBasics = (load) => {
    return `
                    <tr>
                        <th><span contenteditable>Load #</span></th>
                        <td>${load.loadNo || ''}</td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Date</span></th>
                        <td>${new Date(load.date) || ''}</td>
                    </tr>
    `
}

const generalInfo = (load) => {
    return `
    <table class="general">
        <thead>
            <tr>
                <th><span contenteditable>Customer</span></th>
                <th><span contenteditable>Consignor</span></th>
                <th><span contenteditable>Consignee</span></th>
                <th><span contenteditable>Delivery</span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                ${load.customer ? ` 
                    <td>
                        <p><b>Name:</b> ${load.customer.name || ''}</p>
                        <p><b>Phone:</b> ${load.customer.phone || ''}</p>
                        <p><b>Address:</b> ${load.customer.address || ''}</p>
                        <p><b>GSTIN:</b> ${load.customer.gst || ''}</p>
                    </td>
                `: ''}
                ${load.consignor ? `
                <td>
                    <p><b>Name:</b> ${load.consignor.name || ''}</p>
                    <p><b>Phone:</b> ${load.consignor.phone || ''}</p>
                    <p><b>Address:</b> ${load.consignor.address || ''}</p>
                    <p><b>GSTIN:</b> ${load.consignor.gst || ''}</p>
                </td>
                `: ''}
                ${load.consignee ? `
                <td>
                    <p><b>Name:</b> ${load.consignee.name || ''}</p>
                    <p><b>Phone:</b> ${load.consignee.phone || ''}</p>
                    <p><b>Address:</b> ${load.consignee.address || ''}</p>
                    <p><b>GSTIN:</b> ${load.consignee.gst || ''}</p>
                </td>
                `: ''}
                <td>
                ${load.fromLocation ? `<p><b>From:</b> ${load.fromLocation.city || ''}, ${load.fromLocation.state || ''}</p>` : ''}
                ${load.toLocation ? `<p><b>To:</b> ${load.toLocation.city || ''}, ${load.toLocation.state || ''}</p>` : ''}
                    <p><b>Address:</b> ${load.deliveryAddress || ''}</p>
                    <p><b>Carrier No:</b> ${load.truck && load.truck.carrierNo ? load.truck.carrierNo : ''}</p>
                </td>
            </tr>
        </tbody>
    </table>
    `
}
const lineItems = (items) => {
    let lineItems = '';
    if (items.length === 0) {
        return lineItems;
    }
    items.forEach(item => {
        lineItems += `
        <tr>
            <td><span contenteditable>${item.name || ''}</span></td>
            <td><span data-prefix>${item.weight || ''}</span></td>
            <td><span contenteditable>${item.unit || ''}</span></td>
            <td><span data-prefix>${item.packet || ''}</span></td>
        </tr>
        `
    });
    return lineItems;
}
export default bilty;
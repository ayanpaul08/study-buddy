/* ============================================================================
   data.js — All content lives here. index.html (the engine) never changes.
   ============================================================================

   STRUCTURE
   ---------
   Each unit's topics[0] holds:
     learn[] → teaching cards (prose / diagram / example / caseStudy)
     sets[]  → up to 10 practice sets, each { label, mix, questions[] }

   LEARN BLOCK types:
     {h:"Heading", kicker:"LABEL", html:"<p>...</p>"}
     {diagram:"<svg>...</svg>", cap:"caption"}
     {example:"plain text"}
     {caseStudy:"plain text"}

   QUESTION fields:
     type : "standard" | "assertion" | "matching" | "case"
     diff : "E" | "M" | "VH"   (Easy / Moderate / Very Hard — shows a badge)
     q, options[4], answer (0-3), explain, optionExplains[4]
     "assertion" adds: assertion, reason   |   "matching" adds: columnA[], columnB[]
     "case" adds: passage

   DIFFICULTY PROGRESSION (questions per set, out of 30):
     Set 1: 15E/9M/6VH ... Set 10: 9E/9M/12VH  (Moderate fixed at 9)
   ============================================================================ */

const DATA = {

  /* ══════════════════════════════════════════════════════════════════════════
     ACCOUNTANCY
     ══════════════════════════════════════════════════════════════════════════ */
  accountancy:{
    name:"Accountancy", code:"ACC", accent:"ready",
    units:[
      {
        id:"acc-u1",
        title:"Introduction & Theory Base of Accounting",
        marks:12,
        topics:[{

          /* ============================== LEARN ============================== */
          learn:[

            /* ── ACCOUNTING — MEANING, OBJECTIVES & USERS ── */
            {topicStart:"accounting", title:"Accounting — Meaning, Objectives & Users", icon:"📊", desc:"What accounting is, who uses it, its objectives, limitations and three sub-fields of accounting."},
            {h:"Why do we even need Accounting?", kicker:"Unit 1 · The big idea", html:`
              <p>Every person and every organisation carries out <strong>economic activities</strong> — earning money and spending it. A shopkeeper buys goods and sells them; a school collects fees and pays teachers; even the Government raises taxes and spends on roads.</p>
              <p>These activities happen through <b>transactions</b> and <b>events</b>:</p>
              <ul>
                <li>A <b>transaction</b> is a dealing — buying goods, paying rent, taking a loan.</li>
                <li>An <b>event</b> is a <i>result</i> of transactions — earning a profit, having stock left over at year-end.</li>
              </ul>
              <p>Everyone wants to <strong>keep a record</strong> of these and know the result. Accounting is the discipline built to do exactly that. Because it tells the financial story of a business, it is called the <strong>"language of business."</strong></p>`},
            {example:"A trader invests ₹2,00,000 in a stationery shop. In January he buys goods for ₹1,15,000, sells goods for ₹1,47,000, pays shop rent ₹5,000, and still has goods worth ₹15,000 left. Did he gain? Sales ₹1,47,000 + Closing stock ₹15,000 = ₹1,62,000; less Goods bought ₹1,15,000 + Rent ₹5,000 = ₹1,20,000. Surplus = ₹42,000. Here buying/selling goods, investing money and paying rent are TRANSACTIONS; earning the ₹42,000 surplus and having stock in hand are EVENTS."},
            {h:"What is Accounting? — The definition", kicker:"Meaning", html:`
              <p>The classic 1961 definition (AICPA) says:</p>
              <p style="border-left:3px solid var(--gold);padding-left:14px;font-style:italic;color:var(--ink)">"Accounting is the <b>art of recording, classifying and summarising</b> in a significant manner and in terms of money, transactions and events which are, in part at least, of a financial character, and <b>interpreting</b> the results thereof."</p>
              <p>Modern accounting goes one step further and adds <b>communicating</b> the result to users. So the full modern process is:</p>
              <p><strong>Identifying → Recording → Classifying → Summarising → Analysing → Interpreting → Communicating.</strong></p>
              <p>Two conditions matter: a transaction is recorded only if (1) it can be measured in <b>money</b>, and (2) it has a <b>financial character</b>. Opening a new branch is an event with no financial character; the business done by that branch has financial character.</p>`},
            {diagram:`<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="250" y="6" width="200" height="34" rx="9" fill="#234f3b"/>
              <text x="350" y="28" text-anchor="middle" font-size="14" font-weight="600" fill="#f4efe3">Procedure of Accounting</text>
              <line x1="170" y1="40" x2="170" y2="60" stroke="#b6862c" stroke-width="2"/><line x1="530" y1="40" x2="530" y2="60" stroke="#b6862c" stroke-width="2"/><line x1="170" y1="40" x2="530" y2="40" stroke="#b6862c" stroke-width="2"/>
              <rect x="60" y="60" width="220" height="30" rx="7" fill="#e3eee6" stroke="#2f6b4f"/><text x="170" y="80" text-anchor="middle" font-size="12.5" font-weight="600" fill="#234f3b">Generating financial information</text>
              <rect x="420" y="60" width="220" height="30" rx="7" fill="#f8f0db" stroke="#b6862c"/><text x="530" y="80" text-anchor="middle" font-size="12.5" font-weight="600" fill="#8a6420">Using financial information</text>
              ${['Recording','Classifying','Summarising'].map((t,i)=>`<rect x="${30+i*88}" y="110" width="80" height="40" rx="7" fill="#fbf8f0" stroke="#2f6b4f"/><text x="${70+i*88}" y="134" text-anchor="middle" font-size="11.5" fill="#234f3b">${t}</text>`).join('')}
              ${['Analysing','Interpreting','Communicating'].map((t,i)=>`<rect x="${390+i*100}" y="110" width="92" height="40" rx="7" fill="#fbf8f0" stroke="#b6862c"/><text x="${436+i*100}" y="134" text-anchor="middle" font-size="11" fill="#8a6420">${t}</text>`).join('')}
              <text x="350" y="185" text-anchor="middle" font-size="12" fill="#3c4742" font-style="italic" font-family="Fraunces">Book-keeping = Recording + Classifying + Summarising (+ Trial Balance)</text>
              <text x="350" y="208" text-anchor="middle" font-size="12" fill="#3c4742" font-style="italic" font-family="Fraunces">Accounting = the above PLUS Analysing, Interpreting &amp; Communicating</text>
            </svg>`, cap:"Accounting has two halves — generating the information, and then actually using it."},
            {h:"Book-keeping vs Accounting vs Accountancy", kicker:"Don't confuse these three", html:`
              <p>Students mix these up constantly. The trick: they are <b>three nested circles</b>, from narrowest to widest.</p>
              <table class="cmp">
                <tr><th>Term</th><th>What it does</th><th>Scope</th></tr>
                <tr><td><b>Book-keeping</b></td><td>Only <i>records</i> transactions (the clerical, routine stage)</td><td>Narrowest</td></tr>
                <tr><td><b>Accounting</b></td><td>Recording <i>plus</i> classifying, summarising, analysing, interpreting, communicating</td><td>Wider</td></tr>
                <tr><td><b>Accountancy</b></td><td>The entire body of knowledge, principles &amp; rules that govern accounting</td><td>Widest</td></tr>
              </table>
              <p>Remember: <strong>Accounting starts where book-keeping ends.</strong></p>`},
            {diagram:`<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="20" y="14" width="380" height="212" rx="12" fill="#e3eee6" stroke="#234f3b" stroke-width="1.5"/>
              <text x="210" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="#234f3b" font-family="Fraunces">ACCOUNTANCY</text>
              <rect x="70" y="52" width="280" height="150" rx="10" fill="#f8f0db" stroke="#b6862c" stroke-width="1.5"/>
              <text x="210" y="74" text-anchor="middle" font-size="14" font-weight="700" fill="#8a6420" font-family="Fraunces">ACCOUNTING</text>
              <rect x="125" y="92" width="170" height="92" rx="8" fill="#fbf8f0" stroke="#c0492f" stroke-width="1.5"/>
              <text x="210" y="130" text-anchor="middle" font-size="13" font-weight="700" fill="#b23a26" font-family="Fraunces">BOOK-</text>
              <text x="210" y="150" text-anchor="middle" font-size="13" font-weight="700" fill="#b23a26" font-family="Fraunces">KEEPING</text>
            </svg>`, cap:"Each term contains the one inside it. Book-keeping is a part of accounting, which is a part of accountancy."},
            {h:"Objectives & Functions of Accounting", kicker:"What accounting is FOR", html:`
              <p><b>Objectives</b> (the goals):</p>
              <ul>
                <li><b>Systematic recording</b> of all transactions (this is book-keeping).</li>
                <li><b>Ascertain results</b> — profit or loss — via the Profit &amp; Loss Account.</li>
                <li><b>Ascertain financial position</b> — what the business owns and owes — via the Balance Sheet.</li>
                <li><b>Provide information</b> to users for rational decision-making.</li>
                <li><b>Know the solvency position</b> — can the business pay its dues in the short and long run.</li>
              </ul>
              <p><b>Functions</b> (what it actually performs): Measurement, Forecasting, Decision-making, Comparison &amp; Evaluation, Control, and Government Regulation &amp; Taxation.</p>`},
            {h:"Who uses accounting information?", kicker:"Internal vs External users", html:`
              <p>Users split into two groups by whether they sit <i>inside</i> or <i>outside</i> the business — and each wants the information for a different reason.</p>`},
            {diagram:`<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="255" y="6" width="170" height="34" rx="9" fill="#234f3b"/><text x="340" y="28" text-anchor="middle" font-size="13.5" font-weight="600" fill="#f4efe3">Users of Accounts</text>
              <line x1="160" y1="40" x2="160" y2="62" stroke="#b6862c" stroke-width="2"/><line x1="520" y1="40" x2="520" y2="62" stroke="#b6862c" stroke-width="2"/><line x1="160" y1="40" x2="520" y2="40" stroke="#b6862c" stroke-width="2"/>
              <rect x="70" y="62" width="180" height="32" rx="8" fill="#e3eee6" stroke="#2f6b4f"/><text x="160" y="83" text-anchor="middle" font-size="13" font-weight="600" fill="#234f3b">INTERNAL</text>
              <rect x="430" y="62" width="180" height="32" rx="8" fill="#f8f0db" stroke="#b6862c"/><text x="520" y="83" text-anchor="middle" font-size="13" font-weight="600" fill="#8a6420">EXTERNAL</text>
              ${['Owners / Proprietors','Management','Employees'].map((t,i)=>`<text x="160" y="${118+i*26}" text-anchor="middle" font-size="12" fill="#3c4742">• ${t}</text>`).join('')}
              ${['Investors','Lenders (banks)','Suppliers / Creditors','Customers','Government &amp; agencies','Public'].map((t,i)=>`<text x="520" y="${116+i*22}" text-anchor="middle" font-size="11.5" fill="#3c4742">• ${t}</text>`).join('')}
            </svg>`, cap:"Owners, managers and employees are inside; everyone else looks in from outside."},
            {h:"Sub-fields of Accounting", kicker:"The branches", html:`
              <table class="cmp">
                <tr><th>Sub-field</th><th>Purpose</th><th>Looks at</th></tr>
                <tr><td><b>Financial Accounting</b></td><td>Record past transactions; prepare P&amp;L and Balance Sheet</td><td>The past, whole business</td></tr>
                <tr><td><b>Cost Accounting</b></td><td>Ascertain &amp; control cost of products/services</td><td>Costs, in detail</td></tr>
                <tr><td><b>Management Accounting</b></td><td>Provide information to managers for planning &amp; decisions</td><td>The future</td></tr>
              </table>
              <p>Two newer branches also exist: <b>Social Responsibility Accounting</b> (accounting for social costs &amp; benefits) and <b>Human Resource Accounting</b> (valuing people).</p>`},
            {h:"Limitations of Accounting", kicker:"Where it falls short", html:`
              <p>Accounts are useful but <b>not perfect</b>. Key limitations:</p>
              <ul>
                <li>Things <b>not measurable in money</b> (staff loyalty, skill) are ignored, even if very valuable.</li>
                <li>The Balance Sheet shows the position on <b>one past date</b>, not the future.</li>
                <li>It <b>ignores price-level changes</b> (inflation) — assets stay at old cost.</li>
                <li>Accounting principles sometimes <b>conflict</b> with each other.</li>
                <li>Many figures depend on the accountant's <b>personal judgement</b> (e.g. depreciation method, provision for doubtful debts).</li>
                <li>Different policies for the same item open the door to <b>manipulation</b>.</li>
              </ul>`},
            /* ── BASIC ACCOUNTING TERMS ── */
            {topicStart:"terms", title:"Basic Accounting Terms", icon:"🔤", desc:"Capital, drawings, assets, liabilities, goods, stock, discount, debtors, creditors, receipts and expenditure."},
            {h:"Capital, Drawings, and the owner's financial stake", kicker:"Basic Accounting Terms · Owner's stake", html:`
              <p>Every business has an owner (or owners) who invest resources into it. These concepts define the financial relationship between the owner and the business — remember, under the <b>Business Entity Concept</b>, the business and the owner are treated as completely separate.</p>
              <ul>
                <li><b>Capital:</b> The amount invested by the owner in the business — cash, goods, or any asset brought in. From the business's viewpoint, capital is what the business <i>owes back</i> to the owner and is therefore treated as an internal liability (also called Owner's Equity or Proprietor's Fund).</li>
                <li><b>Drawings:</b> Any cash, goods, or asset taken out of the business by the owner for personal use. Drawings reduce capital. They are NOT an expense of the business — they are a withdrawal of the owner's stake.</li>
                <li><b>Net Worth:</b> Capital + Profits earned − Losses − Drawings = the true net stake of the owner in the business at any point.</li>
              </ul>
              <p><b>Formula for closing capital:</b> Closing Capital = Opening Capital + Fresh Capital Introduced + Net Profit − Net Loss − Drawings.</p>
              <p><b>Example:</b> Ramesh starts a business with ₹5,00,000 cash. He takes ₹20,000 worth of goods for home use in June. The ₹20,000 is Drawings — it reduces his capital to ₹4,80,000 (before any profit or loss). If the business earns ₹80,000 profit, closing capital = ₹4,80,000 + ₹80,000 = ₹5,60,000.</p>`},
            {h:"Assets — what the business owns and controls", kicker:"Basic Accounting Terms · Assets", html:`
              <p>An <b>asset</b> is any resource owned or controlled by the business that is expected to provide future economic benefit. Assets are broadly divided into Fixed (Non-current) and Current Assets.</p>
              <table class="cmp">
                <tr><th colspan="2">Fixed / Non-current Assets — held for long-term use; NOT for resale</th></tr>
                <tr><td><b>Tangible</b></td><td>Have physical existence — land, buildings, machinery, vehicles, furniture, equipment</td></tr>
                <tr><td><b>Intangible</b></td><td>No physical form but carry real value — goodwill, patents, trademarks, copyrights, brand names</td></tr>
                <tr><td><b>Wasting / Depleting</b></td><td>Natural resources that physically diminish as they are used — mines, oil and gas wells, quarries, timber forests</td></tr>
                <tr><td><b>Fictitious</b></td><td>Not real assets — losses or expenses that cannot be written off at once and are carried forward temporarily — preliminary expenses, discount on issue of shares. Written off gradually over future years.</td></tr>
                <tr><th colspan="2">Current Assets — expected to be converted to cash or consumed within one year</th></tr>
                <tr><td colspan="2">Inventories (stock), Debtors (trade receivables), Cash and bank balance, Short-term investments, Bills receivable, Prepaid expenses, Accrued income</td></tr>
              </table>
              <p>⭐ <strong>Key rule:</strong> The same item can be a fixed asset for one business and stock (goods) for another. A car is a fixed asset for a transport company — but for a car dealer, it is stock-in-trade.</p>`},
            {h:"Liabilities — what the business owes to outside parties", kicker:"Basic Accounting Terms · Liabilities", html:`
              <p>A <b>liability</b> is an obligation — a legal duty to pay money, goods, or services to an external party — arising from a past transaction or event.</p>
              <table class="cmp">
                <tr><th>Type</th><th>Meaning</th><th>Examples</th></tr>
                <tr><td><b>Long-term (Non-current) Liabilities</b></td><td>Repayable after more than one year</td><td>Term loans from banks, debentures, mortgage loans, long-term bonds</td></tr>
                <tr><td><b>Current (Short-term) Liabilities</b></td><td>Repayable within one year</td><td>Trade creditors, bills payable, bank overdraft, outstanding expenses, short-term loans, income received in advance</td></tr>
                <tr><td><b>Contingent Liability</b></td><td>A possible obligation that may arise depending on a future uncertain event</td><td>A court case that may go against the business; a guarantee given on behalf of a third party</td></tr>
              </table>
              <p><b>Capital vs Liabilities:</b> Capital (owner's equity) is sometimes called an <i>internal liability</i> — the business owes it to the owner. External liabilities (loans, creditors) are owed to outsiders. The <b>Accounting Equation</b> captures this: <strong>Assets = Capital + Liabilities</strong> — everything the business owns is financed either by the owner or by outsiders.</p>`},
            {h:"Goods, Stock, Purchases, Sales, Debtors and Creditors", kicker:"Basic Accounting Terms · Trading vocabulary", html:`
              <p>These six terms form the core vocabulary of any trading business. Getting them right is essential for understanding all future journal entries and financial statements.</p>
              <table class="cmp">
                <tr><th>Term</th><th>Meaning</th><th>Key point</th></tr>
                <tr><td><b>Goods</b></td><td>Items in which the business trades — bought and sold as the main business activity</td><td>What is "goods" for one business may be a fixed asset for another. A computer is goods for a computer dealer; a fixed asset for an accountant.</td></tr>
                <tr><td><b>Stock (Inventory)</b></td><td>Value of unsold goods at the end of an accounting period</td><td>Opening Stock = start of period; Closing Stock = end of period</td></tr>
                <tr><td><b>Purchases</b></td><td>Goods bought for resale (or raw materials for production)</td><td>Cash Purchase — paid immediately; Credit Purchase — paid later, creates a Creditor</td></tr>
                <tr><td><b>Sales</b></td><td>Goods sold to customers</td><td>Cash Sale — received immediately; Credit Sale — received later, creates a Debtor</td></tr>
                <tr><td><b>Debtors (Trade Receivables)</b></td><td>Persons who owe money to the business — they bought goods on credit from us</td><td>Debtors are a <i>current asset</i> — the business expects to collect this money</td></tr>
                <tr><td><b>Creditors (Trade Payables)</b></td><td>Persons to whom the business owes money — we bought goods on credit from them</td><td>Creditors are a <i>current liability</i> — the business must pay this amount</td></tr>
              </table>`},
            {h:"Trade Discount and Cash Discount — two very different reductions", kicker:"Basic Accounting Terms · Discount", html:`
              <p>Both discounts reduce the amount paid, but they arise at different times and are treated very differently in the books of account.</p>
              <table class="cmp">
                <tr><th></th><th>Trade Discount</th><th>Cash Discount</th></tr>
                <tr><td><b>When given</b></td><td>At the time of sale — deducted from the list price on the invoice</td><td>After the sale — given for prompt / early payment</td></tr>
                <tr><td><b>Purpose</b></td><td>To encourage bulk buying, or to give dealers a margin to sell at MRP</td><td>To encourage quick settlement of dues</td></tr>
                <tr><td><b>Recorded in books?</b></td><td>❌ NO — only the net price (after discount) is entered. The discount itself never appears in any account.</td><td>✅ YES — the full invoice amount and the discount are both recorded. Discount Allowed is an expense for the seller; Discount Received is income for the buyer.</td></tr>
                <tr><td><b>Example</b></td><td>List price ₹10,000 less 20% trade discount = invoice at ₹8,000 (only ₹8,000 enters the books)</td><td>If the ₹8,000 invoice is paid within 10 days, 2% cash discount = ₹160. Books show: invoice ₹8,000, discount allowed ₹160, cash received ₹7,840.</td></tr>
              </table>
              <p><b>Memory aid:</b> Trade discount is a price reduction before the sale is recorded. Cash discount is a reward after the sale is recorded, for paying quickly.</p>`},
            {h:"Revenue, Income, Profit, Loss, Bad Debts, Voucher and more", kicker:"Basic Accounting Terms · More key terms", html:`
              <p>These terms complete the core vocabulary of accounting. Each has a precise meaning that differs from everyday usage.</p>
              <table class="cmp">
                <tr><th>Term</th><th>Meaning</th></tr>
                <tr><td><b>Revenue</b></td><td>Income earned from the normal, recurring business operations — sales, fees, commission received, rent received. Recurring in nature.</td></tr>
                <tr><td><b>Income</b></td><td>A broader term covering all earnings — includes both revenue from operations and other income (gain on sale of asset, interest received).</td></tr>
                <tr><td><b>Profit</b></td><td>The surplus when revenue exceeds expenses. Gross Profit = Revenue − Cost of Goods Sold. Net Profit = Gross Profit − all other operating expenses.</td></tr>
                <tr><td><b>Loss</b></td><td>The deficit when expenses exceed revenue. Reduces owner's capital.</td></tr>
                <tr><td><b>Gain</b></td><td>A one-off, incidental profit not from the main business operations — e.g. profit on sale of old machinery. Non-recurring.</td></tr>
                <tr><td><b>Bad Debts</b></td><td>Amounts owed by debtors that are irrecoverable and must be written off as a loss (expense).</td></tr>
                <tr><td><b>Voucher</b></td><td>A written document that serves as evidence for a business transaction — the source document for every journal entry. Examples: invoice, receipt, cheque counterfoil, debit/credit note.</td></tr>
                <tr><td><b>Solvent / Insolvent</b></td><td>Solvent: the business can meet all its financial obligations (assets &gt; liabilities). Insolvent: cannot meet obligations (liabilities &gt; assets).</td></tr>
              </table>`},

            {h:"Capital vs Revenue Expenditure", kicker:"Basic Accounting Terms · Spending", html:`
              <p>Every rupee a business spends must be classified as either <b>capital</b> or <b>revenue</b>. Getting this wrong distorts both the profit figure and the Balance Sheet.</p>
              <table class="cmp">
                <tr><th></th><th>Capital Expenditure</th><th>Revenue Expenditure</th></tr>
                <tr><td><b>Benefit period</b></td><td>More than one accounting period</td><td>Current accounting period only</td></tr>
                <tr><td><b>Purpose</b></td><td>Enhance / increase capacity</td><td>Maintain earning capacity</td></tr>
                <tr><td><b>Shown in</b></td><td>Balance Sheet (as asset)</td><td>Profit &amp; Loss Account (as expense)</td></tr>
                <tr><td><b>Examples</b></td><td>Purchase of machine, building, vehicle</td><td>Salary, rent, repairs, stationery</td></tr>
              </table>
              <p><b>Key test:</b> Does the spending create an asset or lasting benefit beyond this year? If yes → capital. If it is just for running the business this year → revenue.</p>`},
            {diagram:`<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="230" y="8" width="220" height="36" rx="10" fill="#234f3b"/><text x="340" y="31" text-anchor="middle" font-size="14" font-weight="600" fill="#f4efe3">A rupee spent by the business</text>
              <line x1="190" y1="44" x2="190" y2="70" stroke="#b6862c" stroke-width="2"/><line x1="490" y1="44" x2="490" y2="70" stroke="#b6862c" stroke-width="2"/><line x1="190" y1="44" x2="490" y2="44" stroke="#b6862c" stroke-width="2"/>
              <rect x="50" y="70" width="280" height="40" rx="9" fill="#e3eee6" stroke="#2f6b4f"/><text x="190" y="95" text-anchor="middle" font-size="13" font-weight="600" fill="#234f3b">CAPITAL EXPENDITURE</text>
              <rect x="370" y="70" width="280" height="40" rx="9" fill="#f8f0db" stroke="#b6862c"/><text x="510" y="95" text-anchor="middle" font-size="13" font-weight="600" fill="#8a6420">REVENUE EXPENDITURE</text>
              <text x="190" y="130" text-anchor="middle" font-size="12" fill="#3c4742">→ Asset side of Balance Sheet</text>
              <text x="190" y="148" text-anchor="middle" font-size="12" fill="#3c4742">→ Depreciated over useful life</text>
              <text x="190" y="166" text-anchor="middle" font-size="12" fill="#3c4742">→ Benefit lasts many years</text>
              <text x="510" y="130" text-anchor="middle" font-size="12" fill="#3c4742">→ Charged to P&amp;L this year</text>
              <text x="510" y="148" text-anchor="middle" font-size="12" fill="#3c4742">→ Fully written off now</text>
              <text x="510" y="166" text-anchor="middle" font-size="12" fill="#3c4742">→ Benefit expires this year</text>
            </svg>`, cap:"The same money test — enduring benefit = capital; this-year-only benefit = revenue."},
            {h:"Tricky cases in Capital vs Revenue", kicker:"Where students go wrong", html:`
              <ul>
                <li><b>Overhaul of second-hand machinery on purchase</b> → <b>Capital</b>. It puts the asset in working condition; without it the asset couldn't be used. It's part of the cost.</li>
                <li><b>Major repairs that increase capacity</b> → <b>Capital</b>. They enhance, not merely maintain.</li>
                <li><b>Routine maintenance / replacing worn-out parts</b> → <b>Revenue</b>. It maintains, not enhances.</li>
                <li><b>Legal fee to acquire property</b> → <b>Capital</b>. It's part of the cost of the asset.</li>
                <li><b>Legal fee to defend a suit about ownership</b> → <b>Revenue</b>. No new asset is created; it just maintains what you already have.</li>
                <li><b>License to start a factory / cinema</b> → <b>Capital</b>. Without it you can't operate at all.</li>
                <li><b>Temporary huts built during construction</b> → <b>Capital</b>. They are incidental to constructing the main asset.</li>
                <li><b>Nature of business matters</b>: For a furniture dealer, buying furniture = Revenue. For any other business, buying furniture = Capital.</li>
              </ul>`},
            {example:"Best Tech Solutions buys and sells computers. It buys 20 computers for resale @ ₹20,000 each = ₹4,00,000 → REVENUE expenditure (trading goods). It also buys 1 computer @ ₹24,000 for its accountant → CAPITAL expenditure (enduring benefit for office operations). The same item — a computer — is treated differently based on the purpose it serves."},
            {caseStudy:"Good Pictures Ltd. builds a cinema hall. (1) Second-hand furniture ₹9,000 + repainting ₹1,000 + wages for installation ₹200 → ALL capitalised as ₹10,200 (total cost to bring asset to usable state). (2) Cinema license ₹20,000 → Capital; fine ₹1,000 for rule violation → Revenue; renewal fee ₹2,000 for next year → Revenue, but prepaid (asset). (3) Fire insurance ₹1,000 paid 1 Oct for 1 year → half is current expense, half is prepaid. (4) Temporary huts ₹1,200 → Capital (incidental to construction). The golden thread: anything needed to build and ready the asset = capital."},
            {h:"Capital vs Revenue Receipts", kicker:"Money coming IN", html:`
              <p>Receipts also split into two types:</p>
              <table class="cmp">
                <tr><th></th><th>Capital Receipt</th><th>Revenue Receipt</th></tr>
                <tr><td><b>Nature</b></td><td>From sale of assets, loans, owner's capital</td><td>From normal business operations</td></tr>
                <tr><td><b>Recurrence</b></td><td>Non-recurring</td><td>Recurring</td></tr>
                <tr><td><b>Shown in</b></td><td>Balance Sheet (liability/capital side); only profit/loss on disposal goes to P&amp;L</td><td>P&amp;L Account — credited as income</td></tr>
                <tr><td><b>Examples</b></td><td>Sale of machine, loan from bank, share capital, insurance claim for asset damaged</td><td>Sales revenue, interest earned, rent received</td></tr>
              </table>
              <p>Key: Revenue receipts are credited directly to P&amp;L. Capital receipts are NOT — only the profit or loss on them is taken to P&amp;L.</p>`},
            {example:"A machine costing ₹90,000 is sold for ₹92,000. The ₹92,000 is a capital receipt — it is NOT credited to P&L. Instead: Sale Proceeds ₹92,000 − Cost ₹90,000 = Profit ₹2,000 only is credited to P&L. The full ₹92,000 is not income."},
            {h:"Deferred Revenue Expenditure", kicker:"The in-between", html:`
              <p>Some expenditure is revenue in nature — it does not create a fixed asset — but its benefit lasts more than one year. These are called <b>Deferred Revenue Expenditures</b>. They are shown in the Balance Sheet temporarily and written off over the years of benefit.</p>
              <ul>
                <li>Heavy advertising campaign on launch of a product → benefit spreads over 3-5 years.</li>
                <li>Preliminary (formation) expenses of a company.</li>
                <li>Discount on issue of shares or debentures.</li>
              </ul>
              <p>They are <b>not assets</b> in the true sense (no physical existence, no resale value), but they are deferred and amortised because matching demands it.</p>`},
            {h:"Contingent Assets & Contingent Liabilities", kicker:"Basic Accounting Terms · Uncertainty", html:`
              <p>Some items are <b>not yet real</b> — they depend on a future uncertain event. These are contingent items.</p>
              <p><b>Contingent Asset</b> — a <i>possible</i> asset that arises from past events, whose existence will be confirmed only when one or more uncertain future events occur (or don't occur). The classic example: a lawsuit the business has filed against someone — if it wins, an asset materialises.</p>
              <p>⚠️ <b>Prudence says: do NOT recognise a contingent asset</b> in the books. Disclose it in the Board's report only if inflow is probable. If it becomes virtually certain, only then recognise it.</p>
              <p><b>Contingent Liability</b> — a <i>possible</i> obligation arising from past events that may or may not crystallise depending on uncertain future events. Examples: a lawsuit filed against the business, a guarantee given for a third party's loan, bills discounted but not yet matured.</p>
              <p>⚠️ <b>Do NOT record it in the Balance Sheet. Disclose it in Notes to Accounts</b> (unless outflow is remote). If it later becomes probable, it becomes a Provision.</p>`},
            {diagram:`<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="0" y="8" width="330" height="214" rx="12" fill="#e3eee6" stroke="#2f6b4f" stroke-width="1.5"/>
              <text x="165" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="#234f3b" font-family="Fraunces">LIABILITIES</text>
              <text x="165" y="54" text-anchor="middle" font-size="12" fill="#3c4742">Present financial obligation</text>
              <text x="165" y="70" text-anchor="middle" font-size="12" fill="#3c4742">from past events</text>
              <text x="165" y="90" text-anchor="middle" font-size="12" fill="#2f6b4f" font-weight="600">✓ Recognised in Balance Sheet</text>
              <text x="165" y="110" text-anchor="middle" font-size="12" fill="#3c4742">Amount known / reliably estimated</text>
              <text x="165" y="140" text-anchor="middle" font-size="13" font-weight="700" fill="#234f3b" font-family="Fraunces">PROVISION</text>
              <text x="165" y="158" text-anchor="middle" font-size="12" fill="#3c4742">Present liability, uncertain amount</text>
              <text x="165" y="174" text-anchor="middle" font-size="12" fill="#3c4742">but reliably estimable</text>
              <text x="165" y="192" text-anchor="middle" font-size="12" fill="#2f6b4f" font-weight="600">✓ Recognised in Balance Sheet</text>
              <rect x="350" y="8" width="330" height="214" rx="12" fill="#f8f0db" stroke="#b6862c" stroke-width="1.5"/>
              <text x="515" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="#8a6420" font-family="Fraunces">CONTINGENT LIABILITY</text>
              <text x="515" y="54" text-anchor="middle" font-size="12" fill="#3c4742">Possible obligation — uncertain</text>
              <text x="515" y="70" text-anchor="middle" font-size="12" fill="#3c4742">whether it will arise at all</text>
              <text x="515" y="90" text-anchor="middle" font-size="12" fill="#b84030" font-weight="600">✗ NOT in Balance Sheet</text>
              <text x="515" y="110" text-anchor="middle" font-size="12" fill="#2f6b4f" font-weight="600">✓ Disclosed in Notes to Accounts</text>
              <text x="515" y="140" text-anchor="middle" font-size="12" fill="#3c4742">Examples: lawsuits against business,</text>
              <text x="515" y="158" text-anchor="middle" font-size="12" fill="#3c4742">third-party guarantees,</text>
              <text x="515" y="174" text-anchor="middle" font-size="12" fill="#3c4742">bills discounted not yet matured</text>
            </svg>`, cap:"Liability vs Provision = recognised. Contingent Liability = not recognised, only disclosed."},
            {caseStudy:"Alpha Ltd. is fined by the Central Excise Officer. The company appeals. Case A — management thinks it will probably LOSE the appeal: they create a PROVISION in the Balance Sheet. Case B — management thinks it will probably WIN: they do not create a provision but DISCLOSE a contingent liability in the notes. The same event; the treatment depends entirely on the probability of outflow."},
            /* ── GAAP & BASIC ACCOUNTING CONCEPTS ── */
            {topicStart:"gaap", title:"GAAP & Basic Accounting Concepts", icon:"📐", desc:"Generally Accepted Accounting Principles, the 12 fundamental concepts, accounting policies and qualitative characteristics."},
            {h:"GAAP — why we need agreed rules", kicker:"Theory base begins", html:`
              <p>Imagine giving the same books to five accountants and getting <b>five different profit figures</b>. Chaos. To prevent this, accounting follows <strong>Generally Accepted Accounting Principles (GAAP)</strong> — a common set of rules so that statements are uniform, consistent and comparable.</p>
              <p>GAAP is made of three things used almost interchangeably:</p>
              <ul>
                <li><b>Concepts</b> — basic assumptions (e.g. the business is separate from its owner).</li>
                <li><b>Principles</b> — doctrines guiding practice.</li>
                <li><b>Conventions</b> — customs that grew out of long practice.</li>
              </ul>
              <p>In India, companies follow <b>Accounting Standards (AS)</b> or <b>Ind AS</b>; globally, <b>IFRS</b>.</p>`},
            {h:"The Accounting Concepts — overview", kicker:"The 12 you must know", html:`
              <p>These are the backbone of the theory base. Learn the one-line idea of each, then the examples below make them click.</p>
              <ul>
                <li><b>Entity</b> — business is separate from its owner.</li>
                <li><b>Money Measurement</b> — record only what can be measured in money.</li>
                <li><b>Periodicity</b> — measure performance for fixed periods (usually 1 year).</li>
                <li><b>Accrual</b> — record revenue/expense when it is earned/incurred, not when cash moves.</li>
                <li><b>Matching</b> — match expenses against the revenue they helped earn.</li>
                <li><b>Going Concern</b> — assume the business will continue for the foreseeable future.</li>
                <li><b>Cost</b> — record assets at their historical (purchase) cost.</li>
                <li><b>Realisation</b> — record a gain only when it is actually realised.</li>
                <li><b>Dual Aspect</b> — every transaction has two equal effects (basis of double entry).</li>
                <li><b>Conservatism / Prudence</b> — don't anticipate profit; provide for all possible losses.</li>
                <li><b>Consistency</b> — use the same methods year after year so figures compare.</li>
                <li><b>Materiality</b> — only items significant enough to affect decisions need full disclosure.</li>
              </ul>`},
            {diagram:`<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="270" y="125" width="140" height="40" rx="10" fill="#234f3b"/><text x="340" y="150" text-anchor="middle" font-size="13" font-weight="600" fill="#f4efe3">Concepts</text>
              ${[['Entity',0],['Money Measurement',1],['Periodicity',2],['Accrual',3],['Matching',4],['Going Concern',5],['Cost',6],['Realisation',7],['Dual Aspect',8],['Conservatism',9],['Consistency',10],['Materiality',11]].map(([t,i])=>{
                const ang=(-90+i*30)*Math.PI/180; const cx=340+220*Math.cos(ang); const cy=145+118*Math.sin(ang);
                const col=['#2d6b4a','#a07228','#7b3f9e','#2a4f8f','#b84030','#1e7a72'][i%6];
                return `<line x1="340" y1="145" x2="${cx}" y2="${cy}" stroke="${col}" stroke-width="1.2" opacity=".5"/><rect x="${cx-58}" y="${cy-13}" width="116" height="26" rx="13" fill="#fbf8f0" stroke="${col}" stroke-width="1.4"/><text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="11" font-weight="600" fill="${col}">${t}</text>`;
              }).join('')}
            </svg>`, cap:"The twelve concepts radiate from one idea: make accounts uniform, reliable and comparable."},
            {h:"Entity & Money Measurement", kicker:"The two basic concepts", html:`
              <p><b>Business Entity:</b> the business and its owner are <i>separate</i>. This is exactly why, when an owner takes money out for personal use, we call it <b>Drawings</b> and reduce his capital — instead of treating it as a business expense.</p>
              <p><b>Money Measurement:</b> only money-measurable items are recorded. A factory's loyal, skilled workforce is hugely valuable but <i>cannot</i> appear in the books. Also, everything must be in one currency — you cannot add "₹50 lakhs + 1 lakh Euro" until you convert.</p>`},
            {example:"Mr. X starts a business with ₹7,00,000 and buys machinery for ₹5,00,000, keeping ₹2,00,000 cash. The business OWES Mr. X ₹7,00,000 (his capital). Now he spends ₹5,000 from business funds on family expenses. By the Entity concept this is NOT a business expense — it is Drawings. Revised Capital = ₹7,00,000 − ₹5,000 = ₹6,95,000; Cash = ₹1,95,000."},
            {h:"Going Concern, Periodicity & Cost", kicker:"Valuation trio", html:`
              <p><b>Going Concern:</b> we assume the business will keep running. That is <i>why</i> we value a machine at cost and depreciate it over years instead of at its forced-sale value — we are not about to sell it.</p>
              <p><b>Periodicity:</b> a business has an indefinite life, but we cannot wait 100 years to measure performance. So we slice time into <b>accounting periods</b> (usually 1 April–31 March in India). This makes words like "accrued" and "outstanding" meaningful.</p>
              <p><b>Cost Concept:</b> assets are recorded at <b>historical (acquisition) cost</b>, not market value — because cost is objective and verifiable. A plot bought in 1995 for ₹2,000 still shows ₹2,000, even if it is worth ₹1,00,000 today.</p>`},
            {h:"Accrual, Matching & Realisation", kicker:"How profit is really measured", html:`
              <p><b>Accrual:</b> record revenue when <i>earned</i> and expense when <i>incurred</i> — regardless of when cash is received or paid. (The alternative, recording only on cash movement, is the <b>Cash basis</b>.)</p>
              <p><b>Matching:</b> from a period's revenue, deduct only the expenses that <i>helped earn that revenue</i>. So if you bought 10,000 units but sold 8,000, only the cost of 8,000 is matched against this year's sales.</p>
              <p><b>Realisation:</b> a gain is counted only when it actually <i>materialises</i> (e.g. the sale is made), never on mere expectation.</p>
              <p>Together: <strong>Periodic Profit = Periodic Revenue − Matched Expenses.</strong></p>`},
            {example:"Mr. P.K. buys 10,000 garments @ ₹100 (=₹10,00,000) and sells 8,000 @ ₹150 (=₹12,00,000) in the year. Rent is ₹3,000/month (paid for 11 months only). PROFIT is NOT cash-based. Revenue accrued = ₹12,00,000. Matched cost of goods sold = 8,000 × ₹100 = ₹8,00,000 (NOT all 10,000). Rent expense for 12 months = ₹36,000 (NOT the ₹33,000 paid). Profit = 12,00,000 − 8,00,000 − 36,000 = ₹3,64,000. The unsold 2,000 units (₹2,00,000) become closing stock, an asset."},
            {h:"Dual Aspect — the heart of double entry", kicker:"The accounting equation", html:`
              <p>Every transaction has <b>two equal sides</b>. Buy a machine for cash → machinery up, cash down by the same amount. This gives the <strong>Accounting Equation</strong>:</p>
              <p style="text-align:center;font-family:'IBM Plex Mono';font-size:17px;color:var(--green-deep);font-weight:600;margin:14px 0">Assets = Liabilities + Capital</p>
              <p>Rearranged: <span class="mono">Capital = Assets − Liabilities</span>. The two sides of a Balance Sheet are <i>always</i> equal precisely because of this concept.</p>`},
            {diagram:`<svg viewBox="0 0 660 130" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="40" y="45" width="170" height="48" rx="10" fill="#e3eee6" stroke="#2f6b4f" stroke-width="1.6"/><text x="125" y="68" text-anchor="middle" font-size="15" font-weight="700" fill="#234f3b" font-family="Fraunces">ASSETS</text><text x="125" y="84" text-anchor="middle" font-size="10" fill="#3c4742">what the business owns</text>
              <text x="240" y="76" text-anchor="middle" font-size="30" font-weight="700" fill="#b6862c">=</text>
              <rect x="280" y="45" width="160" height="48" rx="10" fill="#f8f0db" stroke="#b6862c" stroke-width="1.6"/><text x="360" y="68" text-anchor="middle" font-size="15" font-weight="700" fill="#8a6420" font-family="Fraunces">LIABILITIES</text><text x="360" y="84" text-anchor="middle" font-size="10" fill="#3c4742">owed to outsiders</text>
              <text x="470" y="76" text-anchor="middle" font-size="30" font-weight="700" fill="#b6862c">+</text>
              <rect x="500" y="45" width="150" height="48" rx="10" fill="#f6e2dc" stroke="#c0492f" stroke-width="1.6"/><text x="575" y="68" text-anchor="middle" font-size="15" font-weight="700" fill="#b23a26" font-family="Fraunces">CAPITAL</text><text x="575" y="84" text-anchor="middle" font-size="10" fill="#3c4742">owed to the owner</text>
            </svg>`, cap:"The equation that must always balance — the basis of the Balance Sheet."},
            {caseStudy:"Opening Balance Sheet: Capital ₹1,50,000 + Bank Loan ₹75,000 + Other Loan ₹75,000 = Machinery ₹2,00,000 + Cash ₹1,00,000 (both sides ₹3,00,000). Now a machine is bought for ₹50,000 on credit. TWO effects: Machinery rises to ₹2,50,000 AND Creditors rise by ₹50,000. New total on both sides = ₹3,50,000 — still balanced. That is the dual aspect in action."},
            {h:"Conservatism, Consistency & Materiality", kicker:"The three conventions", html:`
              <p><b>Conservatism (Prudence):</b> never anticipate a profit, but provide for every possible loss. This is the origin of the golden rule — <b>stock is valued at cost or market price, whichever is lower.</b></p>
              <p><b>Consistency:</b> once you choose a method (say, a depreciation method), stick with it year after year — otherwise figures can't be compared. You may change only for a strong reason (a new Accounting Standard, the law, or a truer picture).</p>
              <p><b>Materiality:</b> only items big enough to influence a decision need full disclosure. A ₹200 calculator can be written off fully in one year even though it lasts longer — the amount is too small to matter.</p>`},
            {caseStudy:"Mr. X has 10 computers costing ₹20,000 each, which he expects to sell at ₹25,000. Can he record the ₹5,000 expected profit each? NO — Prudence forbids recording unrealised gains. But before sale, the market price falls to ₹17,000. Now he MUST recognise the ₹3,000 loss per computer immediately, even though no sale has happened. Profits wait; losses don't."},
            {h:"Fundamental Assumptions & Qualitative Characteristics", kicker:"The finishing layer", html:`
              <p><b>Three fundamental accounting assumptions</b> are presumed to be followed unless stated otherwise: <b>Going Concern, Consistency, Accrual.</b> If any is NOT followed, that fact must be disclosed.</p>
              <p><b>Qualitative characteristics</b> are what make financial statements useful. The four principal ones:</p>
              <ul>
                <li><b>Understandability</b> — clear to a reasonably informed user.</li>
                <li><b>Relevance</b> — helps users evaluate past/present/future; affected by <b>materiality</b>.</li>
                <li><b>Reliability</b> — free from material error and bias; supported by <b>faithful representation, substance over form, neutrality, prudence</b> and <b>completeness</b>.</li>
                <li><b>Comparability</b> — can be compared across time and across firms.</li>
              </ul>`},
            {h:"Accounting Policies", kicker:"Accounting Standards & Policies", html:`
              <p><b>Accounting Policies</b> are the specific principles, bases, conventions, rules and practices an enterprise applies when preparing its financial statements. Different enterprises can choose different methods — and within one enterprise, the method chosen is its policy.</p>
              <p><b>Common areas where policies differ:</b></p>
              <ul>
                <li><b>Valuation of Inventories</b> — FIFO, Weighted Average, Specific Identification</li>
                <li><b>Depreciation method</b> — SLM, WDV, Units of Production</li>
                <li><b>Valuation of Investments</b> — at cost, at lower of cost or market value</li>
              </ul>
              <p><b>How to select:</b> Policies should exhibit a <b>true and fair view</b>. Selection is guided by three principles: <b>Prudence</b> (caution, guard against losses), <b>Substance over Form</b> (economic reality over legal form), and <b>Materiality</b> (significant items need proper treatment).</p>
              <p><b>When to change:</b> Only when required by statute / Accounting Standard, OR when the change gives a truer picture. A change must be quantified and disclosed — you can't just switch quietly.</p>`},
            {example:"Xeta Enterprises values its inventory at 'lower of cost (weighted average) or net realisable value.' This applies Prudence — it does not record an unrealised gain if market rises, but it immediately records a loss if market falls below cost. If next year the company switches to FIFO, it must disclose the change and show the effect on profit/loss, so users of accounts can compare."},

            /* ── SYSTEM OF ACCOUNTING ── */
            {topicStart:"system", title:"System of Accounting", icon:"⚖️", desc:"The accounting equation, double entry vs single entry, types of accounts and the three golden rules of debit and credit."},
            {h:"The Accounting Equation — the foundation of Double Entry", kicker:"System of Accounting · The bedrock", html:`
              <p>Every business transaction can be explained by one fundamental equation:</p>
              <div style="text-align:center;font-size:20px;font-weight:700;color:#234f3b;margin:18px 0;letter-spacing:.02em">Assets = Capital + Liabilities</div>
              <p>This equation is always in balance. Every transaction changes one or more of the three elements, but the equation always remains equal. This self-balancing property is the foundation of the <b>Double Entry System</b>.</p>
              <table class="cmp">
                <tr><th>Transaction</th><th>Effect</th><th>Equation stays balanced?</th></tr>
                <tr><td>Owner invests ₹5,00,000 cash</td><td>Cash ↑ ₹5L, Capital ↑ ₹5L</td><td>✓ Both sides increase equally</td></tr>
                <tr><td>Buy machinery on credit ₹2,00,000</td><td>Machinery ↑ ₹2L, Creditor ↑ ₹2L</td><td>✓ Asset and liability increase equally</td></tr>
                <tr><td>Repay ₹50,000 of loan in cash</td><td>Cash ↓ ₹50K, Loan ↓ ₹50K</td><td>✓ Asset and liability decrease equally</td></tr>
                <tr><td>Pay rent ₹10,000 cash</td><td>Cash ↓ ₹10K, Capital ↓ ₹10K (profit reduces)</td><td>✓ Asset decreases, Capital decreases equally</td></tr>
              </table>
              <p>The equation also shows the two sources of financing for every asset the business owns — either the owner funded it (Capital) or outsiders did (Liabilities).</p>`},
            {h:"Double Entry System — recording both sides of every transaction", kicker:"System of Accounting · Double Entry", html:`
              <p>The <b>Double Entry System</b>, developed in 15th-century Italy and systematised by Luca Pacioli (1494), is the universally accepted method of bookkeeping. It is based on one simple principle:</p>
              <div style="text-align:center;font-size:15px;font-weight:700;color:#234f3b;margin:16px 0">Every transaction has TWO equal and opposite effects.<br>For every Debit, there is an equal Credit.</div>
              <p>Each transaction is recorded in at least two accounts — one account is <b>debited</b> and another is <b>credited</b> by the same amount. Over all transactions, total debits must equal total credits.</p>
              <p><b>Advantages of Double Entry System:</b></p>
              <ul>
                <li><b>Complete record:</b> Both aspects of every transaction are recorded — nothing is missed.</li>
                <li><b>Self-checking (Trial Balance):</b> If total debits = total credits, the books are arithmetically correct.</li>
                <li><b>Profit or loss:</b> Can be accurately determined by preparing a Profit and Loss Account.</li>
                <li><b>Financial position:</b> A Balance Sheet showing assets, liabilities and capital can be prepared at any time.</li>
                <li><b>Fraud detection:</b> The internal check through balancing makes manipulation harder to conceal.</li>
                <li><b>Universal:</b> Suitable for businesses of all sizes and types — from a sole trader to a multinational.</li>
              </ul>`},
            {h:"Single Entry System — incomplete records and their drawbacks", kicker:"System of Accounting · Single Entry", html:`
              <p>The <b>Single Entry System</b> is not really a system at all — it is a loose, inconsistent approach to record-keeping that does not follow the principles of Double Entry. It typically maintains only a cash book and personal accounts (debtors and creditors); there is no systematic record of assets and liabilities.</p>
              <table class="cmp">
                <tr><th>Feature</th><th>Single Entry</th><th>Double Entry</th></tr>
                <tr><td>Completeness</td><td>Incomplete — records only cash and some personal accounts</td><td>Complete — records both aspects of every transaction</td></tr>
                <tr><td>Trial Balance</td><td>Cannot be prepared — no way to check arithmetic accuracy</td><td>Can be prepared — total debits = total credits</td></tr>
                <tr><td>Profit determination</td><td>Only an estimate (using Statement of Affairs method)</td><td>Accurate — from Profit and Loss Account</td></tr>
                <tr><td>Financial position</td><td>Cannot prepare a proper Balance Sheet</td><td>Full Balance Sheet can be prepared</td></tr>
                <tr><td>Fraud and error</td><td>Easy to conceal — no internal check</td><td>Harder to conceal — self-balancing system</td></tr>
                <tr><td>Used by</td><td>Very small traders prioritising simplicity</td><td>All properly managed businesses</td></tr>
              </table>
              <p>Single entry is also called <i>incomplete records</i>. It is not recognised as acceptable for tax purposes or under the Companies Act.</p>`},
            {h:"Types of Accounts — Personal, Real, and Nominal", kicker:"System of Accounting · Types of accounts", html:`
              <p>Every account in accounting falls into one of three categories. Understanding the type of account is the key to applying the correct rule of debit and credit.</p>
              <table class="cmp">
                <tr><th>Type</th><th>What it represents</th><th>Examples</th></tr>
                <tr><td><b>Personal Account</b></td><td>Accounts of persons — individuals, firms, companies, and institutions</td><td>Ramesh's Account, SBI Loan Account, Capital Account, Drawings Account, Debtors, Creditors, Outstanding Expenses A/c, Prepaid Expenses A/c</td></tr>
                <tr><td><b>Real Account</b></td><td>Accounts of tangible things (assets you can touch) and intangible things (assets you cannot touch)</td><td>Cash A/c, Machinery A/c, Land A/c, Stock A/c (tangible); Goodwill A/c, Patents A/c, Trademarks A/c (intangible)</td></tr>
                <tr><td><b>Nominal Account</b></td><td>Accounts of expenses, losses, incomes, and gains — these do not represent real persons or real things; they exist only for the accounting period</td><td>Rent A/c, Salaries A/c, Interest Paid A/c (expenses); Sales A/c, Commission Received A/c, Discount Received A/c (income)</td></tr>
              </table>
              <p>Nominal accounts are closed at the end of each accounting year — their balances transfer to the Profit and Loss Account. Personal and Real accounts are carried forward to the next year (they appear in the Balance Sheet).</p>`},
            {diagram:`<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <text x="350" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#3c4742" font-family="Fraunces, serif">The Golden Rules of Debit and Credit</text>
              <rect x="10" y="36" width="200" height="182" rx="10" fill="#e3eee6" stroke="#234f3b" stroke-width="1.5"/>
              <text x="110" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#234f3b">Personal Account</text>
              <text x="110" y="78" text-anchor="middle" font-size="10.5" fill="#3c4742">Accounts of persons,</text>
              <text x="110" y="91" text-anchor="middle" font-size="10.5" fill="#3c4742">firms and companies</text>
              <rect x="30" y="105" width="160" height="28" rx="6" fill="#234f3b"/>
              <text x="110" y="123" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Debit the Receiver</text>
              <rect x="30" y="139" width="160" height="28" rx="6" fill="#2f6b4f"/>
              <text x="110" y="157" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Credit the Giver</text>
              <text x="110" y="196" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">e.g. Bought from Suresh on credit:</text>
              <text x="110" y="207" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">Debit Purchases, Credit Suresh</text>
              <rect x="250" y="36" width="200" height="182" rx="10" fill="#f8f0db" stroke="#b6862c" stroke-width="1.5"/>
              <text x="350" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#8a6420">Real Account</text>
              <text x="350" y="78" text-anchor="middle" font-size="10.5" fill="#3c4742">Accounts of tangible</text>
              <text x="350" y="91" text-anchor="middle" font-size="10.5" fill="#3c4742">and intangible assets</text>
              <rect x="270" y="105" width="160" height="28" rx="6" fill="#b6862c"/>
              <text x="350" y="123" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Debit what Comes In</text>
              <rect x="270" y="139" width="160" height="28" rx="6" fill="#8a6420"/>
              <text x="350" y="157" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Credit what Goes Out</text>
              <text x="350" y="196" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">e.g. Bought machinery for cash:</text>
              <text x="350" y="207" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">Debit Machinery, Credit Cash</text>
              <rect x="490" y="36" width="200" height="182" rx="10" fill="#f6e2dc" stroke="#c0492f" stroke-width="1.5"/>
              <text x="590" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#b23a26">Nominal Account</text>
              <text x="590" y="78" text-anchor="middle" font-size="10.5" fill="#3c4742">Accounts of expenses,</text>
              <text x="590" y="91" text-anchor="middle" font-size="10.5" fill="#3c4742">losses, incomes, gains</text>
              <rect x="510" y="105" width="160" height="28" rx="6" fill="#c0492f"/>
              <text x="590" y="123" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Debit Expenses &amp; Losses</text>
              <rect x="510" y="139" width="160" height="28" rx="6" fill="#a03825"/>
              <text x="590" y="157" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Credit Incomes &amp; Gains</text>
              <text x="590" y="196" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">e.g. Paid rent ₹5,000 cash:</text>
              <text x="590" y="207" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">Debit Rent A/c, Credit Cash</text>
            </svg>`, cap:"The Three Golden Rules — memorise these and you can record any transaction correctly. Personal: Receiver / Giver. Real: In / Out. Nominal: Expense-Loss / Income-Gain."},

            /* ── BASIS OF ACCOUNTING ── */
            {topicStart:"basis", title:"Basis of Accounting", icon:"📅", desc:"Cash basis vs accrual basis — when to recognise income and expenses, and why the accrual basis gives a truer picture."},
            {h:"Cash Basis of Accounting — record only when cash actually moves", kicker:"Basis of Accounting · Cash basis", html:`
              <p>Under the <b>Cash Basis of Accounting</b>, transactions are recorded only when cash is physically received or paid — not when income is earned or expense is incurred.</p>
              <ul>
                <li><b>Income</b> is recognised only when cash is <i>received</i>, regardless of when it was earned.</li>
                <li><b>Expense</b> is recognised only when cash is <i>paid</i>, regardless of when it was incurred.</li>
              </ul>
              <p><b>Consequence:</b> There are no debtors (credit sales go unrecorded until cash arrives), no creditors (credit purchases go unrecorded until paid), no outstanding expenses, and no prepaid items.</p>
              <p><b>Where it is used:</b> Small unorganised businesses, individual professionals (doctors, lawyers, consultants), certain government accounts, and not-for-profit organisations.</p>
              <p><b>Limitations:</b></p>
              <ul>
                <li>Does NOT match income and expenses to the correct accounting period — gives a distorted picture of performance.</li>
                <li>A business can show a loss simply because customers paid late, even if it traded profitably.</li>
                <li>NOT permitted under the Companies Act or GAAP for corporate financial reporting.</li>
                <li>Easy to manipulate profit by delaying or accelerating payments.</li>
              </ul>`},
            {h:"Accrual Basis of Accounting — record when earned or incurred, not when paid", kicker:"Basis of Accounting · Accrual basis", html:`
              <p>Under the <b>Accrual Basis of Accounting</b>, transactions are recorded when they occur economically — when income is <i>earned</i> and expenses are <i>incurred</i> — regardless of when cash moves.</p>
              <ul>
                <li><b>Income</b> is recognised when it is <i>earned</i> (the service is performed or goods delivered), even if cash has not yet been received.</li>
                <li><b>Expense</b> is recognised when it is <i>incurred</i> (the resource is used or benefit consumed), even if cash has not yet been paid.</li>
              </ul>
              <p><b>What accrual basis creates in the accounts:</b></p>
              <ul>
                <li><b>Debtors</b> — sales made on credit (earned but not yet received in cash)</li>
                <li><b>Creditors</b> — purchases made on credit (incurred but not yet paid)</li>
                <li><b>Outstanding Expenses</b> — expenses incurred but not yet paid (e.g. unpaid salaries)</li>
                <li><b>Prepaid Expenses</b> — cash paid in advance for future benefits (e.g. rent paid 3 months early)</li>
                <li><b>Accrued Income</b> — income earned but not yet received (e.g. interest due but not credited)</li>
                <li><b>Income Received in Advance</b> — cash received for a service not yet performed</li>
              </ul>
              <p>Accrual basis is one of the three <b>Fundamental Accounting Assumptions</b> (along with Going Concern and Consistency). It is mandated by the Companies Act, AS 1, and all accepted accounting standards. It gives a <strong>true and fair view</strong> of the business's actual performance for the period.</p>`},
            {h:"Cash vs Accrual — the same business, two different profit figures", kicker:"Basis of Accounting · The critical difference", html:`
              <p>The two bases can produce very different profit figures from the same set of underlying transactions. Consider a business in the month of March:</p>
              <ul>
                <li>Goods sold worth ₹1,00,000 — cash received ₹60,000 in March; ₹40,000 still due from debtors</li>
                <li>Expenses incurred ₹70,000 — cash paid ₹55,000 in March; ₹15,000 still outstanding to creditors</li>
              </ul>
              <table class="cmp">
                <tr><th></th><th>Cash Basis</th><th>Accrual Basis</th></tr>
                <tr><td><b>Revenue recognised</b></td><td>₹60,000 (cash received only)</td><td>₹1,00,000 (all goods delivered)</td></tr>
                <tr><td><b>Expenses recognised</b></td><td>₹55,000 (cash paid only)</td><td>₹70,000 (all expenses incurred)</td></tr>
                <tr><td><b>Profit for March</b></td><td>₹5,000</td><td>₹30,000</td></tr>
              </table>
              <p>Which figure truly represents March's performance? The <b>accrual figure of ₹30,000</b> — because the business earned ₹1,00,000 of revenue and incurred ₹70,000 of costs in March, regardless of when cash moved. The cash basis figure of ₹5,000 reflects the timing of cash flows, not the economic reality of the period.</p>
              <p>This is why the <b>Matching Concept</b> (match expenses of a period to the income of the same period) and the <b>Accrual Concept</b> work hand in hand — both require the accrual basis to function correctly.</p>`},

            /* ── VALUATION PRINCIPLES & ACCOUNTING ESTIMATES ── */
            {topicStart:"valuation", title:"Valuation Principles & Accounting Estimates", icon:"💰", desc:"Historical cost, current cost, realisable value and present value — plus how accounting estimates work in practice."},
            {h:"Accounting as a measurement discipline — putting numbers on things", kicker:"Valuation Principles · The big idea", html:`
              <p>Before any transaction is <strong>recorded</strong>, it must be <strong>measured</strong>. In accounting, measurement means assigning a money value to objects and events. Every measurement discipline has three elements (Chambers' definition):</p>
              <ul>
                <li><b>Identification</b> — what is being measured? (the machine, the loan, the inventory)</li>
                <li><b>Scale</b> — money is the scale of measurement (₹ in India). Unlike a metre or kilogram, money is <i>not stable over time</i> — inflation erodes purchasing power, so figures from different years are not perfectly comparable. Nor is money universal — exchange rates fluctuate.</li>
                <li><b>Valuation principle / Dimension</b> — at which specific amount do we record the item? This is where the four measurement bases come in.</li>
              </ul>
              <p>Because money lacks both stability and universal uniformity, accounting is <strong>not an exact measurement discipline</strong> — but it is the most practical one available, kept reliable by its fundamental assumptions (Going Concern, Consistency, Accrual).</p>`},
            {h:"The four measurement bases — one asset, four entirely different values", kicker:"Valuation Principles · Four bases", html:`
              <p>The same asset can legitimately carry four different values depending on the measurement base chosen. Each has a distinct logic and a typical area of use.</p>
              <table class="cmp">
                <tr><th>Measurement Base</th><th>Core idea</th><th>Typical application</th></tr>
                <tr><td><b>Historical Cost</b></td><td>Actual price paid at acquisition — objective, verifiable, from a completed transaction</td><td>Fixed assets (machinery, land, buildings, furniture)</td></tr>
                <tr><td><b>Current Cost</b></td><td>What it would cost to buy the same asset <i>right now</i> at today's market prices</td><td>Replacement analysis; inflation-adjusted accounting</td></tr>
                <tr><td><b>Realisable Value</b></td><td>Cash obtainable by selling the asset <i>today</i> in an orderly, arm's-length sale</td><td>Inventory valuation (lower of cost or NRV)</td></tr>
                <tr><td><b>Present Value</b></td><td>Today's worth of all <i>future cash flows</i> the asset will generate, discounted at an appropriate rate</td><td>Long-term investments, loans, leases, employee benefits</td></tr>
              </table>
              <p>Under the <strong>traditional accounting system</strong>, <b>Historical Cost</b> is the primary base. The other three apply in specific situations prescribed by Accounting Standards. The same machine can show four entirely different figures — none is "wrong"; each answers a different question about value.</p>`},
            {diagram:`<svg viewBox="0 0 700 296" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <text x="350" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#3c4742" font-family="Fraunces, serif">Same machine — four different values on the same date</text>
              <rect x="260" y="116" width="180" height="56" rx="10" fill="#234f3b"/>
              <text x="350" y="139" text-anchor="middle" font-size="12" font-weight="600" fill="#f4efe3">Machine (bought 2011)</text>
              <text x="350" y="157" text-anchor="middle" font-size="11" fill="#e3eee6">original cost ₹8,00,000</text>
              <rect x="18" y="28" width="168" height="66" rx="9" fill="#e3eee6" stroke="#234f3b" stroke-width="1.5"/>
              <text x="102" y="50" text-anchor="middle" font-size="10.5" font-weight="700" fill="#234f3b">HISTORICAL COST</text>
              <text x="102" y="65" text-anchor="middle" font-size="10.5" fill="#3c4742">Acquisition price paid</text>
              <text x="102" y="83" text-anchor="middle" font-size="16" font-weight="700" fill="#234f3b">₹8,00,000</text>
              <line x1="186" y1="61" x2="260" y2="138" stroke="#2f6b4f" stroke-width="1.5" stroke-dasharray="5,3"/>
              <rect x="514" y="28" width="168" height="66" rx="9" fill="#f8f0db" stroke="#b6862c" stroke-width="1.5"/>
              <text x="598" y="50" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8a6420">CURRENT COST</text>
              <text x="598" y="65" text-anchor="middle" font-size="10.5" fill="#3c4742">Replace it today</text>
              <text x="598" y="83" text-anchor="middle" font-size="16" font-weight="700" fill="#8a6420">₹25,00,000</text>
              <line x1="514" y1="61" x2="440" y2="138" stroke="#b6862c" stroke-width="1.5" stroke-dasharray="5,3"/>
              <rect x="18" y="202" width="168" height="66" rx="9" fill="#f6e2dc" stroke="#c0492f" stroke-width="1.5"/>
              <text x="102" y="224" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b23a26">REALISABLE VALUE</text>
              <text x="102" y="239" text-anchor="middle" font-size="10.5" fill="#3c4742">Sell it today</text>
              <text x="102" y="257" text-anchor="middle" font-size="16" font-weight="700" fill="#b23a26">₹20,00,000</text>
              <line x1="186" y1="235" x2="260" y2="172" stroke="#c0492f" stroke-width="1.5" stroke-dasharray="5,3"/>
              <rect x="514" y="202" width="168" height="66" rx="9" fill="#e8eef8" stroke="#2c4a8a" stroke-width="1.5"/>
              <text x="598" y="224" text-anchor="middle" font-size="10.5" font-weight="700" fill="#2c4a8a">PRESENT VALUE</text>
              <text x="598" y="239" text-anchor="middle" font-size="10.5" fill="#3c4742">Future cash inflows</text>
              <text x="598" y="257" text-anchor="middle" font-size="16" font-weight="700" fill="#2c4a8a">₹4,19,246</text>
              <line x1="514" y1="235" x2="440" y2="172" stroke="#2c4a8a" stroke-width="1.5" stroke-dasharray="5,3"/>
            </svg>`, cap:"Four valid values for the same machine on the same date — each answers a different question. Traditional accounting records ₹8,00,000 (historical cost)."},
            {h:"Historical Cost — what you actually paid at acquisition", kicker:"Valuation Principle 1 of 4", html:`
              <p><b>Historical Cost</b> means recording an asset at the <strong>actual acquisition price</strong> — the cash paid to acquire it, plus all costs incurred to bring it to its usable state (transport, installation, testing, legal fees where applicable).</p>
              <ul>
                <li><b>Assets</b>: recorded at cash paid at the time of acquisition.</li>
                <li><b>Liabilities</b>: recorded at the proceeds received in exchange for the obligation (e.g. a bank loan is entered at the amount actually borrowed, not at any future repayment total).</li>
              </ul>
              <p><b>Why it dominates traditional accounting:</b> Historical cost is <strong>objective and verifiable</strong> — it is based on a completed transaction backed by a voucher or invoice. No estimation or subjective judgement is needed.</p>
              <p><b>Its limitation:</b> It ignores price changes after the acquisition date. A building purchased for ₹50,00,000 in 2005 stays in the books at ₹50,00,000 in 2025 even if its market value is now ₹3,00,00,000. This is why accounts are criticised for <i>ignoring inflation</i>.</p>
              <p><b>Most common application:</b> Long-term fixed assets — machinery, furniture, land, buildings, vehicles.</p>`},
            {example:"A business buys a machine for ₹7,00,000 and pays ₹1,00,000 for installation. Historical cost = ₹7,00,000 + ₹1,00,000 = ₹8,00,000. This figure stays in the books at ₹8,00,000 regardless of the market price in future years. A bank lending ₹5,00,000 at 10% p.a. — the liability is entered at ₹5,00,000 (proceeds received), not at the total future repayment of principal and interest. Historical cost records what was actually exchanged on the transaction date."},
            {h:"Current Cost — what it would cost to replace it today", kicker:"Valuation Principle 2 of 4", html:`
              <p><b>Current Cost</b> values an asset at the amount of cash that would have to be paid to acquire <strong>the same or an equivalent asset right now</strong> at current market prices — also called replacement cost.</p>
              <ul>
                <li><b>Assets</b>: carried at today's price for buying the equivalent asset new.</li>
                <li><b>Liabilities</b>: carried at the undiscounted amount currently required to settle them (including any prepayment charges).</li>
              </ul>
              <p>Current cost is <strong>more economically relevant during inflation</strong> because it shows what it would actually cost to replace productive capacity. However, it requires research or professional appraisal to determine — unlike historical cost, there is no ready transaction record.</p>
              <p>A machine bought for ₹7,00,000 in 2011 that would cost ₹25,00,000 to purchase today has a current cost of <b>₹25,00,000</b> on the measurement date.</p>`},
            {h:"Realisable Value — what you would receive if sold today", kicker:"Valuation Principle 3 of 4", html:`
              <p><b>Realisable Value</b> (also called Net Realisable Value or Settlement Value) measures an asset at the <strong>amount of cash obtainable by selling it today in an orderly disposal</strong> — not a forced or distress sale (haphazard disposal could fetch less).</p>
              <ul>
                <li><b>Assets</b>: carried at the amount a willing buyer would pay at arm's length in normal market conditions today.</li>
                <li><b>Liabilities</b>: carried at their settlement value — the undiscounted amount needed to discharge them normally.</li>
              </ul>
              <p>⭐ <strong>Most important application at your level:</strong> <b>Inventories are valued at the lower of cost and net realisable value.</b> If goods cost ₹60,000 but can only be sold for ₹45,000, they are written down to ₹45,000 immediately. This directly applies Conservatism — losses are recognised as soon as they are probable; gains only when actually realised.</p>
              <p>In the running example: Mr. X's machine (cost ₹7,00,000; replacement ₹25,00,000) can currently be sold for <b>₹20,00,000</b> — its realisable value.</p>`},
            {h:"Present Value — future money, brought back to today", kicker:"Valuation Principle 4 of 4", html:`
              <p>Present Value rests on the <strong>time value of money</strong>: ₹1,00,000 today is worth more than ₹1,00,000 promised a year from now, because today's money can be invested and grown. A rational person will not exchange ₹1,00,000 today for ₹1,00,000 a year later without compensation for the wait.</p>
              <p><b>Discounting</b> converts a future sum back to its equivalent value in today's terms. The higher the discount rate, or the further away the future cash flow, the lower its present value.</p>
              <ul>
                <li><b>Assets</b>: carried at the present discounted value of all future net cash <i>inflows</i> the asset is expected to generate.</li>
                <li><b>Liabilities</b>: carried at the present discounted value of future net cash <i>outflows</i> required to settle them.</li>
              </ul>
              <p>At a 20% discount rate, ₹1,00,000 receivable one year from now is worth only <b>₹83,333</b> today (= 1,00,000 ÷ 1.20). Ten such annual receipts total ₹10,00,000 in face value, but only <b>₹4,19,246</b> in present-value terms — less than even the original historical cost of the machine.</p>
              <p><b>Common applications:</b> Long-term investments, bank loans, lease obligations, employee benefit provisions — any situation where the timing of cash flows matters as much as the amounts.</p>`},
            {caseStudy:"Mr. X bought a machine in 2011 for ₹8,00,000 (₹7,00,000 price plus ₹1,00,000 installation). On 1 January 2022, four bases give four different values: Historical Cost = ₹8,00,000 (what was paid in 2011); Current Cost = ₹25,00,000 (cost to buy the same machine today); Realisable Value = ₹20,00,000 (selling price in an orderly sale today); Present Value = ₹4,19,246 (10 years of ₹1,00,000 annual cash flows, discounted at 20% p.a.). Traditional accounting shows ₹8,00,000 in the books (less depreciation charged). Each other figure is valid — it answers a different question: What did it cost? What would it cost to replace? What would I get today? What will it earn?"},
            {h:"Accounting Estimates — reasoned judgement when precision is impossible", kicker:"Accounting Estimates", html:`
              <p>Many financial statement items cannot be measured with certainty because they depend on <b>future uncertain events</b>. For these, management makes a <strong>reasoned estimate</strong> based on current information and past experience. An estimate is not a guess — it is a careful, informed judgement.</p>
              <p><b>Common situations requiring estimates:</b></p>
              <ul>
                <li><b>Depreciation</b> — requires estimating the asset's useful life and residual value.</li>
                <li><b>Provision for Bad and Doubtful Debts</b> — what proportion of debtors is unlikely to pay?</li>
                <li><b>Inventory obsolescence</b> — has any stock become unsaleable, and by how much should it be written down?</li>
                <li><b>Tax provisions</b> — the exact liability may be disputed or under assessment; a best estimate is recorded.</li>
                <li><b>Warranty provisions</b> — future claims by customers on goods already sold.</li>
              </ul>
              <p><b>Change in estimate:</b> If circumstances change (for example, a machine expected to last 10 years proves obsolete after 6 years due to new technology), the estimate is revised. Such changes apply <strong>prospectively</strong> — they affect the current and future periods only. Past financial statements are <i>not</i> restated. This is the key difference from correcting an accounting error, which may require retrospective restatement.</p>`},

            /* ── ACCOUNTING STANDARDS (AS & IND AS) ── */
            {topicStart:"standards", title:"Accounting Standards (AS & Ind AS)", icon:"📋", desc:"Why standards exist, what they cover, their objectives, benefits, limitations, the formulation process and India's three frameworks."},
            {h:"Why Accounting Standards are necessary — the problem of non-comparability", kicker:"Accounting Standards · Why they exist", html:`
              <p>Accounting is called the language of business. But imagine a language where every speaker invents their own grammar. Without agreed rules, companies account for identical transactions in completely different ways — making their financial statements <strong>incomparable and potentially misleading</strong>.</p>
              <p><b>What can go wrong without standards?</b></p>
              <ul>
                <li>Company A depreciates machinery over 5 years; Company B depreciates identical machinery over 15 years — their profits look very different despite identical performance.</li>
                <li>One firm values closing stock at cost; another at market value — balance sheets are incomparable.</li>
                <li>Contingent liabilities may be disclosed prominently by one company and omitted by another.</li>
              </ul>
              <p>To prevent this, <strong>Accounting Standards (AS)</strong> were created — written policy documents that set uniform rules for how transactions must be recognised, measured, presented and disclosed. In India, the <b>Accounting Standards Board (ASB)</b> of the ICAI, constituted in 1977, frames these standards with reference to International Financial Reporting Standards (IFRS), adapted to India's laws and business environment.</p>`},
            {h:"What Accounting Standards cover — scope and objectives", kicker:"Accounting Standards · Scope &amp; Objectives", html:`
              <p>Every Accounting Standard deals with four specific issues for the category of transaction it covers:</p>
              <table class="cmp">
                <tr><th>Issue covered by AS</th><th>Question it answers</th></tr>
                <tr><td><b>Recognition</b></td><td>Should this item appear in the financial statements at all? If yes — at what point in time?</td></tr>
                <tr><td><b>Measurement</b></td><td>At what amount should it be recorded? Which valuation base applies?</td></tr>
                <tr><td><b>Presentation</b></td><td>In which statement should it appear and in what format?</td></tr>
                <tr><td><b>Disclosure</b></td><td>What additional information must appear in the notes so users can make informed decisions?</td></tr>
              </table>
              <p><b>Objectives of Accounting Standards:</b> To harmonise accounting policies across different enterprises so that financial statements are <strong>comparable, reliable and transparent</strong> and give a true and fair view. Specifically — (i) eliminate non-comparability of financial statements; and (ii) provide a standard set of accounting policies, valuation norms and disclosure requirements.</p>`},
            {h:"Benefits and limitations of Accounting Standards", kicker:"Accounting Standards · Benefits &amp; Limits", html:`
              <table class="cmp">
                <tr><th>Benefits ✓</th><th>Limitations ✗</th></tr>
                <tr>
                  <td><b>Standardisation of treatments</b> — reduces confusing variations; different entities account for similar transactions the same way, improving reliability.</td>
                  <td><b>Difficulty of choice</b> — sometimes multiple accounting treatments are each defensible. Choosing one for the standard is not always straightforward and may not suit every situation.</td>
                </tr>
                <tr>
                  <td><b>Additional disclosures</b> — AS can require disclosure of information beyond what the law mandates, giving users a fuller picture of the business.</td>
                  <td><b>Restricted scope</b> — AS <i>cannot override the statute</i>. They must operate within applicable laws. Where law and AS conflict, the law prevails.</td>
                </tr>
                <tr>
                  <td><b>Comparability</b> — enables meaningful comparison of statements across different companies and across different years for the same company.</td>
                  <td></td>
                </tr>
              </table>
              <p>⚠️ <strong>Key rule:</strong> Accounting Standards can <i>never override the law</i>. If an applicable statute requires a particular treatment, the AS must comply — not the other way around.</p>`},
            {diagram:`<svg viewBox="0 0 640 386" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="140" y="4" width="360" height="30" rx="9" fill="#234f3b"/>
              <text x="320" y="23" text-anchor="middle" font-size="12.5" font-weight="600" fill="#f4efe3">How an Accounting Standard is made in India (ASB)</text>
              <rect x="120" y="46" width="400" height="28" rx="7" fill="#e3eee6" stroke="#2f6b4f"/>
              <text x="320" y="65" text-anchor="middle" font-size="11" fill="#234f3b" font-weight="600">1. ASB identifies an area needing a standard</text>
              <polygon points="320,74 316,82 324,82" fill="#b6862c"/>
              <rect x="120" y="82" width="400" height="28" rx="7" fill="#e3eee6" stroke="#2f6b4f"/>
              <text x="320" y="101" text-anchor="middle" font-size="11" fill="#234f3b" font-weight="600">2. Constitute a study group; prepare a preliminary draft</text>
              <polygon points="320,110 316,118 324,118" fill="#b6862c"/>
              <rect x="120" y="118" width="400" height="36" rx="7" fill="#f8f0db" stroke="#b6862c"/>
              <text x="320" y="135" text-anchor="middle" font-size="11" fill="#8a6420" font-weight="600">3. ASB reviews draft; circulate to outside bodies</text>
              <text x="320" y="149" text-anchor="middle" font-size="10" fill="#8a6420">(SEBI, CBDT, C&amp;AG, DCA, SCOPE etc.) for comments</text>
              <polygon points="320,154 316,162 324,162" fill="#b6862c"/>
              <rect x="120" y="162" width="400" height="28" rx="7" fill="#f8f0db" stroke="#b6862c"/>
              <text x="320" y="181" text-anchor="middle" font-size="11" fill="#8a6420" font-weight="600">4. Meet outside bodies; ascertain their views on the draft</text>
              <polygon points="320,190 316,198 324,198" fill="#b6862c"/>
              <rect x="120" y="198" width="400" height="28" rx="7" fill="#f8f0db" stroke="#b6862c"/>
              <text x="320" y="217" text-anchor="middle" font-size="11" fill="#8a6420" font-weight="600">5. Finalise and issue Exposure Draft (E.D.) for public comments</text>
              <polygon points="320,226 316,234 324,234" fill="#b6862c"/>
              <rect x="120" y="234" width="400" height="28" rx="7" fill="#f8f0db" stroke="#b6862c"/>
              <text x="320" y="253" text-anchor="middle" font-size="11" fill="#8a6420" font-weight="600">6. Consider all comments received on the Exposure Draft</text>
              <polygon points="320,262 316,270 324,270" fill="#b6862c"/>
              <rect x="120" y="270" width="400" height="28" rx="7" fill="#e3eee6" stroke="#2f6b4f"/>
              <text x="320" y="289" text-anchor="middle" font-size="11" fill="#234f3b" font-weight="600">7. Modify draft; submit to ICAI Council for approval</text>
              <polygon points="320,298 316,306 324,306" fill="#b6862c"/>
              <rect x="120" y="306" width="400" height="38" rx="9" fill="#234f3b"/>
              <text x="320" y="323" text-anchor="middle" font-size="12" font-weight="700" fill="#f4efe3">8. Issue the Accounting Standard</text>
              <text x="320" y="339" text-anchor="middle" font-size="10" fill="#e3eee6">By ICAI (non-companies) or Central Govt (smaller companies)</text>
              <text x="320" y="373" text-anchor="middle" font-size="11" fill="#3c4742" font-style="italic" font-family="Fraunces, serif">Process is fully consultative — the same area passes through multiple review stages before issue.</text>
            </svg>`, cap:"Eight-step formulation process: identifying the need → study group → draft → consultation with outside bodies → Exposure Draft → public comment → modification → final issue."},
            {h:"Which Accounting Standards apply to which type of entity?", kicker:"Accounting Standards · Three frameworks in India", html:`
              <p>India has three distinct sets of accounting standards, applicable based on entity size, nature, and listing status:</p>
              <table class="cmp">
                <tr><th>Framework</th><th>Applicable to</th><th>Character</th></tr>
                <tr><td><b>Ind AS</b> (IFRS-converged)</td><td>All listed companies &amp; NBFCs; unlisted companies/NBFCs with net worth ≥ ₹250 crore</td><td>Based on international IFRS; uses fair value extensively</td></tr>
                <tr><td><b>AS</b> (Companies Rules, 2021)</td><td>Smaller unlisted companies not covered by Ind AS</td><td>Traditional AS under Companies Act; simpler framework</td></tr>
                <tr><td><b>AS</b> (prescribed by ICAI)</td><td>All non-company entities — partnerships, sole traders, trusts, societies</td><td>ICAI standards; broadly historical cost based</td></tr>
              </table>
              <p><b>Ind AS vs AS:</b> Ind AS are India's converged version of IFRS (adapted — not identical). They use fair value and present value more extensively. Traditional AS are simpler and primarily historical-cost based — which is what you study at Class XI level.</p>
              <p>For WBCHSE examinations: understand what AS are, why they are needed, their objectives, benefits, limitations, and the formulation process. The individual list of AS numbers (AS 1 through AS 29, Ind AS 1 through 116) is background knowledge only — it is not tested at Class XI.</p>`},


            /* ── GOODS AND SERVICES TAX (GST) ── */
            {topicStart:"gst", title:"Goods and Services Tax (GST)", icon:"🏷️", desc:"India's unified indirect tax from July 2017 — its dual structure, seven characteristics and key advantages."},
            {h:"GST — India's unified indirect tax and what it replaced", kicker:"GST · Introduction &amp; Structure", html:`
              <p>The <b>Goods and Services Tax (GST)</b> is a comprehensive, multi-stage, destination-based indirect tax introduced in India on <strong>1 July 2017</strong>. It replaced a complex web of central and state taxes that had created a cascading (tax-on-tax) burden and fragmented India's national market.</p>
              <p><b>Taxes replaced by GST:</b></p>
              <ul>
                <li><i>Central taxes replaced:</i> Central Excise Duty, Service Tax, Central Sales Tax (CST), Additional Customs Duty, Countervailing Duty</li>
                <li><i>State taxes replaced:</i> State VAT, Octroi, Entry Tax, Luxury Tax, Entertainment Tax, Purchase Tax</li>
              </ul>
              <p><b>Dual GST Structure</b> (reflecting India's federal system — both Centre and States have taxing powers):</p>
              <table class="cmp">
                <tr><th>Type</th><th>Levied by</th><th>When it applies</th></tr>
                <tr><td><b>CGST</b> (Central GST)</td><td>Central Government</td><td>Intra-state transactions (within the same state) — levied alongside SGST</td></tr>
                <tr><td><b>SGST</b> (State GST)</td><td>State Government</td><td>Intra-state transactions — levied alongside CGST</td></tr>
                <tr><td><b>IGST</b> (Integrated GST)</td><td>Central Government</td><td>Inter-state transactions (between two different states) and imports</td></tr>
              </table>
              <p>For example: a trader in West Bengal selling to a buyer in West Bengal pays CGST + SGST. The same trader selling to a buyer in Maharashtra pays IGST instead.</p>`},
            {h:"Characteristics of GST", kicker:"GST · Characteristics", html:`
              <p>GST has several defining features that distinguish it from the old indirect tax system:</p>
              <ul>
                <li><b>Comprehensive:</b> Covers both goods and services under a single tax — unlike the old system where goods and services were taxed separately under different laws.</li>
                <li><b>Multi-stage:</b> GST is levied at every stage of the supply chain — from manufacturer to wholesaler to retailer. However, each stage only pays tax on the <i>value it adds</i>, not on the full price (because of ITC).</li>
                <li><b>Destination-based:</b> Tax revenue goes to the state where goods or services are <i>consumed</i> (the destination), not where they are produced or manufactured. This is fair to consuming states.</li>
                <li><b>Dual structure:</b> Both the Centre (CGST/IGST) and the States (SGST) levy GST simultaneously — a feature designed for India's federal system.</li>
                <li><b>Input Tax Credit (ITC):</b> At each stage, the registered dealer can claim a credit for the GST already paid by the previous stage. This eliminates the cascading effect (tax on tax) that existed under the old VAT-plus-excise-plus-service-tax structure.</li>
                <li><b>Technology-driven:</b> Administered through the GSTN (GST Network) portal — registration, filing, and payment are all done online.</li>
                <li><b>Threshold-based:</b> Small businesses below a turnover threshold are exempt from GST registration (currently ₹20 lakh for services; ₹40 lakh for goods in most states).</li>
              </ul>`},
            {h:"Advantages of GST", kicker:"GST · Advantages", html:`
              <p>GST brought significant benefits to businesses, consumers, and the government alike:</p>
              <ul>
                <li><b>Eliminates the cascading effect:</b> Under the old system, taxes were levied on taxes — a manufacturer's excise duty became part of the cost on which VAT was charged, and so on. GST's ITC mechanism ensures tax is paid only on value added, not on previously taxed amounts.</li>
                <li><b>Unified national market:</b> A single tax across all states removes the patchwork of state-level taxes, check-posts, and entry barriers that slowed down inter-state trade. India effectively becomes one common market.</li>
                <li><b>Reduced tax burden on consumers:</b> Eliminating cascading typically reduces the effective tax rate on final goods, lowering prices for consumers.</li>
                <li><b>Simplified compliance:</b> One tax (instead of 17+ central and state taxes), one registration (valid across India), and unified returns — less paperwork and lower compliance costs for businesses.</li>
                <li><b>Wider tax base:</b> Many businesses that were outside the tax net (operating under exemption thresholds of old taxes) are now brought into the system, increasing government revenue.</li>
                <li><b>Transparency and reduced corruption:</b> The fully electronic GSTN system reduces human interface, making tax evasion harder and reducing opportunities for harassment or bribery at checkpoints.</li>
                <li><b>Boost to Make in India:</b> By removing tax-on-tax, Indian manufactured goods become more cost-competitive both domestically and in export markets.</li>
              </ul>`},
          
          ],

          /* ============================== SETS ============================== */
          sets:[
            {
              label:"Set 1 — Foundation",
              mix:"15/9/6",
              questions:[

                /* ---------- 15 EASY ---------- */
                {type:"standard", diff:"E",
                 q:"Which of these is the WIDEST term?",
                 options:["Book-keeping","Journalising","Accounting","Accountancy"], answer:3,
                 explain:"Accountancy is the whole body of knowledge and rules; accounting applies them; book-keeping (and journalising within it) is only the recording stage.",
                 optionExplains:[
                   "Book-keeping is only the recording stage — the narrowest of the lot.",
                   "Journalising is a single step inside book-keeping — narrower still.",
                   "Accounting is wider than book-keeping but is itself contained within accountancy.",
                   "Correct. Accountancy is the complete discipline that contains accounting, which contains book-keeping."
                 ]},

                {type:"standard", diff:"E",
                 q:"Accounting is popularly called the:",
                 options:["Science of money","Language of business","Art of selling","Law of trade"], answer:1,
                 explain:"Because accounting communicates the financial story of a business to its users, it is called the language of business.",
                 optionExplains:[
                   "Accounting deals with money but is not termed the 'science of money'.",
                   "Correct. It communicates financial information to stakeholders, just as a language communicates meaning.",
                   "Selling is a business activity, not what accounting is called.",
                   "Law governs business but accounting is not called the 'law of trade'."
                 ]},

                {type:"standard", diff:"E",
                 q:"Book-keeping is mainly concerned with:",
                 options:["Interpreting data for users","Recording of financial data","Designing the whole accounting system","Auditing the accounts"], answer:1,
                 explain:"Book-keeping is the routine recording stage. Analysis and interpretation belong to accounting.",
                 optionExplains:[
                   "Interpreting data is a function of accounting, not book-keeping.",
                   "Correct. Book-keeping records transactions in a systematic, orderly way.",
                   "Designing the system is a wider task; book-keeping just records.",
                   "Auditing is an independent examination, separate from book-keeping."
                 ]},

                {type:"standard", diff:"E",
                 q:"Which of the following is NOT a sub-field of accounting?",
                 options:["Financial Accounting","Cost Accounting","Management Accounting","Book-keeping"], answer:3,
                 explain:"Financial, Cost and Management Accounting are sub-fields. Book-keeping is only the recording stage within accounting, not a sub-field.",
                 optionExplains:[
                   "Financial Accounting is a recognised sub-field.",
                   "Cost Accounting is a recognised sub-field.",
                   "Management Accounting is a recognised sub-field.",
                   "Correct. Book-keeping is the recording phase, not a branch of accounting."
                 ]},

                {type:"standard", diff:"E",
                 q:"Which user of accounting information is an INTERNAL user?",
                 options:["Bank giving a loan","Income Tax Department","Management","Supplier"], answer:2,
                 explain:"Management works inside the business. Banks, tax authorities and suppliers are all external users.",
                 optionExplains:[
                   "A bank assessing a loan is outside the business — external.",
                   "The tax department is a government agency — external.",
                   "Correct. Management runs the business from within — internal.",
                   "Suppliers deal with the business from outside — external."
                 ]},

                {type:"standard", diff:"E",
                 q:"The Profit & Loss Account is prepared to ascertain the:",
                 options:["Financial position","Profit or loss for a period","List of debtors","Cash in hand only"], answer:1,
                 explain:"The P&L Account shows the result of operations — profit or loss. Financial position is shown by the Balance Sheet.",
                 optionExplains:[
                   "Financial position is shown by the Balance Sheet, not the P&L Account.",
                   "Correct. The P&L Account measures profit or loss for the period.",
                   "A list of debtors is not the purpose of the P&L Account.",
                   "Cash is only one item; the P&L Account is about overall results."
                 ]},

                {type:"standard", diff:"E",
                 q:"Financial statements form part of:",
                 options:["Book-keeping","Accounting","Auditing","Costing only"], answer:1,
                 explain:"Preparing financial statements is part of accounting; book-keeping ends at the trial balance stage.",
                 optionExplains:[
                   "Book-keeping stops at recording/trial balance — it does not prepare financial statements.",
                   "Correct. Financial statements are prepared in the accounting stage.",
                   "Auditing examines statements; it does not prepare them.",
                   "Costing is a separate branch; statements are part of accounting generally."
                 ]},

                {type:"standard", diff:"E",
                 q:"The Going Concern concept assumes that the business will:",
                 options:["Be sold immediately","Continue for the foreseeable future","Close at year-end","Never make a profit"], answer:1,
                 explain:"Going Concern assumes continuity, which is why assets are valued at cost and depreciated rather than valued at sale price.",
                 optionExplains:[
                   "It assumes the opposite of an immediate sale.",
                   "Correct. The business is assumed to continue operating into the foreseeable future.",
                   "Closing at year-end contradicts the going concern assumption.",
                   "Profitability is unrelated to the going concern assumption."
                 ]},

                {type:"standard", diff:"E",
                 q:"As per the Money Measurement concept, accounting records only those transactions which:",
                 options:["Are large in size","Can be measured in money","Involve the owner","Happen in cash"], answer:1,
                 explain:"Only money-measurable items are recorded. Valuable non-monetary things like staff skill are excluded.",
                 optionExplains:[
                   "Size does not decide recording; measurability in money does.",
                   "Correct. Only transactions expressible in money are recorded.",
                   "Owner involvement is not the test for recording.",
                   "Both cash and credit transactions are recorded if measurable in money."
                 ]},

                {type:"standard", diff:"E",
                 q:"Recording an asset at its purchase price rather than market value follows the:",
                 options:["Cost concept","Matching concept","Realisation concept","Entity concept"], answer:0,
                 explain:"The Cost concept records assets at historical (acquisition) cost because it is objective and verifiable.",
                 optionExplains:[
                   "Correct. Historical/acquisition cost is used under the Cost concept.",
                   "Matching deals with expenses vs revenue, not asset valuation basis.",
                   "Realisation deals with when to record a gain, not the recording value of assets.",
                   "Entity concept separates owner and business; it does not set valuation basis."
                 ]},

                {type:"standard", diff:"E",
                 q:"Drawings are:",
                 options:["Goods purchased for resale","Cash/goods taken by the owner for personal use","Money owed to suppliers","Profit of the business"], answer:1,
                 explain:"Drawings are amounts withdrawn by the owner for personal use; they reduce capital.",
                 optionExplains:[
                   "Goods for resale are purchases, not drawings.",
                   "Correct. Drawings are owner withdrawals for personal use.",
                   "Money owed to suppliers is creditors/liabilities.",
                   "Profit is the surplus of revenue over expenses, not drawings."
                 ]},

                {type:"standard", diff:"E",
                 q:"Amounts owed BY the business to outsiders are called:",
                 options:["Assets","Liabilities","Capital","Drawings"], answer:1,
                 explain:"Liabilities are obligations owed to outsiders, such as creditors and loans.",
                 optionExplains:[
                   "Assets are what the business owns, not what it owes.",
                   "Correct. Liabilities are amounts owed to outside parties.",
                   "Capital is owed to the owner, not outsiders.",
                   "Drawings reduce capital; they are not amounts owed to outsiders."
                 ]},

                {type:"standard", diff:"E",
                 q:"The three fundamental accounting assumptions are:",
                 options:["Entity, Cost, Dual Aspect","Going Concern, Consistency, Accrual","Matching, Prudence, Materiality","Relevance, Reliability, Comparability"], answer:1,
                 explain:"The three fundamental assumptions are Going Concern, Consistency and Accrual; if not followed, the fact must be disclosed.",
                 optionExplains:[
                   "These are concepts, but not the three 'fundamental assumptions'.",
                   "Correct. Going Concern, Consistency and Accrual are the three fundamental assumptions.",
                   "These are concepts/conventions, not the three fundamental assumptions.",
                   "These are qualitative characteristics of statements, not assumptions."
                 ]},

                {type:"standard", diff:"E",
                 q:"'Anticipate no profit but provide for all possible losses' describes:",
                 options:["Consistency","Conservatism (Prudence)","Materiality","Going Concern"], answer:1,
                 explain:"This is the Conservatism/Prudence convention — the source of valuing stock at lower of cost or market price.",
                 optionExplains:[
                   "Consistency is about using the same method over time.",
                   "Correct. Prudence guards against losses and ignores unrealised gains.",
                   "Materiality is about the significance of items, not caution over losses.",
                   "Going Concern is about business continuity."
                 ]},

                {type:"matching", diff:"E",
                 q:"Match each concept with its core idea and pick the correct combination:",
                 columnA:["(i) Entity","(ii) Going Concern","(iii) Dual Aspect","(iv) Money Measurement"],
                 columnB:["(a) Every transaction has two effects","(b) Business is separate from owner","(c) Only money-measurable items recorded","(d) Business will continue operating"],
                 options:["i-b, ii-d, iii-a, iv-c","i-a, ii-b, iii-c, iv-d","i-c, ii-a, iii-d, iv-b","i-d, ii-c, iii-b, iv-a"], answer:0,
                 explain:"Entity = separate from owner (b); Going Concern = continues operating (d); Dual Aspect = two effects (a); Money Measurement = only money-measurable (c).",
                 optionExplains:[
                   "Correct. i-b, ii-d, iii-a, iv-c all match precisely.",
                   "Wrong: Entity is not 'two effects'; Going Concern is not 'separate from owner'.",
                   "Wrong: the pairings are shuffled and none align correctly.",
                   "Wrong: Entity is not 'continues operating'; Money Measurement is not 'two effects'."
                 ]},

                /* ---------- 9 MODERATE ---------- */
                {type:"standard", diff:"M",
                 q:"On 1st January, Sohan paid rent of ₹5,000. This is best classified as:",
                 options:["Only an event","A transaction","Neither a transaction nor an event","A liability"], answer:1,
                 explain:"Paying rent is a dealing involving money — a transaction. An event is a result (like profit), not the act itself.",
                 optionExplains:[
                   "An event is a consequence (e.g. profit); paying rent is the act itself.",
                   "Correct. Paying rent is a transaction — a financial dealing.",
                   "It is clearly a financial dealing, so it is a transaction.",
                   "Rent paid is an expense, not a liability."
                 ]},

                {type:"standard", diff:"M",
                 q:"At year-end, after selling goods, a trader is left with closing stock of ₹10,000. This closing stock is:",
                 options:["A transaction","An event","Neither","A liability"], answer:1,
                 explain:"Having stock left at year-end is a result/consequence of trading — an event, not a dealing.",
                 optionExplains:[
                   "A transaction is an active dealing; holding stock at year-end is not.",
                   "Correct. Closing stock in hand is an event — a result of the year's activity.",
                   "It is a recognised event, so 'neither' is wrong.",
                   "Closing stock is an asset, not a liability — and the classification asked is event vs transaction."
                 ]},

                {type:"standard", diff:"M",
                 q:"Following the WDV method of depreciation year after year reflects which concept?",
                 options:["Conservatism","Consistency","Materiality","Realisation"], answer:1,
                 explain:"Sticking to the same method each year is the Consistency concept, which keeps figures comparable.",
                 optionExplains:[
                   "Conservatism is about caution over losses, not method continuity.",
                   "Correct. Using the same method each year is Consistency.",
                   "Materiality concerns the significance of items, not method continuity.",
                   "Realisation concerns when a gain is recorded."
                 ]},

                {type:"standard", diff:"M",
                 q:"Capital brought in by the proprietor results in:",
                 options:["Increase in asset and increase in liability (capital)","Increase in liability and decrease in asset","Decrease in asset and increase in capital","No change in the equation"], answer:0,
                 explain:"Cash (asset) rises and Capital (the owner's claim, treated like a liability of the business) rises by the same amount — dual aspect.",
                 optionExplains:[
                   "Correct. Asset (cash) up and Capital up equally — both sides of the equation rise.",
                   "No asset decreases when capital is introduced.",
                   "Assets increase, they do not decrease, when capital comes in.",
                   "The equation changes — both assets and capital increase."
                 ]},

                {type:"standard", diff:"M",
                 q:"Splitting the indefinite life of a business into yearly intervals to measure performance is the:",
                 options:["Entity concept","Matching concept","Periodicity concept","Cost concept"], answer:2,
                 explain:"Periodicity (accounting period) slices the indefinite life into fixed periods, usually one year.",
                 optionExplains:[
                   "Entity separates owner and business; not about time periods.",
                   "Matching links expenses to revenue; it relies on periodicity but is not it.",
                   "Correct. Periodicity fixes the time-frame for measuring performance.",
                   "Cost concept concerns asset valuation, not time periods."
                 ]},

                {type:"standard", diff:"M",
                 q:"Determining the expenses of a period by linking them to the revenue earned is based on the:",
                 options:["Objectivity principle","Materiality principle","Matching principle","Cost principle"], answer:2,
                 explain:"The Matching principle deducts from a period's revenue only the expenses incurred to earn that revenue.",
                 optionExplains:[
                   "Objectivity is about verifiable evidence, not expense-revenue linkage.",
                   "Materiality is about significance, not the matching of costs to revenue.",
                   "Correct. Matching links a period's expenses to the revenue they generated.",
                   "Cost principle is about recording assets at historical cost."
                 ]},

                {type:"standard", diff:"M",
                 q:"Closing stock is valued at 'cost or net realisable value, whichever is lower.' Which concept does this follow?",
                 options:["Consistency","Conservatism","Materiality","Going Concern"], answer:1,
                 explain:"Valuing stock at the lower figure avoids recording an unrealised gain and provides for a possible loss — Conservatism.",
                 optionExplains:[
                   "Consistency requires the same method over time; it does not set the 'lower of' rule.",
                   "Correct. The 'lower of cost or market' rule comes straight from Conservatism.",
                   "Materiality is about item significance, not stock valuation basis.",
                   "Going Concern supports cost valuation but not the 'lower of' rule itself."
                 ]},

                {type:"assertion", diff:"M",
                 assertion:"Drawings are deducted from the owner's capital.",
                 reason:"Under the Business Entity concept, the business is treated as separate from its owner.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is true but R is false","A is false but R is true"], answer:0,
                 explain:"Because the business is a separate entity, the owner's personal withdrawal (drawings) reduces his claim — capital. R is the correct reason for A.",
                 optionExplains:[
                   "Correct. Both are true and the entity concept is precisely why drawings reduce capital.",
                   "R does explain A here, so this is wrong.",
                   "R is true — the entity concept is a genuine GAAP concept.",
                   "A is true — drawings definitely reduce capital."
                 ]},

                {type:"standard", diff:"M",
                 q:"Which is a LIMITATION of accounting?",
                 options:["It records every valuable resource including staff skill","It ignores price-level (inflation) changes","It always shows the future position","It removes all personal judgement"], answer:1,
                 explain:"Accounting ignores inflation — assets stay at historical cost. It also cannot record non-monetary items like staff skill, and does involve judgement.",
                 optionExplains:[
                   "The opposite is true — staff skill cannot be recorded (money measurement limit).",
                   "Correct. Accounting ignores changes in price levels such as inflation.",
                   "The Balance Sheet shows a past date, not the future.",
                   "Accounting actually involves considerable personal judgement."
                 ]},

                /* ---------- 6 VERY HARD ---------- */
                {type:"case", diff:"VH",
                 passage:"Mr. X starts a business with capital of ₹7,00,000. He buys machinery for ₹5,00,000 and keeps the rest as cash. During the year he withdraws ₹5,000 from the business to pay his son's school fees.",
                 q:"Applying the Entity concept, what is Mr. X's capital at the year-end?",
                 options:["₹7,00,000","₹6,95,000","₹5,00,000","₹2,00,000"], answer:1,
                 explain:"The ₹5,000 is personal (drawings), so it reduces capital: ₹7,00,000 − ₹5,000 = ₹6,95,000. The school fee is NOT a business expense.",
                 optionExplains:[
                   "This ignores the drawings; capital must fall by the ₹5,000 withdrawn.",
                   "Correct. Capital = ₹7,00,000 − ₹5,000 drawings = ₹6,95,000.",
                   "₹5,00,000 is the machinery value, not the capital.",
                   "₹2,00,000 is the cash retained, not the capital."
                 ]},

                {type:"case", diff:"VH",
                 passage:"A business has, on 31 March: Fixed Assets ₹1,10,000, Trade Receivables ₹80,000, Inventory ₹80,000, Cash & Bank ₹6,000. Its liabilities are: Bank Loan ₹1,00,000 and Trade Payables ₹70,000.",
                 q:"Using the accounting equation, what is the Capital (Equity) on 31 March?",
                 options:["₹2,76,000","₹1,70,000","₹1,06,000","₹2,00,000"], answer:2,
                 explain:"Assets = 1,10,000+80,000+80,000+6,000 = ₹2,76,000. Liabilities = 1,00,000+70,000 = ₹1,70,000. Capital = Assets − Liabilities = 2,76,000 − 1,70,000 = ₹1,06,000.",
                 optionExplains:[
                   "₹2,76,000 is total Assets, not Capital.",
                   "₹1,70,000 is total Liabilities, not Capital.",
                   "Correct. Capital = 2,76,000 − 1,70,000 = ₹1,06,000.",
                   "₹2,00,000 does not follow from the figures given."
                 ]},

                {type:"case", diff:"VH",
                 passage:"Mr. P.K. buys 10,000 garments at ₹100 each and sells 8,000 of them at ₹150 each during the year. He pays shop rent of ₹3,000 per month but has paid for only 11 months by year-end.",
                 q:"Applying accrual and matching, what is the profit for the year?",
                 options:["₹4,00,000","₹3,64,000","₹3,67,000","₹2,00,000"], answer:1,
                 explain:"Revenue = 8,000 × ₹150 = ₹12,00,000. Matched cost of goods SOLD = 8,000 × ₹100 = ₹8,00,000 (not all 10,000). Rent expense for 12 months = ₹36,000 (accrual, not the ₹33,000 paid). Profit = 12,00,000 − 8,00,000 − 36,000 = ₹3,64,000.",
                 optionExplains:[
                   "₹4,00,000 ignores the rent expense entirely.",
                   "Correct. ₹12,00,000 − ₹8,00,000 − ₹36,000 = ₹3,64,000.",
                   "₹3,67,000 wrongly uses ₹33,000 rent (cash paid) instead of ₹36,000 accrued.",
                   "₹2,00,000 is the closing stock value (2,000 × ₹100), not the profit."
                 ]},

                {type:"case", diff:"VH",
                 passage:"A purchased a car for ₹5,00,000, making a down payment of ₹1,00,000 and signing a bill payable of ₹4,00,000 due in 60 days.",
                 q:"What is the effect of this single transaction on the accounting equation?",
                 options:["Total assets increase by ₹5,00,000 only","Total liabilities increase by ₹4,00,000 only","Total assets increase by ₹4,00,000 with a matching ₹4,00,000 increase in liabilities","Capital increases by ₹5,00,000"], answer:2,
                 explain:"Car (asset) +₹5,00,000; Cash (asset) −₹1,00,000 → net asset rise ₹4,00,000. Bill payable (liability) +₹4,00,000. Both sides rise by ₹4,00,000, keeping the equation balanced.",
                 optionExplains:[
                   "Assets rise only ₹4,00,000 net, because ₹1,00,000 cash went out.",
                   "Liabilities do rise ₹4,00,000, but the statement ignores the matching asset change.",
                   "Correct. Net assets +₹4,00,000 and liabilities +₹4,00,000 — the equation stays balanced.",
                   "Capital is unaffected; this is an asset-and-liability transaction."
                 ]},

                {type:"assertion", diff:"VH",
                 assertion:"Recording a machine purchased for ₹11,00,000 (including installation) at its year-end market value of ₹12,00,000 is acceptable.",
                 reason:"The Cost concept requires assets to be shown at historical cost, not market value.",
                 options:["Both A and R are true and R explains A","Both A and R are true but R does not explain A","A is false but R is true","Both A and R are false"], answer:2,
                 explain:"A is FALSE — showing the machine at ₹12,00,000 violates the Cost concept; it should stay at ₹11,00,000. R is TRUE — the Cost concept does require historical cost. So A false, R true.",
                 optionExplains:[
                   "A is not true — recording at market value breaks the Cost concept.",
                   "A is false, so 'both true' cannot hold.",
                   "Correct. A is false (it violates the Cost concept); R correctly states the Cost concept.",
                   "R is true, so 'both false' is wrong."
                 ]},

                {type:"case", diff:"VH",
                 passage:"Mr. X buys a piece of land for ₹2,000. Years later its market value rises to ₹1,02,000. He has NOT sold it. An accountant is tempted to record a gain of ₹1,00,000.",
                 q:"Which concept PREVENTS recording this ₹1,00,000 gain now?",
                 options:["Matching concept","Realisation concept","Periodicity concept","Money measurement concept"], answer:1,
                 explain:"The Realisation concept says a gain is recorded only when it actually materialises (e.g. on sale). Since the land is unsold, the ₹1,00,000 increase is unrealised and is not recorded.",
                 optionExplains:[
                   "Matching links expenses to revenue; it does not govern unrealised gains on assets.",
                   "Correct. Realisation bars recording a gain until it is actually realised through a sale.",
                   "Periodicity fixes time-frames; it does not bar unrealised gains.",
                   "Money measurement only requires money terms — the gain is already in money."
                 ]}
              ]
            },
            {label:"Set 2 — Foundation",  mix:"14/9/7",  questions:[

                /* ── 14 EASY ── */
                {type:"standard",diff:"E",
                 q:"In accounting, 'Capital' refers to:",
                 options:["Total assets of the business","Amount invested by the owner in the business","Total liabilities of the business","Profit earned during the year"],
                 answer:1,
                 explain:"Capital is the amount the owner has invested in the business. From the business entity's viewpoint it is an internal liability — what the business owes back to the owner.",
                 optionExplains:["Total assets include all resources, not just the owner's investment.","Correct. Capital is the owner's investment and represents the owner's financial stake.","Total liabilities are amounts owed to outsiders, not the owner's contribution.","Profit is the surplus of revenue over expenses, not the original investment."]},

                {type:"standard",diff:"E",
                 q:"When the owner withdraws ₹10,000 cash from the business for personal use, it is called:",
                 options:["An expense of the business","Drawings","Revenue expenditure","A loan from the business"],
                 answer:1,
                 explain:"Drawings are amounts taken out of the business by the owner for personal use. They reduce capital — they are NOT a business expense.",
                 optionExplains:["Expenses relate to business operations; personal withdrawal is not a business expense.","Correct. This is Drawings — personal withdrawal by the owner, which reduces capital.","Revenue expenditure is money spent to maintain the business's earning capacity, not a personal withdrawal.","The owner is not a creditor of the business; this is a reduction of his stake, not a loan."]},

                {type:"standard",diff:"E",
                 q:"Which of the following is a CURRENT asset?",
                 options:["Land and Buildings","Goodwill","Machinery","Debtors (Trade Receivables)"],
                 answer:3,
                 explain:"Current assets are expected to be converted to cash within one year. Debtors owe money to the business from credit sales and are expected to pay within the operating cycle.",
                 optionExplains:["Land and Buildings are fixed (non-current) assets — held for long-term use.","Goodwill is an intangible fixed asset — it does not convert to cash in the short run.","Machinery is a tangible fixed asset — it is used in operations over many years.","Correct. Debtors are amounts owed to the business from credit sales — a current asset."]},

                {type:"standard",diff:"E",
                 q:"Creditors represent persons:",
                 options:["Who owe money to the business","To whom the business owes money","Who supply services to the business free of cost","Who invest in the business as shareholders"],
                 answer:1,
                 explain:"Creditors (trade payables) are parties from whom the business has purchased goods or services on credit. The business owes them money, making creditors a current liability.",
                 optionExplains:["Persons who OWE money to the business are Debtors, not Creditors.","Correct. Creditors are parties to whom the business owes money — a current liability.","Suppliers provide goods/services on credit and expect payment; they are creditors.","Shareholders invest equity in the business; they are distinct from trade creditors."]},

                {type:"standard",diff:"E",
                 q:"Trade discount, unlike cash discount, is:",
                 options:["Recorded as an expense in the books","Credited to a Discount Account","NOT recorded in the books of account","Allowed only on credit sales"],
                 answer:2,
                 explain:"Trade discount is deducted from the list price on the invoice before any entry is made. Only the NET price enters the books. The discount itself never appears in any account.",
                 optionExplains:["Cash Discount Allowed is recorded as an expense; Trade Discount is not recorded at all.","There is no Trade Discount Account — only the net invoice amount is recorded.","Correct. Trade discount is pre-sale and reduces the list price; only the net figure enters the books.","Trade discount can be on both cash and credit sales; the key feature is it is not recorded."]},

                {type:"standard",diff:"E",
                 q:"The Accounting Equation states that:",
                 options:["Assets = Capital − Liabilities","Liabilities = Assets + Capital","Assets = Capital + Liabilities","Capital = Assets + Liabilities"],
                 answer:2,
                 explain:"Assets = Capital + Liabilities. Every asset the business owns is financed by either the owner (Capital) or by outsiders (Liabilities). This equation is always in balance.",
                 optionExplains:["If Capital were subtracted, assets < capital in many real scenarios — this is wrong.","This would mean Liabilities > Assets always, which is incorrect.","Correct. A = C + L — the fundamental, always-balanced accounting equation.","Capital = Assets − Liabilities is correct for FINDING capital, but not the equation form used."]},

                {type:"standard",diff:"E",
                 q:"Which type of account is 'Salary Account'?",
                 options:["Personal Account","Real Account (Tangible)","Nominal Account","Real Account (Intangible)"],
                 answer:2,
                 explain:"Nominal accounts record all expenses, losses, incomes and gains. Salary is an expense, so Salary Account is a Nominal Account. All nominal accounts close at year-end via the Profit & Loss Account.",
                 optionExplains:["Personal accounts relate to persons, firms or institutions — not to expenses.","Real (tangible) accounts are for physical assets like cash, land and machinery.","Correct. Salary is an expense — a Nominal Account. Golden Rule: Debit all expenses.","Real (intangible) accounts are for non-physical assets like goodwill and patents."]},

                {type:"standard",diff:"E",
                 q:"Under the Cash Basis of Accounting, income is recognised:",
                 options:["When the invoice is raised","When the goods are delivered","When cash is actually received","At the end of the accounting year"],
                 answer:2,
                 explain:"Cash Basis records income only when cash is received — not when earned. This distinguishes it from the Accrual Basis, where income is recorded when earned regardless of cash receipt.",
                 optionExplains:["Raising an invoice records a sale under Accrual Basis, not Cash Basis.","Delivery triggers recognition under Accrual Basis (revenue recognised when earned).","Correct. Cash Basis records income only upon actual cash receipt.","Year-end recognition would not match cash flows throughout the year."]},

                {type:"standard",diff:"E",
                 q:"Historical Cost of an asset is:",
                 options:["Its current market replacement price","The price at which it could be sold today","The discounted present value of future earnings","The original acquisition price actually paid"],
                 answer:3,
                 explain:"Historical Cost = the actual price paid at the time of acquisition, including all costs to bring the asset to its usable state. It is objective and based on a verifiable completed transaction.",
                 optionExplains:["Current replacement price = Current Cost, a different measurement base.","Selling price today = Realisable Value, a different measurement base.","Discounted future earnings = Present Value, a different measurement base.","Correct. Historical Cost is the acquisition price — objective, verifiable, from the actual transaction."]},

                {type:"standard",diff:"E",
                 q:"Which of the following is an INTANGIBLE fixed asset?",
                 options:["Land","Factory Building","Goodwill","Closing Stock"],
                 answer:2,
                 explain:"Intangible assets have no physical form but carry real economic value. Goodwill, patents and trademarks are the classic examples. Land and buildings are tangible; closing stock is a current asset.",
                 optionExplains:["Land is a tangible fixed asset — it has physical existence.","Factory building is a tangible fixed asset — physical and used long-term.","Correct. Goodwill has no physical form but represents the business's reputation — an intangible fixed asset.","Closing stock is a current asset (inventory), not a fixed asset."]},

                {type:"standard",diff:"E",
                 q:"GST replaced which of the following taxes in India?",
                 options:["Direct taxes like Income Tax","Only Central Excise Duty","Both Central Excise Duty and State VAT among others","Only Value Added Tax (VAT)"],
                 answer:2,
                 explain:"GST (introduced 1 July 2017) replaced 17+ central and state indirect taxes including Central Excise Duty, Service Tax, State VAT, CST, Octroi and others — creating a unified national market.",
                 optionExplains:["Direct taxes like Income Tax are NOT covered by GST — GST is an indirect tax.","GST replaced many taxes, not just Central Excise Duty.","Correct. GST replaced a large number of both central and state indirect taxes.","GST replaced State VAT AND many other taxes — VAT was just one of them."]},

                {type:"standard",diff:"E",
                 q:"IGST (Integrated GST) is levied on:",
                 options:["Sales within the same state only","Inter-state sales and imports","Only agricultural produce","Exports from India"],
                 answer:1,
                 explain:"IGST applies to inter-state transactions (sales between two different states) and imports. For intra-state transactions, CGST + SGST apply instead. IGST revenue goes to the Central Government and is then shared with the destination state.",
                 optionExplains:["Intra-state sales attract CGST + SGST, not IGST.","Correct. IGST applies to inter-state sales and imports — replacing CGST+SGST for cross-state deals.","Agricultural produce tax treatment varies; IGST is about inter-state vs intra-state — not category.","Exports are generally ZERO-rated under GST, not subject to IGST."]},

                {type:"standard",diff:"E",
                 q:"The Double Entry System of bookkeeping was systematised by:",
                 options:["Adam Smith","Henry Fayol","Luca Pacioli","J.M. Keynes"],
                 answer:2,
                 explain:"Luca Pacioli, an Italian mathematician, published 'Summa de Arithmetica' in 1494 — the first systematic description of double entry bookkeeping. He is often called the Father of Accounting.",
                 optionExplains:["Adam Smith was an economist known for 'The Wealth of Nations' (1776) — not accounting.","Henry Fayol was a management theorist known for 14 Principles of Management.","Correct. Luca Pacioli codified double entry in 1494 and is the Father of Accounting.","J.M. Keynes was a 20th-century economist — unrelated to double entry bookkeeping."]},

                {type:"standard",diff:"E",
                 q:"Fictitious assets are best described as:",
                 options:["Assets that cannot be physically seen or touched","Natural resources that deplete over time","Losses or deferred expenses temporarily shown as assets","Assets that will never generate any benefit"],
                 answer:2,
                 explain:"Fictitious assets are not real assets — they represent losses or deferred expenses (like preliminary expenses, discount on issue of shares) that cannot be written off at once and are gradually written off over subsequent periods.",
                 optionExplains:["Intangible assets (goodwill, patents) have no physical form — this describes intangibles, not fictitious.","Natural resources that deplete are Wasting Assets — a different category.","Correct. Fictitious assets are deferred losses/expenses awaiting write-off — not genuine assets at all.","Fictitious assets are written off over time but will have been useful; the issue is timing of recognition."]},

                /* ── 9 MODERATE ── */
                {type:"standard",diff:"M",
                 q:"If a firm's Total Assets = ₹9,50,000 and Capital = ₹5,50,000, what are its Total Liabilities?",
                 options:["₹15,00,000","₹4,00,000","₹5,50,000","₹9,50,000"],
                 answer:1,
                 explain:"Using A = C + L: ₹9,50,000 = ₹5,50,000 + L. Therefore L = ₹9,50,000 − ₹5,50,000 = ₹4,00,000.",
                 optionExplains:["₹15,00,000 is Assets + Capital — incorrect; that is not how the equation works.","Correct. L = A − C = ₹9,50,000 − ₹5,50,000 = ₹4,00,000.","₹5,50,000 is the Capital figure, not Liabilities.","₹9,50,000 is Total Assets, not Liabilities."]},

                {type:"standard",diff:"M",
                 q:"A shop owner spends ₹25,000 whitewashing the shop premises annually. This should be treated as:",
                 options:["Capital Expenditure as it improves the appearance of the asset","Revenue Expenditure as it is routine maintenance","Deferred Revenue Expenditure as it benefits more than one year","Capital Receipt as the shop's value might increase"],
                 answer:1,
                 explain:"Routine whitewashing merely maintains the premises without adding new capacity, extending useful life significantly or creating a new asset. It is Revenue Expenditure — a periodic operating cost charged to the current period.",
                 optionExplains:["Whitewashing does not improve the asset's fundamental capacity or extend life; it is maintenance.","Correct. Annual whitewashing is routine maintenance — Revenue Expenditure charged to the current period.","Benefits do NOT extend meaningfully beyond the current period; annual whitewash is not deferred revenue expenditure.","Capital Receipt comes from sale of capital assets or raising capital — not from spending on premises."]},

                {type:"standard",diff:"M",
                 q:"A firm makes credit sales of ₹2,00,000 in March. Only ₹1,20,000 is received by 31 March; the rest is due in April. Under Accrual Basis, what is the revenue for March?",
                 options:["₹1,20,000 (cash received only)","₹80,000 (amount still outstanding)","₹2,00,000 (all sales made in March)","Nil — wait for all cash to arrive"],
                 answer:2,
                 explain:"Accrual Basis recognises income when it is EARNED — when the goods are delivered or services provided. All ₹2,00,000 was earned in March, so all of it is March revenue. The uncollected ₹80,000 appears as Debtors (asset).",
                 optionExplains:["₹1,20,000 is the cash received — this is how Cash Basis would treat it, not Accrual.","₹80,000 is only the outstanding balance — incomplete recognition.","Correct. All sales made in March (₹2,00,000) are earned revenue for March under Accrual Basis.","Deferring all recognition to cash arrival is the Cash Basis approach, not Accrual."]},

                {type:"standard",diff:"M",
                 q:"A business pays rent of ₹8,000 in cash. Which Golden Rules correctly apply?",
                 options:["Debit Rent A/c (Nominal — Debit expenses); Credit Cash A/c (Real — Credit what goes out)","Debit Cash A/c; Credit Rent A/c","Debit the Receiver; Credit the Giver (both Personal Accounts)","Debit Rent A/c (Real); Credit Cash A/c (Personal)"],
                 answer:0,
                 explain:"Rent A/c is a Nominal Account (expense) → Debit all expenses. Cash A/c is a Real Account (tangible asset) → Credit what goes out. Journal entry: Rent A/c Dr ₹8,000 | Cash A/c Cr ₹8,000.",
                 optionExplains:["Correct. Nominal rule for Rent (expense debit); Real rule for Cash (goes out, credit).","Wrong direction — cash is going OUT so Cash A/c is credited, not debited.","Both are not Personal Accounts. Rent is Nominal; Cash is Real.","Rent A/c is Nominal, not Real. Cash A/c is Real, not Personal."]},

                {type:"standard",diff:"M",
                 q:"A machine was bought for ₹6,00,000. Its current replacement cost is ₹14,00,000; it can be sold today for ₹11,00,000; and the PV of future cash flows is ₹9,00,000. Under CURRENT COST, the machine is valued at:",
                 options:["₹6,00,000","₹14,00,000","₹11,00,000","₹9,00,000"],
                 answer:1,
                 explain:"Current Cost = the amount that would need to be paid today to acquire the same or equivalent asset. Here that is ₹14,00,000. Historical Cost = ₹6,00,000; Realisable Value = ₹11,00,000; Present Value = ₹9,00,000.",
                 optionExplains:["₹6,00,000 is Historical Cost — the original acquisition price.","Correct. ₹14,00,000 is the current replacement price = Current Cost.","₹11,00,000 is the amount obtainable on sale = Realisable Value.","₹9,00,000 is the discounted future cash flows = Present Value."]},

                {type:"standard",diff:"M",
                 q:"Which statement about the Single Entry System is CORRECT?",
                 options:["It records both debit and credit aspects of every transaction","It can produce an accurate Trial Balance","It usually maintains only cash and personal accounts","It is acceptable under the Companies Act for all entities"],
                 answer:2,
                 explain:"Single Entry (incomplete records) typically maintains only a cash book and personal accounts (debtors/creditors). Real accounts and nominal accounts are not properly maintained, so a Trial Balance and Balance Sheet cannot be properly prepared.",
                 optionExplains:["Recording both aspects is the hallmark of Double Entry — not Single Entry.","A Trial Balance cannot be prepared from Single Entry records — no double aspect check.","Correct. Single Entry typically covers only cash and personal accounts — hence 'incomplete records'.","The Companies Act and tax laws do not accept Single Entry for proper corporate reporting."]},

                {type:"assertion",diff:"M",
                 assertion:"Cash Discount is NOT recorded in the books of account.",
                 reason:"Cash Discount is given at the time of purchase to encourage bulk buying.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is true but R is false","Both A and R are false"],
                 answer:3,
                 explain:"Both A and R are FALSE. (A) Cash Discount IS recorded in the books — as 'Discount Allowed' (expense) by the seller and 'Discount Received' (income) by the buyer. (R) Cash Discount is given at the time of PAYMENT (not purchase) to encourage prompt/early settlement of dues. It is Trade Discount that is given at the time of purchase for bulk buying.",
                 optionExplains:["Both A and R are false — A is incorrect about recording; R is incorrect about the occasion.","Both are false — even if we ignore the explanation link, the individual statements are wrong.","A is false (cash discount IS recorded); the option structure requires correct A.","Correct. A is false (cash discount is recorded); R is also false (cash discount is for prompt payment, not purchase)."]},

                {type:"standard",diff:"M",
                 q:"The Accounting Standards Board (ASB) was constituted by ICAI in:",
                 options:["1947","1956","1977","1991"],
                 answer:2,
                 explain:"The ICAI established the ASB in 1977, taking a leadership role in standard-setting in India. ASB considers IFRS while framing Indian Accounting Standards, within India's legal and business environment.",
                 optionExplains:["1947 is India's independence year — not when ASB was set up.","ICAI itself was established in 1949; ASB came later in 1977.","Correct. ASB was constituted in 1977 by the ICAI Council.","1991 is associated with India's economic liberalisation — not ASB's founding."]},

                {type:"matching",diff:"M",
                 q:"Match each account with its correct type:",
                 columnA:["(i) Ramesh's Account (a debtor)","(ii) Cash Account","(iii) Salary Account","(iv) Goodwill Account"],
                 columnB:["(a) Nominal Account","(b) Real Account — Tangible","(c) Personal Account","(d) Real Account — Intangible"],
                 options:["i-c, ii-b, iii-a, iv-d","i-a, ii-c, iii-b, iv-d","i-c, ii-d, iii-a, iv-b","i-b, ii-c, iii-d, iv-a"],
                 answer:0,
                 explain:"Ramesh is a person → Personal Account. Cash is a physical asset → Real (Tangible). Salary is an expense → Nominal. Goodwill has no physical form but is a genuine asset → Real (Intangible).",
                 optionExplains:["Correct. Personal (Ramesh), Real Tangible (Cash), Nominal (Salary), Real Intangible (Goodwill).","Wrong — Ramesh is not a Nominal Account; Salary is not Real.","Wrong — Cash is Tangible Real, not Intangible.","Wrong — Ramesh (person) is not a Real Account."]},

                /* ── 7 VERY HARD ── */
                {type:"assertion",diff:"VH",
                 assertion:"Wasting assets such as mines and oil wells have no physical existence and are therefore classified as intangible assets.",
                 reason:"Physical resources like mines and oil wells diminish as they are extracted and used up.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is true but R is false","A is false but R is true"],
                 answer:3,
                 explain:"The Assertion is FALSE — wasting assets (mines, quarries, oil wells) DO have physical existence. They are tangible fixed assets that deplete as they are extracted. The Reason is TRUE — they do diminish physically over use. Intangible assets (goodwill, patents) are different — they have no physical form. Wasting and intangible are two different subcategories of fixed assets.",
                 optionExplains:["A is false — wasting assets have physical existence; they are not intangible.","A is still false; the paired statement about R being non-explanatory doesn't rescue A.","A is false; it cannot be accepted as true regardless of R's truth.","Correct. A is false (wasting assets are physical/tangible); R is true (they do deplete over use)."]},

                {type:"assertion",diff:"VH",
                 assertion:"A Trial Balance whose total debits equal total credits proves that all transactions have been completely and correctly recorded without any error.",
                 reason:"The Double Entry System requires that for every debit entry, there must be an equal and corresponding credit entry.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:2,
                 explain:"R is TRUE — Double Entry does require equal debits and credits. A is FALSE — a balanced Trial Balance does NOT guarantee error-free books. Errors of omission (entire transaction omitted), errors of commission (wrong account, same type), compensating errors and errors of principle all go undetected by a Trial Balance. Only arithmetic errors that disturb the debit-credit balance are caught.",
                 optionExplains:["A is false; a balanced TB does not prove freedom from all errors.","A is still false — the 'does not explain A' option still requires A to be true.","Correct. R is true (double entry principle); A is false (TB cannot detect all error types).","R is true — Double Entry does require equal debits and credits."]},

                {type:"case",diff:"VH",
                 passage:"Ravi's business for the month of March: Sales made ₹2,00,000 (cash received ₹1,20,000; balance ₹80,000 due in April). Purchases made ₹1,40,000 (cash paid ₹1,00,000; balance ₹40,000 outstanding). Salaries incurred and paid ₹20,000.",
                 q:"Which option correctly shows the Profit under BOTH bases of accounting for March?",
                 options:["Cash Basis ₹20,000 ; Accrual Basis ₹40,000","Cash Basis ₹20,000 ; Accrual Basis ₹40,000 — both bases always agree","Cash Basis: Revenue ₹1,20,000 − Expenses ₹1,20,000 = ₹0 ; Accrual: ₹2,00,000 − ₹1,60,000 = ₹40,000","Cash Basis: ₹1,20,000 − ₹1,20,000 = ₹0 ; Accrual: ₹2,00,000 − ₹1,60,000 = ₹40,000"],
                 answer:3,
                 explain:"Cash Basis: Income = ₹1,20,000 (received); Expenses = ₹1,00,000 (purchases paid) + ₹20,000 (salaries) = ₹1,20,000; Profit = ₹0. Accrual Basis: Income = ₹2,00,000 (earned); Expenses = ₹1,40,000 (purchases incurred) + ₹20,000 (salaries) = ₹1,60,000; Profit = ₹40,000. Same business, starkly different pictures.",
                 optionExplains:["Option A states Cash Basis profit as ₹20,000 — incorrect; cash income = ₹1,20,000, cash expenses = ₹1,20,000 → ₹0.","The two bases rarely agree when credit transactions exist; the claim is false.","Both C and D show the same figures; both are arithmetically correct (see full calculation in explain).","Correct. Cash Basis: ₹1,20,000 − ₹1,20,000 = ₹0. Accrual: ₹2,00,000 − ₹1,60,000 = ₹40,000."]},

                {type:"matching",diff:"VH",
                 q:"Match each Valuation Principle to the question it answers about an asset:",
                 columnA:["(i) Historical Cost","(ii) Current Cost","(iii) Realisable Value","(iv) Present Value"],
                 columnB:["(a) What is the present discounted worth of all future cash flows this asset will generate?","(b) What did I actually pay to acquire this asset?","(c) What would it cost me to buy the same asset at today's market prices?","(d) What cash would I receive if I sold this asset in an orderly transaction today?"],
                 options:["i-b, ii-c, iii-d, iv-a","i-a, ii-b, iii-c, iv-d","i-c, ii-b, iii-a, iv-d","i-b, ii-d, iii-c, iv-a"],
                 answer:0,
                 explain:"Historical Cost = acquisition price paid (b). Current Cost = today's replacement price (c). Realisable Value = orderly sale price today (d). Present Value = discounted future cash flows (a).",
                 optionExplains:["Correct. Each principle answers a specific temporal question about the asset's value.","Wrong — Historical Cost is not about future cash flows; that is Present Value.","Wrong — Historical Cost is not the current replacement price; that is Current Cost.","Wrong — Realisable Value is not today's replacement price; that is Current Cost."]},

                {type:"assertion",diff:"VH",
                 assertion:"Any amount spent by a business automatically qualifies as Capital Expenditure because it represents an outflow of funds from the business.",
                 reason:"Capital Expenditure requires a significant outflow of cash or its equivalent.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:3,
                 explain:"BOTH are FALSE. (A) Not all spending is Capital Expenditure — only spending that creates or improves a long-term asset qualifies. Routine expenses (salaries, electricity, repairs) are Revenue Expenditure. (R) Capital Expenditure does involve cash outflow, but mere outflow of cash is NOT the defining criterion; the duration and nature of benefit (whether it extends beyond one accounting period) is the deciding factor.",
                 optionExplains:["Both A and R are false — A is factually wrong; R is also misleading about the criterion.","Both are still false; whether R explains A is moot when A itself is incorrect.","A is false (not all spending is CapEx); R is also false (cash outflow is not the defining test).","Correct. A is false (only long-term benefit spending is CapEx); R is false (cash outflow is not the criterion)."]},

                {type:"case",diff:"VH",
                 passage:"XYZ Ltd. shows its factory land at ₹15,00,000 in its 2024 Balance Sheet. The land was purchased in 1982. Today's market value of the land is ₹3,20,00,000. The Finance Director insists the land must stay at ₹15,00,000.",
                 q:"Which option BEST explains both WHY the Finance Director is correct AND what limitation this reveals?",
                 options:["He is wrong — land should always be revalued to market price to show the true picture","He is correct under Historical Cost principle (objective, verifiable) but the limitation is that the Balance Sheet understates the land's real economic value due to rising prices","He is correct under the Going Concern assumption, which requires assets to be shown at cost","He is correct under the Money Measurement concept, which prevents recording non-monetary items"],
                 answer:1,
                 explain:"Historical Cost records assets at the original acquisition price — objective and verifiable from an actual transaction. The Finance Director is correct per this principle. The limitation is that during inflation or rising markets, historical cost significantly understates the true economic value of assets, making the Balance Sheet misleading to users who want current valuations. This is one of the chief criticisms of traditional accounting.",
                 optionExplains:["He is not wrong — Historical Cost is the accepted principle. Mandatory revaluation is not required under traditional accounting.","Correct. Historical Cost is correct in principle; the limitation is that long-held assets are massively understated over time.","Going Concern justifies treating the business as continuing, not the specific valuation of assets at cost.","Money Measurement prevents recording things without monetary value — unrelated to the valuation basis for land."]},

                {type:"assertion",diff:"VH",
                 assertion:"Accounting Standards issued by ICAI take precedence over the provisions of the Companies Act, 2013 when they conflict, because ICAI is the authoritative body on accounting matters in India.",
                 reason:"ICAI is a statutory body constituted under the Chartered Accountants Act, 1949 and is empowered to issue Accounting Standards.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:2,
                 explain:"R is TRUE — ICAI is indeed a statutory body under the CA Act, 1949 and does issue Accounting Standards. A is FALSE — Accounting Standards can NEVER override the statute. Standards must operate within the ambit of applicable law. Where an AS and the Companies Act conflict, the law prevails. Being a statutory body does not empower ICAI to override Parliament's legislation.",
                 optionExplains:["A is false — AS cannot override the Companies Act, regardless of ICAI's authority.","A is still false — the 'does not explain' option requires A to be true.","Correct. R is true (ICAI is statutory); A is false (AS cannot override the statute ever).","R is true — ICAI is statutory and does issue standards."]}

              ]},
            {label:"Set 3 — Foundation",  mix:"13/9/8",  questions:[

                /* ── 13 EASY ── */
                {type:"standard",diff:"E",
                 q:"Debtors in a business are classified as:",
                 options:["A long-term liability","A current asset","A fixed asset","An intangible asset"],
                 answer:1,
                 explain:"Debtors (trade receivables) are amounts owed to the business by customers who bought goods on credit. They are expected to be collected within the operating cycle — a current asset.",
                 optionExplains:["Liabilities are amounts the business OWES to others — debtors are what others owe TO the business.","Correct. Debtors are a current asset — receivable within one year.","Fixed assets are long-term assets used in operations — debtors are short-term receivables.","Intangible assets have no physical form (goodwill, patents) — debtors are receivables, not intangibles."]},

                {type:"standard",diff:"E",
                 q:"If Total Assets = ₹12,00,000 and Total Liabilities = ₹4,50,000, the Capital is:",
                 options:["₹16,50,000","₹7,50,000","₹4,50,000","₹12,00,000"],
                 answer:1,
                 explain:"Using A = C + L: Capital = Assets − Liabilities = ₹12,00,000 − ₹4,50,000 = ₹7,50,000. Capital represents the owner's net stake — what the business would owe back to the owner after all outsider obligations are settled.",
                 optionExplains:["₹16,50,000 is Assets + Liabilities — the equation works as A = C + L, not C = A + L.","Correct. C = A − L = ₹12,00,000 − ₹4,50,000 = ₹7,50,000.","₹4,50,000 is Total Liabilities, not Capital.","₹12,00,000 is Total Assets — Capital is less, after deducting external liabilities."]},

                {type:"standard",diff:"E",
                 q:"Which of the following is an example of a WASTING asset?",
                 options:["Goodwill","Patents","Coal mines","Preliminary expenses"],
                 answer:2,
                 explain:"Wasting (depleting) assets are natural resources that physically diminish as they are used — coal mines, quarries, oil wells. Goodwill and patents are intangible; preliminary expenses are fictitious assets.",
                 optionExplains:["Goodwill is an intangible fixed asset — no physical depletion.","Patents are intangible fixed assets — they expire but do not physically diminish.","Correct. Coal mines are a wasting asset — the coal is physically used up as it is extracted.","Preliminary expenses are fictitious assets — deferred losses, not natural resources."]},

                {type:"standard",diff:"E",
                 q:"Cash Account is classified as:",
                 options:["Nominal Account","Personal Account","Real Account (Tangible)","Real Account (Intangible)"],
                 answer:2,
                 explain:"Real accounts cover both tangible assets (physical existence — land, cash, machinery) and intangible assets (no physical form — goodwill, patents). Cash is physical — Real Account (Tangible). Golden Rule: Debit what comes in, Credit what goes out.",
                 optionExplains:["Nominal accounts are for expenses, losses, incomes and gains — cash is an asset.","Personal accounts relate to persons, firms and institutions — cash is a thing, not a person.","Correct. Cash is a tangible asset — a Real Account.","Intangible Real Accounts have no physical form (goodwill) — Cash has physical form."]},

                {type:"standard",diff:"E",
                 q:"Under the Accrual Basis of Accounting, expenses are recognised:",
                 options:["Only when cash is paid","When they are incurred, regardless of cash payment","At the end of the year, lump sum","Only when the creditor issues a demand notice"],
                 answer:1,
                 explain:"Accrual Basis records expenses when they are incurred (the resource is used or benefit consumed), regardless of whether cash has been paid. This creates Outstanding Expenses (incurred but not yet paid) and Prepaid Expenses (paid but not yet incurred).",
                 optionExplains:["Recording only on cash payment is the Cash Basis, not Accrual.","Correct. Accrual Basis recognises expenses when incurred — matching costs to the period they relate to.","Lump-sum year-end recognition distorts the periodic matching of costs to revenues.","A creditor's notice is relevant to legal liability, not accounting recognition under Accrual Basis."]},

                {type:"standard",diff:"E",
                 q:"Inventories (stock) are valued at 'lower of cost or net realisable value'. This follows which principle?",
                 options:["Historical Cost Principle","Present Value Principle","Net Realisable Value (Realisable Value Principle) combined with Conservatism","Current Cost Principle"],
                 answer:2,
                 explain:"Valuing stock at NRV when it falls below cost applies the Realisable Value principle — the amount obtainable in an orderly sale. Combined with Conservatism, losses (stock value falls below cost) are recognised immediately but gains (stock worth more than cost) are not.",
                 optionExplains:["Historical Cost would value stock at purchase cost always — it does not explain the NRV comparison.","Present Value involves discounting future cash flows — not applicable to routine inventory valuation.","Correct. NRV = orderly sale price; Conservatism = recognise losses early, not gains. Together they produce the 'lower of cost or NRV' rule.","Current Cost = today's replacement price — used for machinery analysis, not stock valuation under GAAP."]},

                {type:"standard",diff:"E",
                 q:"CGST (Central GST) is levied by and paid to:",
                 options:["The State Government","The Local Body (Municipal Corporation)","The Central Government","Both Central and State Governments in equal share"],
                 answer:2,
                 explain:"CGST is the Central Government's component of GST on intra-state transactions. It is levied and collected by the Central Government, alongside SGST which is levied by the respective State Government.",
                 optionExplains:["The State Government's component is SGST, not CGST.","Local bodies do not levy GST — GST is a Central/State tax.","Correct. CGST goes entirely to the Central Government.","CGST and SGST are separate levies; CGST goes only to the Centre, SGST only to the State."]},

                {type:"standard",diff:"E",
                 q:"Which of the following is a NON-CURRENT (long-term) liability?",
                 options:["Trade Creditors","Outstanding Salaries","Bank Overdraft","Debentures (8-year maturity)"],
                 answer:3,
                 explain:"Debentures are debt instruments issued for a fixed term exceeding one year — a non-current liability. Trade creditors, outstanding salaries and bank overdrafts are all current liabilities payable within one year.",
                 optionExplains:["Trade creditors are amounts owed for goods purchased on credit — a current liability (< 1 year).","Outstanding salaries are expenses incurred but not yet paid — a current liability.","Bank overdraft is repayable on demand — a current liability.","Correct. Debentures with 8-year maturity are repayable after more than one year — non-current liability."]},

                {type:"standard",diff:"E",
                 q:"Under which accounting concept is the owner's personal home loan NOT recorded in the business books?",
                 options:["Going Concern Concept","Matching Concept","Business Entity Concept","Objectivity Concept"],
                 answer:2,
                 explain:"The Business Entity Concept treats the business as completely separate from its owner. Only business transactions are recorded. The owner's personal transactions — including home loans, family expenses and personal investments — are kept out of the business accounts.",
                 optionExplains:["Going Concern assumes the business will continue — it is not about separating owner and business finances.","Matching relates to recognising expenses in the same period as the revenue they generate.","Correct. Business Entity Concept — the business is separate from its owner; personal transactions stay out.","Objectivity relates to evidence-based recording of transactions."]},

                {type:"standard",diff:"E",
                 q:"Under the Historical Cost principle, which value appears in the Balance Sheet for machinery purchased 10 years ago?",
                 options:["Current market value of the machinery","Amount the machinery could be sold for today","Original purchase price (less accumulated depreciation)","Present value of future earnings from the machinery"],
                 answer:2,
                 explain:"Under Historical Cost, assets appear at cost less any accumulated depreciation — not at current market prices. The original purchase price is the basis, adjusted only for systematic depreciation over the asset's useful life.",
                 optionExplains:["Current market value = Current Cost basis — a different valuation principle.","Amount obtainable on sale = Realisable Value basis — a different principle.","Correct. Historical Cost = original price less accumulated depreciation — the traditional accounting treatment.","Discounted future earnings = Present Value basis — used for specific purposes, not routine Balance Sheet preparation."]},

                {type:"standard",diff:"E",
                 q:"Accounting Standards (AS) help to:",
                 options:["Eliminate the need for an external audit","Ensure all businesses earn equal profits","Eliminate non-comparability of financial statements across different enterprises","Remove all personal judgement from accounting"],
                 answer:2,
                 explain:"The primary objective of AS is to eliminate non-comparability — ensuring financial statements of different enterprises can be meaningfully compared by standardising recognition, measurement, presentation and disclosure rules.",
                 optionExplains:["AS do not affect the need for audit — auditing is a separate statutory requirement.","Profits depend on business performance, not on standardised accounting rules.","Correct. AS standardise policies so different companies' statements are comparable.","AS reduce (not eliminate) variations in accounting treatment; personal judgement still applies in many areas."]},

                {type:"standard",diff:"E",
                 q:"A 'Voucher' in accounting is:",
                 options:["A discount given to a customer","A certificate issued to shareholders","Written documentary evidence supporting a business transaction","An oral instruction to record an entry"],
                 answer:2,
                 explain:"A voucher is the source document that provides written evidence for every business transaction — it is the basis on which journal entries are made. Examples include invoices, receipts, cheque counterfoils and debit/credit notes.",
                 optionExplains:["A discount is a reduction in price — not a voucher.","Certificates to shareholders (like share certificates) are not accounting vouchers.","Correct. A voucher is written evidence for a transaction — the source document for bookkeeping entries.","Oral instructions are not vouchers — accounting requires written, verifiable documentary evidence."]},

                {type:"standard",diff:"E",
                 q:"The four generally accepted measurement bases (Valuation Principles) are:",
                 options:["Historical Cost, Book Value, Market Value and Fair Value","Historical Cost, Current Cost, Realisable Value and Present Value","Cost Price, Selling Price, Market Price and Future Price","Nominal Value, Book Value, Realisable Value and Present Value"],
                 answer:1,
                 explain:"The four GAAP measurement bases are Historical Cost (acquisition price), Current Cost (today's replacement price), Realisable Value (orderly sale price today) and Present Value (discounted future cash flows).",
                 optionExplains:["Book Value and Fair Value are colloquial terms — not the four formally recognised measurement bases.","Correct. These are the four GAAP-recognised valuation principles.","Cost price/selling price are transaction prices, not formal measurement bases.","Nominal Value is face value of financial instruments — not a measurement base for assets generally."]},

                /* ── 9 MODERATE ── */
                {type:"standard",diff:"M",
                 q:"Rajan starts a business with ₹4,00,000 cash. He introduces additional capital of ₹50,000 during the year, withdraws ₹20,000 as drawings, and the business earns a net profit of ₹75,000. What is his Closing Capital?",
                 options:["₹4,75,000","₹5,05,000","₹4,30,000","₹4,55,000"],
                 answer:1,
                 explain:"Closing Capital = Opening Capital + Additional Capital + Net Profit − Drawings = ₹4,00,000 + ₹50,000 + ₹75,000 − ₹20,000 = ₹5,05,000.",
                 optionExplains:["₹4,75,000 = ₹4,00,000 + ₹75,000 — forgets to add Additional Capital and deduct Drawings.","Correct. ₹4,00,000 + ₹50,000 + ₹75,000 − ₹20,000 = ₹5,05,000.","₹4,30,000 = ₹4,00,000 + ₹50,000 − ₹20,000 — forgets Net Profit.","₹4,55,000 is an incorrect combination."]},

                {type:"standard",diff:"M",
                 q:"A company pays annual insurance premium of ₹1,44,000 on 1 October 2023 for the period October 2023 to September 2024. How much is shown as Prepaid Insurance in the Balance Sheet on 31 March 2024?",
                 options:["₹1,44,000","₹72,000","₹48,000","₹24,000"],
                 answer:1,
                 explain:"The premium covers 12 months (Oct 2023 – Sep 2024). By 31 March 2024, 6 months have been consumed (Oct 2023 – Mar 2024). The remaining 6 months (Apr – Sep 2024) are prepaid. Prepaid = (6/12) × ₹1,44,000 = ₹72,000.",
                 optionExplains:["₹1,44,000 is the full premium — the entire amount cannot be prepaid when half the period has passed.","Correct. 6 months remaining (Apr–Sep 2024) at ₹12,000/month = ₹72,000 prepaid.","₹48,000 = 4 months — incorrect count of remaining months.","₹24,000 = 2 months — too few months remaining."]},

                {type:"standard",diff:"M",
                 q:"A firm's assets include: Land ₹5,00,000; Machinery ₹4,00,000; Stock ₹1,50,000; Debtors ₹60,000; Cash ₹40,000. Liabilities: Bank Loan (5-yr) ₹2,50,000; Creditors ₹80,000; Overdraft ₹20,000. What is the Capital?",
                 options:["₹8,00,000","₹8,50,000","₹7,50,000","₹9,00,000"],
                 answer:0,
                 explain:"Total Assets = ₹5,00,000+₹4,00,000+₹1,50,000+₹60,000+₹40,000 = ₹11,50,000. Total Liabilities = ₹2,50,000+₹80,000+₹20,000 = ₹3,50,000. Capital = ₹11,50,000 − ₹3,50,000 = ₹8,00,000.",
                 optionExplains:["Correct. Assets ₹11,50,000 − Liabilities ₹3,50,000 = Capital ₹8,00,000.","₹8,50,000 — arithmetic error in one of the components.","₹7,50,000 — incorrect calculation.","₹9,00,000 — incorrect; may omit a liability."]},

                {type:"standard",diff:"M",
                 q:"Which of the following should be classified as CAPITAL EXPENDITURE?",
                 options:["Annual repair of a machine after routine wear","Monthly electricity bill of the factory","Cost of purchasing and installing a new air-conditioning system in the office","Salary paid to the factory supervisor"],
                 answer:2,
                 explain:"Installing a new air-conditioning system creates a new fixed asset (it adds a facility that will be used for more than one year) — Capital Expenditure. The others are recurring operating costs charged to the current period — Revenue Expenditure.",
                 optionExplains:["Routine machine repair maintains existing capacity — Revenue Expenditure.","Electricity is a recurring operating cost for the current period — Revenue Expenditure.","Correct. A new AC system is a new long-term asset — Capital Expenditure.","Supervisor salary is a recurring cost — Revenue Expenditure."]},

                {type:"assertion",diff:"M",
                 assertion:"A balanced Trial Balance (where total debits = total credits) guarantees that all transactions have been recorded completely and correctly.",
                 reason:"Under the Double Entry System, every transaction creates an equal debit and credit entry.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:2,
                 explain:"R is TRUE — Double Entry does ensure equal debits and credits per transaction. A is FALSE — a balanced Trial Balance does NOT guarantee complete correctness. It cannot detect errors of omission (whole transaction left out), errors of principle (wrong category), compensating errors or errors of commission where debit equals credit but in wrong accounts.",
                 optionExplains:["A is false; a balanced TB does not prove absence of all error types.","A is still false.","Correct. R is true (double entry mechanism); A is false (TB misses several error types).","R is true — Double Entry does create equal debits and credits."]},

                {type:"standard",diff:"M",
                 q:"GST is described as 'destination-based'. This means:",
                 options:["The tax is levied where goods are manufactured or services are provided","Tax revenue flows to the state where goods or services are consumed","Only the final consumer pays GST; intermediate traders pay nothing","The tax rate varies based on the destination of the goods"],
                 answer:1,
                 explain:"Destination-based means the tax revenue goes to the state where goods or services are ultimately CONSUMED, not where they are produced. This corrects the old origin-based system (like CST) where producing states benefited more than consuming states.",
                 optionExplains:["Under GST, it is the CONSUMING state that receives revenue — the producing state does not.","Correct. GST revenue flows to the destination (consuming) state — not the origin (producing) state.","ITC means traders pay net tax only on value added; it is not that they pay nothing.","GST rates are set by the GST Council based on product category, not destination."]},

                {type:"standard",diff:"M",
                 q:"Accounting Standards have 'restricted scope' as a limitation. This means:",
                 options:["They apply only to listed companies","They cover only financial accounting, not cost or management accounting","They cannot override applicable laws and statutes","They are valid only for five years before needing renewal"],
                 answer:2,
                 explain:"'Restricted scope' means AS must operate within the framework of prevailing laws. They cannot override the Companies Act or any other statute. Where an AS and a law conflict, the law prevails and the AS must comply.",
                 optionExplains:["AS applicability is not limited to listed companies — ICAI's AS apply to non-corporate entities too.","AS do not explicitly restrict themselves to financial accounting; they address specific transaction types.","Correct. AS cannot override statutes — this is the 'restricted scope' limitation.","AS do not have a fixed validity period; they are revised when needed."]},

                {type:"matching",diff:"M",
                 q:"Match the GST type to the transaction it correctly applies to:",
                 columnA:["(i) CGST","(ii) SGST","(iii) IGST"],
                 columnB:["(a) Sale from a Delhi trader to a trader in Tamil Nadu","(b) Intra-state sale within Maharashtra — Central Government's share","(c) Intra-state sale within Maharashtra — State Government's share"],
                 options:["i-a, ii-b, iii-c","i-b, ii-c, iii-a","i-c, ii-a, iii-b","i-b, ii-a, iii-c"],
                 answer:1,
                 explain:"CGST is the Central Government's levy on intra-state sales (b). SGST is the State's levy on intra-state sales (c). IGST applies to inter-state transactions — Delhi to Tamil Nadu (a).",
                 optionExplains:["Wrong — IGST applies to inter-state (Delhi to TN), not CGST alone.","Correct. CGST = Central intra-state share (b); SGST = State intra-state share (c); IGST = inter-state (a).","Wrong — CGST is not the State's share; SGST is.","Wrong pairing of SGST with inter-state."]},

                {type:"standard",diff:"M",
                 q:"At a discount rate of 25%, what is the approximate Present Value of ₹1,00,000 receivable in exactly one year?",
                 options:["₹75,000","₹1,25,000","₹80,000","₹1,00,000"],
                 answer:2,
                 explain:"PV = Future Amount ÷ (1 + discount rate)^n = ₹1,00,000 ÷ (1.25)^1 = ₹1,00,000 ÷ 1.25 = ₹80,000. This demonstrates the time value of money — future rupees are worth less than the same number of present rupees.",
                 optionExplains:["₹75,000 would correspond to a 33% discount rate — not 25%.","₹1,25,000 is the future value if ₹1,00,000 were invested at 25% — not the present value.","Correct. PV = ₹1,00,000 ÷ 1.25 = ₹80,000.","₹1,00,000 implies no time value of money — that is only true with a 0% discount rate."]},

                /* ── 8 VERY HARD ── */
                {type:"case",diff:"VH",
                 passage:"Kaveri Traders for the year ending 31 March 2024: Sales made ₹3,50,000 (₹2,80,000 received; ₹70,000 from debtors). Purchases made ₹2,00,000 (₹1,60,000 paid; ₹40,000 outstanding to creditors). Salaries incurred and fully paid ₹40,000. Rent incurred ₹24,000 (₹18,000 paid; ₹6,000 outstanding).",
                 q:"Which option correctly shows Revenue, Total Expenses and Profit under BOTH bases for the year?",
                 options:["Cash Basis: Rev ₹2,80,000 / Exp ₹2,18,000 / Profit ₹62,000 ; Accrual: Rev ₹3,50,000 / Exp ₹2,64,000 / Profit ₹86,000","Cash Basis: Rev ₹3,50,000 / Exp ₹2,64,000 / Profit ₹86,000 ; Accrual: Rev ₹2,80,000 / Exp ₹2,18,000 / Profit ₹62,000","Cash Basis: Rev ₹2,80,000 / Exp ₹2,64,000 ; Accrual: Rev ₹3,50,000 / Exp ₹2,18,000","Cash Basis: Rev ₹2,80,000 / Exp ₹2,18,000 / Profit ₹62,000 ; Accrual: Rev ₹3,50,000 / Exp ₹2,64,000 / Profit ₹86,000"],
                 answer:3,
                 explain:"Cash Basis: Revenue = ₹2,80,000 (received); Expenses = ₹1,60,000 + ₹40,000 + ₹18,000 = ₹2,18,000 (paid); Profit = ₹62,000. Accrual Basis: Revenue = ₹3,50,000 (earned); Expenses = ₹2,00,000 + ₹40,000 + ₹24,000 = ₹2,64,000 (incurred); Profit = ₹86,000.",
                 optionExplains:["Option A figures are correct but the labels are switched — Cash gives ₹62,000; Accrual gives ₹86,000.","This reverses the bases — Accrual gives the higher revenue figure, not Cash.","Option C mixes the expense figures across bases — incorrect.","Correct. Cash Basis: ₹2,80,000 − ₹2,18,000 = ₹62,000. Accrual: ₹3,50,000 − ₹2,64,000 = ₹86,000."]},

                {type:"assertion",diff:"VH",
                 assertion:"Preliminary expenses incurred in floating a company are classified as Fictitious Assets and shown on the assets side of the Balance Sheet.",
                 reason:"Fictitious assets represent losses or deferred charges that cannot be written off in a single period and are written off gradually over subsequent years.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:0,
                 explain:"BOTH are TRUE and R explains A. Preliminary expenses (and similar items like discount on issue of shares) cannot be absorbed in one period — they are carried forward as Fictitious Assets and written off gradually. They appear on the assets side of the Balance Sheet even though they are not genuine assets — they represent losses awaiting write-off.",
                 optionExplains:["Correct. Both statements are accurate and R provides the reason why preliminary expenses appear as Fictitious Assets.","R does correctly explain A — the deferred nature is exactly why they appear as fictitious assets.","A is true — preliminary expenses are indeed classified as Fictitious Assets.","Both are true — the classification and the explanation are both correct."]},

                {type:"assertion",diff:"VH",
                 assertion:"The Accrual Basis of Accounting will always produce a higher profit figure than the Cash Basis for the same period.",
                 reason:"Under Accrual Basis, all revenues earned and expenses incurred in a period are recognised, including amounts not yet received or paid in cash.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:2,
                 explain:"R is TRUE — Accrual Basis does recognise all revenues earned and expenses incurred. A is FALSE — Accrual does NOT always produce higher profit. If there are significant accrued expenses (incurred but unpaid), accrual profit is LOWER than cash profit. Conversely, if there are large credit sales (earned but cash not received), accrual profit is higher. The direction depends on whether unrecognised income or unrecognised expenses dominate.",
                 optionExplains:["A is false; accrual profit is not always higher — it depends on the mix of credit transactions.","A is still false.","Correct. R is true (accrual recognises all earned/incurred items); A is false (it is not always higher).","R is true — Accrual does recognise all items when earned/incurred."]},

                {type:"case",diff:"VH",
                 passage:"Classify each of the following transactions as Capital Expenditure (CapEx), Revenue Expenditure (RevEx), Capital Receipt (CapRec) or Revenue Receipt (RevRec): (i) Old furniture sold for ₹8,000 (book value ₹10,000). (ii) Wages paid to workers for erecting a new machine ₹5,000. (iii) Commission received from a regular agency arrangement ₹12,000. (iv) Insurance premium paid ₹18,000 for one year.",
                 q:"Which option correctly classifies ALL FOUR items?",
                 options:["(i) RevRec ; (ii) RevEx ; (iii) RevRec ; (iv) CapEx","(i) CapRec ; (ii) CapEx ; (iii) RevRec ; (iv) RevEx","(i) RevRec ; (ii) CapEx ; (iii) CapRec ; (iv) RevEx","(i) CapRec ; (ii) RevEx ; (iii) RevRec ; (iv) CapEx"],
                 answer:1,
                 explain:"(i) Sale of old furniture = Capital Receipt — proceeds from disposal of a fixed asset (not from regular trading). (ii) Wages to erect a new machine = Capital Expenditure — the wages form part of the cost of bringing the new asset to its usable state (they capitalise the asset, not expense it). (iii) Regular commission income = Revenue Receipt — recurring income from normal operations. (iv) Annual insurance = Revenue Expenditure — a recurring operating cost of the current period.",
                 optionExplains:["Wrong — furniture sale is a Capital Receipt (fixed asset disposal), not Revenue Receipt; insurance is Revenue Expenditure.","Correct. (i) CapRec — fixed asset disposal; (ii) CapEx — erection costs capitalised; (iii) RevRec — regular income; (iv) RevEx — periodic cost.","Wrong — commission from regular operations is Revenue Receipt, not Capital Receipt.","Wrong — insurance is Revenue Expenditure, not Capital Expenditure."]},

                {type:"assertion",diff:"VH",
                 assertion:"The Input Tax Credit (ITC) mechanism under GST eliminates the cascading effect (tax on tax) that existed under the previous indirect tax regime.",
                 reason:"Under ITC, each registered dealer at every stage of the supply chain can claim credit for the GST paid at the previous stage and pays net tax only on the value added by that stage.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:0,
                 explain:"BOTH are TRUE and R correctly explains A. Before GST, manufacturers paid excise on their full output price (including materials already taxed by excise); wholesalers paid VAT on prices including excise; retailers paid VAT on prices including excise+previous VAT — this 'tax on tax' inflated prices. GST's ITC breaks this chain: each stage claims back the GST already paid upstream, so each stage's net tax is only on its own value addition.",
                 optionExplains:["Correct. Both statements are true and the ITC mechanism is precisely the reason cascading is eliminated.","R does explain A — the ITC credit chain is the mechanism that prevents tax-on-tax.","A is true — ITC does eliminate cascading.","Both are true — the statements are factually correct."]},

                {type:"matching",diff:"VH",
                 q:"Match each business situation to the accounting concept or principle it illustrates:",
                 columnA:["(i) The owner's personal mortgage loan is NOT recorded in the business books","(ii) Unpaid salaries of ₹6,000 are shown as an expense and liability in March accounts","(iii) A machine at original cost ₹10,00,000 stays at that figure despite current market value of ₹25,00,000","(iv) Closing stock is valued at ₹30,000 (cost) rather than ₹38,000 (selling price)"],
                 columnB:["(a) Accrual / Matching Concept","(b) Historical Cost Principle","(c) Business Entity Concept","(d) Conservatism (Prudence) Concept"],
                 options:["i-c, ii-a, iii-b, iv-d","i-a, ii-c, iii-d, iv-b","i-d, ii-a, iii-c, iv-b","i-c, ii-b, iii-a, iv-d"],
                 answer:0,
                 explain:"(i) Personal mortgage excluded from business books = Business Entity Concept (c) — business and owner are separate. (ii) Unpaid salaries recognised as expense = Accrual / Matching Concept (a) — expenses recognised when incurred. (iii) Machine stays at original cost despite market rise = Historical Cost Principle (b) — record at acquisition price. (iv) Stock at cost not selling price = Conservatism / Prudence (d) — anticipate no unrealised profit.",
                 optionExplains:["Correct. Entity (i-c), Accrual (ii-a), Historical Cost (iii-b), Conservatism (iv-d).","Wrong — (i) is not Accrual; (ii) is not Entity.","Wrong — (i) is not Conservatism; (iii) is not Entity.","Wrong — (iii) is not Accrual; (iv) is not Historical Cost."]},

                {type:"assertion",diff:"VH",
                 assertion:"The Accounting Standards prescribed by ICAI apply to ALL business entities in India — whether companies, partnerships or sole traders.",
                 reason:"India has three sets of accounting standards — Ind AS, AS under the Companies (Accounting Standards) Rules 2021, and AS prescribed by ICAI — each applicable to a different category of entity.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:2,
                 explain:"R is TRUE — India does have three distinct sets of standards for different entities. A is FALSE — ICAI's AS (prescribed by the Institute) apply specifically to NON-CORPORATE entities such as partnerships, sole traders, trusts and societies. Listed companies and large companies follow Ind AS; smaller companies follow AS under Companies Rules 2021. R actually explains why A is false — the three-framework system means no single set covers all entities.",
                 optionExplains:["A is false — ICAI's AS are for non-corporate entities, not all entities.","A is still false.","Correct. R is true (three-framework structure); A is false (ICAI's AS apply only to non-corporate entities).","R is true — the three-framework description is accurate."]},

                {type:"case",diff:"VH",
                 passage:"Meera & Co.'s Balance Sheet as on 31 March 2024 shows Total Assets ₹20,00,000 and Total Liabilities (excluding Capital) ₹8,00,000. During the year, Meera introduced additional capital of ₹1,50,000, suffered a net loss of ₹2,00,000 and withdrew ₹1,00,000 as drawings.",
                 q:"What was Meera's Opening Capital at the start of the year (1 April 2023)?",
                 options:["₹14,50,000","₹12,00,000","₹13,50,000","₹11,50,000"],
                 answer:0,
                 explain:"Closing Capital = Total Assets − Total Liabilities = ₹20,00,000 − ₹8,00,000 = ₹12,00,000. Using: Closing Capital = Opening Capital + Additional Capital − Net Loss − Drawings → ₹12,00,000 = Opening Capital + ₹1,50,000 − ₹2,00,000 − ₹1,00,000 → ₹12,00,000 = Opening Capital − ₹1,50,000 → Opening Capital = ₹13,50,000.",
                 optionExplains:["₹14,50,000 — arithmetic error; recalculate: 12L + 2L + 1L − 1.5L = 13.5L.","₹12,00,000 is the CLOSING capital, not opening.","Correct. Opening = Closing − Additional + Loss + Drawings = ₹12,00,000 − ₹1,50,000 + ₹2,00,000 + ₹1,00,000 = ₹13,50,000.","₹11,50,000 — incorrect calculation."]}

              ]},
            {label:"Set 4",  mix:"13/9/8",  questions:[]},
            {label:"Set 5",  mix:"12/9/9",  questions:[]},
            {label:"Set 6",  mix:"12/9/9",  questions:[]},
            {label:"Set 7",  mix:"11/9/10", questions:[]},
            {label:"Set 8",  mix:"10/9/11", questions:[]},
            {label:"Set 9",  mix:"10/9/11", questions:[]},
            {label:"Set 10", mix:"9/9/12",  questions:[]}
          ]
        }]
      },
      {
        id:"acc-u2", title:"Fundamental Accounting Process – I", marks:16,
        syllabus:[
          "Vouchers and Transactions",
          "Fundamental Accounting Equation",
          "Rules of Debit and Credit",
          "Books of Original Entry (Journal)",
          "Special Purpose Books",
          "Rectification of Errors (before preparation of Trial Balance)"
        ],
        topics:[]
      },
      {
        id:"acc-u3", title:"Reserves & Provisions", marks:6,
        syllabus:[
          "Provisions and Reserves — meaning and need",
          "Difference between Provisions and Reserves",
          "Types of Reserves (General, Specific, Capital, Revenue, Secret)"
        ],
        topics:[]
      },
      {
        id:"acc-u4", title:"Bills of Exchange", marks:6,
        syllabus:[
          "Bills of Exchange and Promissory Note — meaning and features",
          "Important Terms (due date, days of grace, discounting, endorsement, dishonour)",
          "Accounting Treatment of Bills of Exchange up to Dishonour of Bill"
        ],
        topics:[]
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     COSTING & TAXATION
     ══════════════════════════════════════════════════════════════════════════ */
  costing:{
    name:"Costing & Taxation", code:"C&T", accent:"ready",
    units:[

      /* ── UNIT 1 ──────────────────────────────────────────────── */
      {id:"ct-u1", title:"Introduction to Cost Accounting", marks:5,
        syllabus:["Meaning, objectives and importance of Cost Accounting","Difference between Financial Accounting and Cost Accounting","Cost concepts — cost unit, cost centre"],
        topics:[{
          learn:[

            {topicStart:"meaning-objectives", title:"Meaning, Objectives & Importance", icon:"📊",
             desc:"Definitions of Cost, Costing and Cost Accounting; seven objectives; key features; advantages; limitations; and the steps for installing a costing system."},

            {h:"Meaning, Objectives and Importance of Cost Accounting",
             kicker:"Unit 1 · Topic 1",
             html:`
              <p>Cost Accounting emerged as manufacturing grew too complex for Financial Accounting alone to guide management decisions. Financial Accounting tells you <i>whether</i> you made a profit; Cost Accounting tells you <i>why</i> — and what you can do about it. Every production decision — what to make, how much to charge, where to cut waste — depends on accurate cost information.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">Core Definitions</h3>
              <div style="display:grid;gap:10px;margin-bottom:20px">
                <div style="background:#e3eee6;border-left:4px solid var(--green-deep);padding:13px 16px;border-radius:8px">
                  <b style="color:var(--green-deep)">Cost</b> — The amount of expenditure (actual or notional) incurred on, or attributable to, a given thing or activity. It is the monetary measure of resources consumed to achieve a specific objective — producing a unit of output, running a department or delivering a service.
                </div>
                <div style="background:#f8f0db;border-left:4px solid #b6862c;padding:13px 16px;border-radius:8px">
                  <b style="color:#8a6420">Costing</b> — The technique and process of <i>ascertaining costs</i>. It involves the application of accounting and costing principles, methods and techniques to determine the cost of a product, job, service or process. Costing is the <i>method</i>; Cost Accounting is the broader <i>system</i>.
                </div>
                <div style="background:var(--green-deep);padding:13px 16px;border-radius:8px;color:#f4efe3">
                  <b>Cost Accounting</b> — "The process of accounting for cost from the point at which expenditure is incurred or committed to the establishment of its ultimate relationship with cost centres and cost units." <span style="opacity:.8;font-size:13px">— CIMA (Chartered Institute of Management Accountants)</span><br>
                  <span style="font-size:13px;opacity:.85;margin-top:6px;display:block">In practice: a specialised branch of accounting that records, classifies, analyses and interprets cost information to enable management to control costs, fix prices, measure efficiency and make informed decisions.</span>
                </div>
              </div>

              <svg viewBox="0 0 700 108" xmlns="http://www.w3.org/2000/svg" style="width:100%;margin:4px 0 20px" font-family="IBM Plex Sans,sans-serif">
                <rect x="10" y="10" width="160" height="88" rx="9" fill="#e3eee6" stroke="#234f3b" stroke-width="1.5"/>
                <text x="90" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#234f3b">COST</text>
                <text x="90" y="56" text-anchor="middle" font-size="10" fill="#3c4742">Money value of</text>
                <text x="90" y="71" text-anchor="middle" font-size="10" fill="#3c4742">resources consumed</text>
                <line x1="172" y1="54" x2="185" y2="54" stroke="#b6862c" stroke-width="2"/>
                <polygon points="185,50 194,54 185,58" fill="#b6862c"/>
                <rect x="196" y="10" width="160" height="88" rx="9" fill="#f8f0db" stroke="#b6862c" stroke-width="1.5"/>
                <text x="276" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#8a6420">COSTING</text>
                <text x="276" y="56" text-anchor="middle" font-size="10" fill="#3c4742">Technique of</text>
                <text x="276" y="71" text-anchor="middle" font-size="10" fill="#3c4742">ascertaining costs</text>
                <line x1="358" y1="54" x2="371" y2="54" stroke="#b6862c" stroke-width="2"/>
                <polygon points="371,50 380,54 371,58" fill="#b6862c"/>
                <rect x="382" y="4" width="310" height="100" rx="9" fill="#234f3b"/>
                <text x="537" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#f4efe3">COST ACCOUNTING</text>
                <text x="537" y="48" text-anchor="middle" font-size="10" fill="#e3eee6">Full system: recording, classifying,</text>
                <text x="537" y="63" text-anchor="middle" font-size="10" fill="#e3eee6">analysing and interpreting cost data</text>
                <text x="537" y="78" text-anchor="middle" font-size="10" fill="#e3eee6">for management decisions</text>
              </svg>

              <h3 style="color:var(--green-deep);margin:0 0 12px">Objectives of Cost Accounting</h3>
              <table class="cmp">
                <tr><th>#</th><th>Objective</th><th>What it enables management to do</th></tr>
                <tr><td><b>1</b></td><td><b>Ascertainment of Cost</b></td><td>Calculate the total cost and cost per unit of every product or service produced</td></tr>
                <tr><td><b>2</b></td><td><b>Cost Control</b></td><td>Compare actual costs against budgets or standards; investigate and act on variances</td></tr>
                <tr><td><b>3</b></td><td><b>Cost Reduction</b></td><td>Permanently lower cost per unit through better methods, materials and process improvements</td></tr>
                <tr><td><b>4</b></td><td><b>Fixation of Selling Price</b></td><td>Determine a price that covers all costs and generates the required profit margin</td></tr>
                <tr><td><b>5</b></td><td><b>Measuring Efficiency</b></td><td>Evaluate the performance of departments, machines and individual workers</td></tr>
                <tr><td><b>6</b></td><td><b>Decision Making</b></td><td>Supply data for make-or-buy, expansion, shutdown, product-mix and pricing decisions</td></tr>
                <tr><td><b>7</b></td><td><b>Inventory Valuation</b></td><td>Correctly value raw materials, work-in-progress and finished goods for the Balance Sheet</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">Features of Cost Accounting</h3>
              <ul>
                <li><b>Systematic and continuous</b> — Costs are tracked from the moment expenditure is committed through every stage of production, not just at year-end.</li>
                <li><b>Analytical in nature</b> — Breaks total cost into its components (material, labour, overhead) and studies each element separately for control purposes.</li>
                <li><b>Historical AND prospective</b> — Records actual past costs but also prepares budgets, standard costs and projections for future planning.</li>
                <li><b>Uses both monetary and non-monetary data</b> — Tracks units of output, machine hours, labour hours and kg of material alongside rupee figures.</li>
                <li><b>Primarily for internal use</b> — Designed to serve management at all levels; not intended for external stakeholders or statutory disclosure.</li>
                <li><b>Cost per unit focus</b> — Unlike Financial Accounting which reports business-wide totals, Cost Accounting computes the cost of producing one unit of output.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">Advantages of Cost Accounting</h3>
              <table class="cmp">
                <tr><th>Area</th><th>Advantage</th></tr>
                <tr><td><b>Pricing</b></td><td>Provides the cost floor for setting selling prices; essential for tendering and government contract quotations</td></tr>
                <tr><td><b>Control &amp; Efficiency</b></td><td>Identifies wasteful expenditure in materials, labour and overheads; reveals inefficient processes</td></tr>
                <tr><td><b>Decision Making</b></td><td>Supports make-or-buy choices, product-line profitability analysis and capacity expansion decisions</td></tr>
                <tr><td><b>Inventory Valuation</b></td><td>Accurately values closing stock and work-in-progress for Balance Sheet and profit calculation</td></tr>
                <tr><td><b>Budgeting</b></td><td>Provides actual cost data needed to prepare realistic future budgets and standard cost targets</td></tr>
                <tr><td><b>Wage Systems</b></td><td>Facilitates incentive wage schemes (piece rates, productivity bonuses) linked to measured output costs</td></tr>
                <tr><td><b>Checking Financial Accounts</b></td><td>Reconciliation of costing profits with financial profits helps detect errors and omissions in both systems</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">Limitations of Cost Accounting</h3>
              <ul>
                <li><b>Expensive to install and operate</b> — Requires trained staff, elaborate records, specialised forms and additional administrative expenditure.</li>
                <li><b>Lack of uniformity</b> — No single universally accepted system; different businesses adopt different methods, making inter-firm comparison difficult.</li>
                <li><b>Based on estimates</b> — Many cost elements (overheads, depreciation, pre-determined rates) rely on assumptions rather than precise figures.</li>
                <li><b>Results differ from Financial Accounts</b> — Different treatment of items like notional costs, opening/closing stock and non-cost items leads to different profit figures requiring reconciliation.</li>
                <li><b>Not suitable for all businesses</b> — Very small or service businesses may find the cost of running the system exceeds the benefit it provides.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">Steps for Installation of a Costing System</h3>
              <ul>
                <li><b>Study the organisation</b> — Understand its structure, size, products/services, production process and management information needs.</li>
                <li><b>Define objectives clearly</b> — Specify whether the system is primarily for cost control, price fixation, budgeting or all three.</li>
                <li><b>Select the appropriate costing method</b> — Choose Job Costing, Process Costing, Contract Costing, Batch Costing or another method suited to the business.</li>
                <li><b>Design cost classification and codes</b> — Create a systematic numbering system for cost elements, cost centres and cost units.</li>
                <li><b>Establish cost centres</b> — Define production cost centres (where goods are made) and service cost centres (which support production).</li>
                <li><b>Create forms and records</b> — Design material requisitions, time sheets, overhead absorption sheets, cost ledgers and cost statements.</li>
                <li><b>Train personnel</b> — Brief all relevant staff — from storekeeper to department supervisor — on the purpose, forms and procedures.</li>
                <li><b>Introduce the system gradually</b> — Pilot in one section or department first; review, refine and then extend across the organisation.</li>
              </ul>`},

            {topicStart:"fa-vs-ca", title:"Financial Accounting vs Cost Accounting", icon:"⚖️",
             desc:"Why both systems exist, who uses each, and an eleven-point comparison of their scope, purpose, legal status, data type and orientation."},

            {h:"Difference between Financial Accounting and Cost Accounting",
             kicker:"Unit 1 · Topic 2",
             html:`
              <p>Financial Accounting and Cost Accounting are complementary branches of the same discipline — but they serve fundamentally different purposes, audiences and time horizons. A manufacturing company needs <b>both</b>: Financial Accounting to report overall results to shareholders, creditors and the government; Cost Accounting to guide internal decisions about production, pricing, efficiency and control.</p>

              <svg viewBox="0 0 700 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;margin:16px 0" font-family="IBM Plex Sans,sans-serif">
                <rect x="10" y="10" width="200" height="120" rx="10" fill="#e3eee6" stroke="#234f3b" stroke-width="1.5"/>
                <text x="110" y="34" text-anchor="middle" font-size="12" font-weight="700" fill="#234f3b">FINANCIAL ACCOUNTING</text>
                <text x="110" y="52" text-anchor="middle" font-size="10" fill="#3c4742">Records ALL transactions</text>
                <text x="110" y="66" text-anchor="middle" font-size="10" fill="#3c4742">Reports: P&amp;L, Balance Sheet</text>
                <text x="110" y="80" text-anchor="middle" font-size="10" fill="#3c4742">Users: Shareholders, Banks,</text>
                <text x="110" y="93" text-anchor="middle" font-size="10" fill="#3c4742">Creditors, Tax Authorities</text>
                <text x="110" y="110" text-anchor="middle" font-size="10" fill="#234f3b" font-weight="600">→ External reporting</text>
                <rect x="250" y="50" width="200" height="40" rx="9" fill="#234f3b"/>
                <text x="350" y="67" text-anchor="middle" font-size="11" font-weight="700" fill="#f4efe3">BUSINESS</text>
                <text x="350" y="81" text-anchor="middle" font-size="10" fill="#e3eee6">Transactions &amp; Operations</text>
                <line x1="210" y1="70" x2="250" y2="70" stroke="#234f3b" stroke-width="1.5" marker-end="url(#arr)"/>
                <line x1="450" y1="70" x2="490" y2="70" stroke="#b6862c" stroke-width="1.5" marker-end="url(#arr2)"/>
                <rect x="490" y="10" width="200" height="120" rx="10" fill="#f8f0db" stroke="#b6862c" stroke-width="1.5"/>
                <text x="590" y="34" text-anchor="middle" font-size="12" font-weight="700" fill="#8a6420">COST ACCOUNTING</text>
                <text x="590" y="52" text-anchor="middle" font-size="10" fill="#3c4742">Analyses production costs</text>
                <text x="590" y="66" text-anchor="middle" font-size="10" fill="#3c4742">Reports: Cost sheets, Variances</text>
                <text x="590" y="80" text-anchor="middle" font-size="10" fill="#3c4742">Users: Management,</text>
                <text x="590" y="93" text-anchor="middle" font-size="10" fill="#3c4742">Supervisors, Decision-makers</text>
                <text x="590" y="110" text-anchor="middle" font-size="10" fill="#8a6420" font-weight="600">→ Internal reporting</text>
                <defs>
                  <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#234f3b"/></marker>
                  <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b6862c"/></marker>
                </defs>
              </svg>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">Detailed Comparison</h3>
              <table class="cmp">
                <tr><th>Basis</th><th>Financial Accounting</th><th>Cost Accounting</th></tr>
                <tr><td><b>Primary Purpose</b></td><td>Record overall financial performance; prepare Profit &amp; Loss Account and Balance Sheet</td><td>Ascertain, control and reduce costs; provide data for internal management decisions</td></tr>
                <tr><td><b>Primary Users</b></td><td>External stakeholders — shareholders, creditors, banks, government, tax authorities</td><td>Internal management — directors, department heads, supervisors and decision-makers</td></tr>
                <tr><td><b>Legal Requirement</b></td><td>Compulsory under the Companies Act 2013 for all registered companies</td><td>Voluntary; not legally mandated (though strongly advisable for manufacturing firms)</td></tr>
                <tr><td><b>Frequency</b></td><td>Typically once a year — annual accounts</td><td>Continuous and frequent — daily, weekly, monthly cost reports as required</td></tr>
                <tr><td><b>Scope of Coverage</b></td><td>All business transactions — trading, financing and investing activities of the whole entity</td><td>Production and operating activities only; focuses on the cost of goods made and sold</td></tr>
                <tr><td><b>Level of Detail</b></td><td>Aggregate — shows totals for the business as a whole; no per-unit breakdown</td><td>Granular — shows cost per unit, per department, per process, per batch or per order</td></tr>
                <tr><td><b>Stock Valuation</b></td><td>Lower of cost or net realisable value (Conservatism principle)</td><td>At cost only — direct material + direct labour + direct overheads</td></tr>
                <tr><td><b>Nature of Data</b></td><td>Monetary data only (rupee figures)</td><td>Both monetary and non-monetary (units, hours, kg, machine time)</td></tr>
                <tr><td><b>Time Orientation</b></td><td>Historical — records what happened in the past accounting period</td><td>Historical AND prospective — records past costs AND prepares budgets and standard costs for the future</td></tr>
                <tr><td><b>Statutory Audit</b></td><td>Mandatory statutory audit by a Chartered Accountant</td><td>No statutory audit requirement; internal cost audit is optional</td></tr>
                <tr><td><b>Profit Measurement</b></td><td>Overall profit or loss for the entire business entity</td><td>Profitability of individual products, jobs, departments, processes or contracts</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">The Relationship Between the Two Systems</h3>
              <p>The two systems are <b>complementary, not competing</b>. Both are essential for a complete financial picture. Their relationship is confirmed by regular <b>reconciliation</b> — any difference between the profit reported by Cost Accounting and the profit in Financial Accounts is explained by:</p>
              <ul>
                <li>Differences in opening and closing stock valuation methods</li>
                <li>Notional costs included in Cost Accounts but excluded from Financial Accounts (e.g. notional rent, notional interest)</li>
                <li>Non-cost items in Financial Accounts excluded from Cost Accounts (e.g. dividends received, interest on investments, donations)</li>
                <li>Different treatment of depreciation rates or methods</li>
              </ul>
              <p>A well-managed business reconciles both sets of figures regularly to maintain accuracy and consistency across its reporting systems.</p>`},

            {topicStart:"cost-concepts", title:"Cost Concepts — Cost Unit, Cost Centre", icon:"🏭",
             desc:"Definitions of Cost Unit and Cost Centre; industry examples of cost units; four types of cost centres; and the key distinction between the two concepts."},

            {h:"Cost Concepts — Cost Unit and Cost Centre",
             kicker:"Unit 1 · Topic 3",
             html:`
              <p>Before a costing system can function, two fundamental building blocks must be defined: <b>what</b> are you costing (the Cost Unit) and <b>where</b> are you collecting costs against (the Cost Centre). Every cost accounting system is built around these two concepts.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">Cost Unit</h3>
              <div style="background:#e3eee6;border-left:4px solid var(--green-deep);padding:13px 16px;border-radius:8px;margin-bottom:16px">
                <b style="color:var(--green-deep)">Definition:</b> A Cost Unit is a unit of product, service or time in relation to which costs are ascertained or expressed. It is the basic measure of output for which cost per unit is calculated. The choice of cost unit depends on the nature of the business and what is most practical and meaningful in that industry.
              </div>

              <table class="cmp">
                <tr><th>Industry / Business</th><th>Cost Unit Used</th></tr>
                <tr><td>Brick manufacturing</td><td>Per 1,000 bricks</td></tr>
                <tr><td>Steel / Cement / Coal</td><td>Per tonne</td></tr>
                <tr><td>Electricity generation</td><td>Per kilowatt hour (kWh)</td></tr>
                <tr><td>Hospital</td><td>Per patient day / per bed per day</td></tr>
                <tr><td>Hotel</td><td>Per room per night</td></tr>
                <tr><td>Road / Rail transport</td><td>Per passenger-kilometre or per tonne-kilometre</td></tr>
                <tr><td>Printing press</td><td>Per 1,000 impressions or per ream</td></tr>
                <tr><td>Automobile manufacturer</td><td>Per vehicle</td></tr>
                <tr><td>Textile / Weaving</td><td>Per metre of cloth</td></tr>
                <tr><td>Sugar mill</td><td>Per quintal of sugar</td></tr>
                <tr><td>Chemical plant</td><td>Per litre or per kg of chemical</td></tr>
                <tr><td>Advertising agency</td><td>Per campaign or per client</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:24px 0 12px">Cost Centre</h3>
              <div style="background:#f8f0db;border-left:4px solid #b6862c;padding:13px 16px;border-radius:8px;margin-bottom:16px">
                <b style="color:#8a6420">Definition:</b> A Cost Centre is a location, person, or item of equipment (or a group of these) for which costs may be ascertained and used for the purpose of cost control. It is the smallest organisational unit for which cost data is collected separately — an accountability point where costs accumulate before being charged to products or services.
              </div>

              <svg viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;margin:8px 0 16px" font-family="IBM Plex Sans,sans-serif">
                <rect x="280" y="8" width="200" height="36" rx="9" fill="#234f3b"/>
                <text x="380" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#f4efe3">COST CENTRES</text>
                <line x1="380" y1="44" x2="183" y2="60" stroke="#234f3b" stroke-width="1.5"/>
                <line x1="380" y1="44" x2="577" y2="60" stroke="#b6862c" stroke-width="1.5"/>
                <rect x="20" y="60" width="326" height="34" rx="8" fill="#2f6b4f"/>
                <text x="183" y="81" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">By Person / Location</text>
                <rect x="414" y="60" width="326" height="34" rx="8" fill="#b6862c"/>
                <text x="577" y="81" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">By Function</text>
                <line x1="183" y1="94" x2="97" y2="110" stroke="#2f6b4f" stroke-width="1.5"/>
                <line x1="183" y1="94" x2="269" y2="110" stroke="#2f6b4f" stroke-width="1.5"/>
                <line x1="577" y1="94" x2="491" y2="110" stroke="#b6862c" stroke-width="1.5"/>
                <line x1="577" y1="94" x2="663" y2="110" stroke="#b6862c" stroke-width="1.5"/>
                <rect x="20" y="110" width="154" height="78" rx="8" fill="#e3eee6" stroke="#2f6b4f"/>
                <text x="97" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#234f3b">Personal</text>
                <text x="97" y="149" text-anchor="middle" font-size="9.5" fill="#3c4742">Relates to a person</text>
                <text x="97" y="164" text-anchor="middle" font-size="9.5" fill="#3c4742">e.g. Foreman's</text>
                <text x="97" y="178" text-anchor="middle" font-size="9.5" fill="#3c4742">section</text>
                <rect x="192" y="110" width="154" height="78" rx="8" fill="#e3eee6" stroke="#2f6b4f"/>
                <text x="269" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#234f3b">Impersonal</text>
                <text x="269" y="149" text-anchor="middle" font-size="9.5" fill="#3c4742">Location or equipment</text>
                <text x="269" y="164" text-anchor="middle" font-size="9.5" fill="#3c4742">e.g. Boiler house,</text>
                <text x="269" y="178" text-anchor="middle" font-size="9.5" fill="#3c4742">Machine No. 5</text>
                <rect x="414" y="110" width="154" height="78" rx="8" fill="#f8f0db" stroke="#b6862c"/>
                <text x="491" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#8a6420">Production</text>
                <text x="491" y="149" text-anchor="middle" font-size="9.5" fill="#3c4742">Where goods are made</text>
                <text x="491" y="164" text-anchor="middle" font-size="9.5" fill="#3c4742">e.g. Machining shop,</text>
                <text x="491" y="178" text-anchor="middle" font-size="9.5" fill="#3c4742">Assembly line</text>
                <rect x="586" y="110" width="154" height="78" rx="8" fill="#f8f0db" stroke="#b6862c"/>
                <text x="663" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#8a6420">Service</text>
                <text x="663" y="149" text-anchor="middle" font-size="9.5" fill="#3c4742">Supports production</text>
                <text x="663" y="164" text-anchor="middle" font-size="9.5" fill="#3c4742">e.g. Canteen,</text>
                <text x="663" y="178" text-anchor="middle" font-size="9.5" fill="#3c4742">Maintenance dept</text>
              </svg>

              <table class="cmp">
                <tr><th>Type</th><th>Basis</th><th>Description</th><th>Examples</th></tr>
                <tr><td><b>Personal Cost Centre</b></td><td>Person</td><td>Relates to a person or group of persons responsible for a cost area</td><td>A foreman supervising the welding section; the Production Manager's department</td></tr>
                <tr><td><b>Impersonal Cost Centre</b></td><td>Location / Equipment</td><td>Relates to a physical location or item of equipment — not tied to a specific person</td><td>Boiler house, Machine No. 3, Stores department, Paint shop</td></tr>
                <tr><td><b>Production Cost Centre</b></td><td>Function</td><td>Where actual manufacturing, processing or assembly of the product takes place; directly adds value</td><td>Machining shop, Assembly line, Pressing department, Welding bay</td></tr>
                <tr><td><b>Service Cost Centre</b></td><td>Function</td><td>Provides support services to production centres; costs are eventually absorbed into products via allocation</td><td>Canteen, Maintenance department, Power house, Transport, Quality control lab</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:20px 0 12px">Key Distinction — Cost Unit vs Cost Centre</h3>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px">
                <div style="background:#e3eee6;padding:14px 16px;border-radius:8px;border-top:3px solid var(--green-deep)">
                  <b style="color:var(--green-deep);font-size:13px">COST CENTRE</b><br>
                  <span style="font-size:13px">The <i>location or activity</i> against which costs are <b>collected</b>. Answers: "Where is this cost being incurred?"</span><br>
                  <span style="font-size:12px;color:#3c4742;margin-top:6px;display:block">Example in a cement factory: the Kiln Department</span>
                </div>
                <div style="background:#f8f0db;padding:14px 16px;border-radius:8px;border-top:3px solid #b6862c">
                  <b style="color:#8a6420;font-size:13px">COST UNIT</b><br>
                  <span style="font-size:13px">The <i>unit of output</i> for which cost is <b>calculated</b>. Answers: "What is the cost of producing one of these?"</span><br>
                  <span style="font-size:12px;color:#3c4742;margin-top:6px;display:block">Example in a cement factory: one tonne of cement</span>
                </div>
              </div>
              <p style="margin-top:14px">Costs are first collected against <b>Cost Centres</b>, then divided by the number of <b>Cost Units</b> produced to arrive at the <b>cost per unit</b> — the fundamental output of any costing system.</p>`}

          ],
          sets:[
            {label:"Set 1 — Foundation", mix:"15/9/6", questions:[

              /* ── 15 EASY ── */
              {type:"standard",diff:"E",
               q:"Cost Accounting is primarily designed to serve:",
               options:["External shareholders and creditors","Government tax authorities","Internal management at all levels","The general public"],
               answer:2,
               explain:"Cost Accounting is an internal management tool. Its reports — cost sheets, variance analyses, departmental cost summaries — are produced for management to control costs, fix prices and make decisions. External users are served by Financial Accounting.",
               optionExplains:["External shareholders are served by Financial Accounting, not Cost Accounting.","Tax authorities use financial accounts and tax returns — not cost accounting reports.","Correct. Cost Accounting is designed for internal management use at all levels.","General public disclosure is the domain of published financial statements, not cost accounts."]},

              {type:"standard",diff:"E",
               q:"Which of the following BEST defines 'Costing'?",
               options:["The process of preparing a Profit and Loss Account","The technique and process of ascertaining costs","The system of recording all business transactions","The method of preparing the Balance Sheet"],
               answer:1,
               explain:"Costing refers specifically to the technique and process of ascertaining (finding out) the cost of a product, job, service or process. It is the methodology; Cost Accounting is the broader system that includes recording, classifying and interpreting costs.",
               optionExplains:["Preparing a P&L Account is part of Financial Accounting, not Costing.","Correct. Costing = technique and process of ascertaining costs.","Recording all business transactions is bookkeeping / Financial Accounting.","Preparing a Balance Sheet is a Financial Accounting function."]},

              {type:"standard",diff:"E",
               q:"Which of the following is NOT an objective of Cost Accounting?",
               options:["Ascertainment of cost per unit","Preparation of statutory financial statements","Cost control and cost reduction","Fixation of selling price"],
               answer:1,
               explain:"Preparation of statutory financial statements (P&L Account, Balance Sheet) is the objective of Financial Accounting, not Cost Accounting. Cost Accounting is primarily an internal management tool focused on cost ascertainment, control, reduction and decision support.",
               optionExplains:["Cost ascertainment is a primary objective of Cost Accounting.","Correct. Statutory financial statements are produced by Financial Accounting, not Cost Accounting.","Cost control and reduction are core objectives of Cost Accounting.","Fixing selling prices using cost data is a key objective of Cost Accounting."]},

              {type:"standard",diff:"E",
               q:"The definition 'the process of accounting for cost from the point at which expenditure is incurred to its relationship with cost centres and cost units' was given by:",
               options:["ICAI (Institute of Chartered Accountants of India)","CIMA (Chartered Institute of Management Accountants)","ASB (Accounting Standards Board)","Companies Act, 2013"],
               answer:1,
               explain:"This is CIMA's (Chartered Institute of Management Accountants) official definition of Cost Accounting, widely used in textbooks and professional accounting courses.",
               optionExplains:["ICAI issues Financial Accounting and Auditing standards — not this specific definition of Cost Accounting.","Correct. CIMA's definition of Cost Accounting is the most widely accepted one.","ASB is responsible for issuing Accounting Standards for Financial Accounting.","The Companies Act governs company law and financial reporting requirements."]},

              {type:"standard",diff:"E",
               q:"Financial Accounting is legally compulsory under:",
               options:["Cost Accounting Records Rules","Companies Act 2013","Income Tax Act 1961","CIMA Guidelines"],
               answer:1,
               explain:"Financial Accounting and the preparation of financial statements is mandatory for all registered companies under the Companies Act 2013. Cost Accounting, by contrast, is generally voluntary (though Cost Audit may be mandated in some industries).",
               optionExplains:["Cost Accounting Records Rules relate to Cost Audit for specific industries, not routine Financial Accounting.","Correct. The Companies Act 2013 mandates Financial Accounting and statutory audit for companies.","The Income Tax Act governs taxation, not the requirement to maintain Financial Accounts.","CIMA is a professional body — it does not create legal mandates for Indian companies."]},

              {type:"standard",diff:"E",
               q:"Which of the following is the cost unit used in the electricity generation industry?",
               options:["Per tonne","Per kilowatt hour (kWh)","Per passenger-kilometre","Per room per night"],
               answer:1,
               explain:"In electricity generation, costs are calculated and expressed per kilowatt hour (kWh) — the standard unit of electrical energy. Different industries use different cost units appropriate to their type of output.",
               optionExplains:["Per tonne is used for steel, cement and coal — not electricity.","Correct. Per kilowatt hour (kWh) is the cost unit for electricity generation.","Per passenger-kilometre is the cost unit for transport (road/rail).","Per room per night is the cost unit for hotels."]},

              {type:"standard",diff:"E",
               q:"A Cost Centre is defined as:",
               options:["A unit of product for which cost is calculated","A location, person or equipment for which costs are ascertained for cost control","The total cost of production for a period","The profit earned by a department"],
               answer:1,
               explain:"A Cost Centre is a location, person or item of equipment (or group of these) for which costs may be ascertained and used for cost control. It is an accountability point where costs are collected before being charged to products.",
               optionExplains:["A unit of product for which cost is calculated is a Cost UNIT, not a Cost Centre.","Correct. A Cost Centre is a location/person/equipment where costs are collected for control purposes.","Total production cost is a figure, not a cost centre.","Profit earned by a department is a Profit Centre concept, not a Cost Centre."]},

              {type:"standard",diff:"E",
               q:"The machining shop in a factory where products are manufactured is an example of a:",
               options:["Service cost centre","Personal cost centre","Production cost centre","Impersonal profit centre"],
               answer:2,
               explain:"A Production Cost Centre is where actual manufacturing, processing or assembly takes place — where value is directly added to the product. The machining shop, assembly line and pressing department are classic examples.",
               optionExplains:["Service cost centres provide support (maintenance, canteen) — they don't directly make products.","Personal cost centres relate to a person responsible for costs — machining shop is a location, not a person.","Correct. The machining shop is a Production Cost Centre — where goods are directly manufactured.","Impersonal profit centre is not a standard cost accounting classification."]},

              {type:"standard",diff:"E",
               q:"The canteen department of a factory is an example of a:",
               options:["Production cost centre","Personal cost centre","Service cost centre","Profit centre"],
               answer:2,
               explain:"A Service Cost Centre provides support services to production centres — it does not directly manufacture anything. The canteen, maintenance department, power house and stores are service cost centres whose costs are eventually absorbed into products via overhead allocation.",
               optionExplains:["Production centres directly make goods — the canteen does not.","Personal cost centres relate to a named person responsible for costs — canteen is a location.","Correct. Canteen is a Service Cost Centre — it supports production but does not directly produce goods.","A profit centre generates revenue; a canteen is a cost centre."]},

              {type:"standard",diff:"E",
               q:"Which of the following is an ADVANTAGE of Cost Accounting?",
               options:["It eliminates the need for Financial Accounting","It provides data for fixing selling prices","It is inexpensive to install and operate","It requires no trained staff"],
               answer:1,
               explain:"One key advantage of Cost Accounting is that it provides the cost data needed to fix appropriate selling prices — covering all costs and generating the required profit margin. This is essential for tendering, quotations and pricing decisions.",
               optionExplains:["Cost Accounting does not replace Financial Accounting — both are needed.","Correct. Cost Accounting provides cost-based data for pricing, tenders and quotations.","Cost Accounting is generally expensive to install — this is a limitation, not an advantage.","Trained staff are indeed required — this is another limitation of Cost Accounting."]},

              {type:"standard",diff:"E",
               q:"Which of the following is a LIMITATION of Cost Accounting?",
               options:["It helps in cost control","It assists in decision-making","Results may differ from Financial Accounting profit figures","It provides data for wage incentive schemes"],
               answer:2,
               explain:"A key limitation is that Cost Accounting profit may differ from Financial Accounting profit due to different treatment of opening/closing stock, notional costs and non-cost items. This requires reconciliation and can cause confusion.",
               optionExplains:["Helping in cost control is an advantage, not a limitation.","Assisting decision-making is an advantage.","Correct. Different profit figures from Cost and Financial Accounting is a limitation requiring reconciliation.","Providing wage incentive data is an advantage."]},

              {type:"standard",diff:"E",
               q:"Cost Accounting covers which aspect of a business's activities?",
               options:["All business transactions including financing and investing","Only production and operating activities","Only financing activities (loans, share capital)","Only the Balance Sheet items"],
               answer:1,
               explain:"Cost Accounting focuses on production and operating activities — the cost of manufacturing goods, running processes and delivering services. It does not cover financing activities (borrowings, share issues) or investment activities, which are dealt with in Financial Accounting.",
               optionExplains:["All transactions (financing, investing, operating) are covered by Financial Accounting, not Cost Accounting.","Correct. Cost Accounting focuses on production and operating costs only.","Financing activities are outside the scope of Cost Accounting.","Balance Sheet items are produced by Financial Accounting."]},

              {type:"standard",diff:"E",
               q:"In a factory with a Foreman's section, the Cost Centre that relates to a person responsible for that section is called:",
               options:["Production Cost Centre","Service Cost Centre","Personal Cost Centre","Impersonal Cost Centre"],
               answer:2,
               explain:"A Personal Cost Centre relates to a specific person or group of persons responsible for a cost area — such as a foreman's section or a department manager's area of responsibility. This allows cost responsibility to be linked to an individual.",
               optionExplains:["Production Cost Centres relate to manufacturing locations, not specifically to named persons.","Service Cost Centres are functional support centres, not person-based.","Correct. Personal Cost Centres are person-based — linked to an individual responsible for costs.","Impersonal Cost Centres relate to locations or equipment, not persons."]},

              {type:"standard",diff:"E",
               q:"For a cement manufacturing company, the appropriate cost unit would be:",
               options:["Per kilowatt hour","Per patient day","Per tonne of cement","Per 1,000 bricks"],
               answer:2,
               explain:"In the cement industry, costs are measured and expressed per tonne of cement produced. The cost unit must be practical, meaningful and commonly used in the industry — tonne is the universal measure for bulk materials like cement, steel and coal.",
               optionExplains:["Per kilowatt hour is the electricity industry cost unit.","Per patient day is the hospital industry cost unit.","Correct. Per tonne is the standard cost unit for cement (and other bulk materials).","Per 1,000 bricks is the brick manufacturing cost unit."]},

              {type:"standard",diff:"E",
               q:"The boiler house of a factory (which generates steam for the production process) is an example of a:",
               options:["Personal Cost Centre","Production Cost Centre","Service Cost Centre that is also an Impersonal Cost Centre","Cost Unit"],
               answer:2,
               explain:"The boiler house is both a Service Cost Centre (it provides steam to production departments — it does not directly make the product) AND an Impersonal Cost Centre (it relates to a physical location/equipment, not to a specific named person).",
               optionExplains:["Personal Cost Centres relate to persons — the boiler house is a location/equipment.","Production centres directly manufacture goods — the boiler house supports production but does not produce the final product.","Correct. Boiler house = Service (supports production) + Impersonal (location/equipment-based).","A Cost Unit is the unit of output (e.g. per tonne) — the boiler house is a Cost Centre."]},

              /* ── 9 MODERATE ── */
              {type:"standard",diff:"M",
               q:"A factory has the following departments: (i) Assembly line (ii) Quality testing lab (iii) Canteen (iv) Power house. Which combination correctly classifies them as Production and Service Cost Centres?",
               options:["Production: (i) and (ii); Service: (iii) and (iv)","Production: (i) only; Service: (ii), (iii) and (iv)","Production: (i), (ii) and (iii); Service: (iv) only","Production: (i), (iii) and (iv); Service: (ii) only"],
               answer:1,
               explain:"The Assembly Line directly manufactures the product — it is a Production Cost Centre. Quality testing, canteen and power house all SUPPORT production without directly making the product — they are Service Cost Centres. Note: Quality testing (while important) does not directly add value to the product; it supports the production process.",
               optionExplains:["Quality testing is a Service Centre (support function), not Production.","Correct. Assembly line = Production. Quality lab, canteen and power house = Service.","Canteen and quality testing are service functions, not production.","Power house is a Service Centre; assembly line is Production."]},

              {type:"standard",diff:"M",
               q:"Which step comes FIRST in the installation of a costing system?",
               options:["Designing cost forms and records","Training the personnel","Studying the organisation's structure, products and production process","Establishing cost centres"],
               answer:2,
               explain:"The very first step must be to thoroughly study the organisation — its structure, size, products, production process, management needs and objectives. Without understanding the business, it is impossible to design an appropriate costing method or establish meaningful cost centres.",
               optionExplains:["Designing forms comes after the method is selected and cost centres are established — not first.","Training staff comes near the end — after the system is designed and ready to implement.","Correct. Studying the organisation is always the first step — you cannot design a system without understanding the business.","Establishing cost centres comes after the costing method is selected, not as the first step."]},

              {type:"standard",diff:"M",
               q:"The profit shown by Cost Accounts differs from the profit shown by Financial Accounts. The MAIN reason for this difference is:",
               options:["Cost Accounting ignores all expenses","Financial Accounting is prepared on Cash Basis","Different treatment of items like stock valuation, notional costs and non-cost items","Cost Accounting always shows higher profit than Financial Accounting"],
               answer:2,
               explain:"The difference between Cost Accounting profit and Financial Accounting profit arises from: (a) different opening/closing stock valuation methods; (b) notional costs included in Cost Accounts but not in Financial Accounts; (c) non-cost items (dividends received, donations) in Financial Accounts but excluded from Cost Accounts; (d) different depreciation rates/methods.",
               optionExplains:["Cost Accounting does not ignore expenses — it records all production-related costs.","Financial Accounting uses Accrual Basis, not Cash Basis (for companies).","Correct. The difference stems from different treatment of stock, notional costs and non-cost items.","Cost Accounting profit can be higher or lower than Financial profit — there is no fixed direction."]},

              {type:"standard",diff:"M",
               q:"A hotel charges costs per room per night. In Cost Accounting terms, 'per room per night' is the hotel's:",
               options:["Cost Centre","Cost of Production","Cost Unit","Variable Cost"],
               answer:2,
               explain:"'Per room per night' is the Cost Unit for the hotel — the unit of service in relation to which costs are ascertained and expressed. The hotel's departments (housekeeping, front desk, kitchen) would be its Cost Centres.",
               optionExplains:["Cost Centre is the location (e.g., housekeeping department) — not the unit of measurement.","Cost of Production is a total figure, not the unit measurement basis.","Correct. Per room per night = the Cost Unit for a hotel — the unit of service output.","Variable Cost is a cost behaviour classification, not a measurement unit."]},

              {type:"assertion",diff:"M",
               assertion:"Cost Accounting is mandatory for all companies registered under the Companies Act 2013.",
               reason:"Companies Act 2013 requires companies to maintain books of account and prepare financial statements.",
               options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
               answer:2,
               explain:"R is TRUE — Companies Act 2013 does require companies to maintain books of account and prepare financial statements. A is FALSE — the mandatory requirement is for FINANCIAL Accounting, not Cost Accounting. Cost Accounting is generally voluntary (Cost Audit may be mandated for specific industries under the Companies Act, but this is not universal).",
               optionExplains:["A is false — Cost Accounting is not universally mandatory under the Companies Act.","A is still false.","Correct. R is true (CA 2013 mandates financial statements); A is false (Cost Accounting is voluntary).","R is true — CA 2013 does require books of account."]},

              {type:"matching",diff:"M",
               q:"Match each industry to its correct cost unit:",
               columnA:["(i) Brick manufacturing","(ii) Road transport","(iii) Hospital","(iv) Textile mill"],
               columnB:["(a) Per patient day","(b) Per passenger-kilometre or per tonne-km","(c) Per 1,000 bricks","(d) Per metre of cloth"],
               options:["i-c, ii-b, iii-a, iv-d","i-a, ii-c, iii-b, iv-d","i-d, ii-a, iii-c, iv-b","i-c, ii-a, iii-d, iv-b"],
               answer:0,
               explain:"Brick manufacturing → per 1,000 bricks (c). Road transport → per passenger-km or tonne-km (b). Hospital → per patient day (a). Textile → per metre of cloth (d). Each industry's cost unit reflects its primary unit of output.",
               optionExplains:["Correct. Bricks-c, Transport-b, Hospital-a, Textile-d — each matches industry practice.","Wrong: Hospital is not per passenger-km; that is transport.","Wrong: Textile is not measured per patient day.","Wrong: Transport is not per 1,000 bricks."]},

              {type:"standard",diff:"M",
               q:"Which of the following BEST explains why Cost Accounting uses non-monetary data in addition to monetary data?",
               options:["Because Financial Accounting is more reliable for monetary data","To measure efficiency and productivity in physical terms — e.g. output per hour, kg of material used per unit","To replace monetary information with physical information","Because non-monetary data is required by the Companies Act"],
               answer:1,
               explain:"Cost Accounting uses non-monetary data (units, hours, kg) alongside monetary figures because efficiency and productivity are best measured in physical terms. Knowing that 10 kg of material was used per unit produced (not just its rupee cost) allows comparisons across periods, even when prices change.",
               optionExplains:["Financial Accounting reliability is not the reason — both systems have their own purpose.","Correct. Non-monetary data enables physical measurement of efficiency, independent of price fluctuations.","Non-monetary data supplements, not replaces, monetary information.","Companies Act does not mandate non-monetary data collection in Cost Accounts."]},

              {type:"standard",diff:"M",
               q:"The objective of Cost Accounting that involves comparing actual expenditure with budgeted or standard expenditure and investigating differences is:",
               options:["Cost Ascertainment","Cost Reduction","Cost Control","Decision Making"],
               answer:2,
               explain:"Cost Control involves setting pre-determined targets (budgets or standards) and comparing actual costs against them. When actual costs exceed the target, a variance arises which is investigated and corrective action is taken. Cost Reduction goes further — it permanently lowers the cost base, not just monitors it.",
               optionExplains:["Cost Ascertainment is finding out what the cost IS — not comparing against a target.","Cost Reduction is permanently lowering costs — a step beyond monitoring.","Correct. Cost Control = compare actual vs standard/budget, investigate variances, take corrective action.","Decision Making uses cost data to make choices, not specifically the budget vs actual comparison."]},

              {type:"standard",diff:"M",
               q:"Which of the following is a feature that DISTINGUISHES Cost Accounting from Financial Accounting in terms of reporting frequency?",
               options:["Cost Accounting reports only annually like Financial Accounting","Cost Accounting provides continuous, frequent reports (daily/weekly/monthly) as required by management","Cost Accounting reports are prepared only at the end of each quarter","Cost Accounting and Financial Accounting have the same reporting frequency"],
               answer:1,
               explain:"Unlike Financial Accounting which is typically an annual exercise, Cost Accounting provides continuous, frequent reports — daily output costs, weekly material usage, monthly departmental cost summaries — whenever management needs them for control and decision-making.",
               optionExplains:["Cost Accounting is not limited to annual reports — it is continuous.","Correct. Cost Accounting produces reports as frequently as management requires — daily to monthly.","Quarterly is more frequent than Financial Accounting but still not the correct description.","They have different frequencies — FA is annual; CA is continuous."]},

              /* ── 6 VERY HARD ── */
              {type:"assertion",diff:"VH",
               assertion:"Cost Accounting covers all business transactions including financing (loans, share capital) and investing activities, just like Financial Accounting.",
               reason:"Both Cost Accounting and Financial Accounting are branches of accounting and therefore have the same scope.",
               options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
               answer:3,
               explain:"BOTH are FALSE. A is false — Cost Accounting covers only production and operating activities. It does NOT cover financing activities (loans, debentures, share capital) or investing activities. These are recorded only in Financial Accounting. R is also false — although both are branches of accounting, they have fundamentally different scopes; being branches of the same discipline does not mean identical scope.",
               optionExplains:["Both A and R are false — Cost Accounting's scope is narrower.","Both are false.","A is also false, not just R.","Correct. A is false (Cost Accounting has narrower scope); R is false (same branch ≠ same scope)."]},

              {type:"case",diff:"VH",
               passage:"Sunrise Cement Ltd. has the following departments and units: (i) Kiln Department where limestone is processed into clinker; (ii) Grinding Mill where clinker is ground into cement powder; (iii) Quality Control Lab that tests every batch; (iv) Canteen serving 500 workers; (v) Power House generating electricity for all departments. The company produces cement in bags of 50 kg each.",
               q:"Which option correctly identifies the Cost Unit AND correctly classifies ALL five departments?",
               options:["Cost Unit: per 50-kg bag; Production: (i)(ii); Service: (iii)(iv)(v)","Cost Unit: per tonne; Production: (i)(ii)(iii); Service: (iv)(v)","Cost Unit: per 50-kg bag; Production: (i)(ii)(iii)(iv); Service: (v)","Cost Unit: per tonne; Production: (i)(ii); Service: (iii)(iv)(v)"],
               answer:3,
               explain:"Cost Unit for cement = per tonne (the standard industry measure, not per bag). Production Cost Centres = Kiln (i) and Grinding Mill (ii) — both directly transform raw material into the product. Service Cost Centres = Quality Control Lab (iii), Canteen (iv) and Power House (v) — all support production without directly adding to the product. Quality control, while vital, is a support function.",
               optionExplains:["Per 50-kg bag is not the standard cost unit; per tonne is. Also QC lab is Service not Production.","Per tonne is correct but QC lab should be Service, not Production.","Per 50-kg bag is incorrect; QC lab and canteen are Service, not Production.","Correct. Cost Unit = per tonne; Production = Kiln + Grinding Mill; Service = QC Lab + Canteen + Power House."]},

              {type:"matching",diff:"VH",
               q:"Match each objective of Cost Accounting to its correct practical application:",
               columnA:["(i) Cost Ascertainment","(ii) Cost Control","(iii) Decision Making","(iv) Inventory Valuation"],
               columnB:["(a) Comparing actual material cost per unit with the standard rate of ₹50/kg and investigating why actual was ₹58/kg","(b) Calculating whether it is cheaper to manufacture a component internally or buy it from an outside supplier","(c) Determining that the cost of producing one refrigerator is ₹12,500","(d) Computing the value of 200 units of finished goods at ₹12,500 each for the Balance Sheet"],
               options:["i-c, ii-a, iii-b, iv-d","i-a, ii-c, iii-d, iv-b","i-d, ii-b, iii-a, iv-c","i-c, ii-b, iii-a, iv-d"],
               answer:0,
               explain:"Cost Ascertainment (i) = finding the cost per unit — ₹12,500 per refrigerator (c). Cost Control (ii) = comparing actual vs standard and investigating variances — ₹58 vs ₹50/kg (a). Decision Making (iii) = make-or-buy analysis (b). Inventory Valuation (iv) = computing stock value for Balance Sheet using cost per unit (d).",
               optionExplains:["Correct. Each objective maps precisely to its practical application.","Wrong — Ascertainment is not about variance analysis; Control is not per-unit costing.","Wrong — Inventory Valuation is not about make-or-buy; Decision Making is not about variances.","Wrong — Cost Control in option D is about make-or-buy, which is Decision Making."]},

              {type:"assertion",diff:"VH",
               assertion:"In Cost Accounting, the profit earned by a business will always be higher than the profit shown in Financial Accounting for the same period.",
               reason:"Cost Accounting excludes non-cost items like dividend income and donation expenses that reduce profit in Financial Accounting.",
               options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
               answer:2,
               explain:"R is TRUE — Cost Accounting does exclude non-cost items. Dividend income (not a production cost revenue) and donations (not a production cost) are kept out of Cost Accounts. A is FALSE — excluding non-cost income (like dividends) would actually LOWER cost accounting profit relative to financial profit, not raise it. The direction of the difference depends on the specific items: if notional costs are large, Cost Accounting profit would be LOWER. There is no fixed rule that Cost Accounting profit is always higher.",
               optionExplains:["A is false — no fixed direction; R is partially true but does not correctly validate A.","A is false regardless.","Correct. R is true (non-cost items are excluded); A is false (no rule that CA profit > FA profit always).","R is true — non-cost items are excluded from Cost Accounts."]},

              {type:"case",diff:"VH",
               passage:"Precision Tools Ltd. is setting up a new costing system. The Finance Manager lists the following steps in random order: (P) Train all departmental supervisors on filling in time sheets and material requisitions. (Q) Decide that Process Costing is most appropriate for the continuous production of steel washers. (R) Study the factory layout, product range and production flow. (S) Establish the machining department, grinding department and maintenance department as cost centres. (T) Design the material requisition forms, job cards and cost ledger.",
               q:"Which sequence CORRECTLY represents the order in which a costing system should be installed?",
               options:["P → Q → R → S → T","R → Q → S → T → P","Q → R → S → P → T","R → S → Q → T → P"],
               answer:1,
               explain:"Correct sequence: (R) Study the organisation FIRST → (Q) Select the costing method (Process Costing for continuous production) → (S) Establish Cost Centres (machining, grinding, maintenance) → (T) Design forms and records → (P) Train personnel last. This mirrors the 8-step installation process: understand, decide method, set up cost centres, create records, then train.",
               optionExplains:["Training (P) cannot come before understanding the business (R) and designing the system.","Correct. R (study) → Q (select method) → S (set up cost centres) → T (design forms) → P (train staff).","Selecting a method (Q) before studying the organisation (R) is premature.","(R → S → Q → T → P) places cost centre establishment before method selection — method should be chosen first."]}

            ,

              {type:"assertion",diff:"VH",
               assertion:"A Cost Centre and a Cost Unit refer to the same concept — both are used to calculate the cost per unit of output in a costing system.",
               reason:"Every costing system must identify the unit of output (Cost Unit) and the accountability point for collecting costs (Cost Centre) as two separate and distinct building blocks.",
               options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
               answer:2,
               explain:"R is TRUE — every costing system does require both a Cost Unit (what is being costed) and a Cost Centre (where costs are collected) as distinct concepts. A is FALSE — Cost Centre and Cost Unit are fundamentally different concepts. A Cost Centre is a location/person/equipment where costs are collected for control; a Cost Unit is the unit of output for which cost per unit is calculated. In a cement factory: the Kiln Department is the Cost Centre; one tonne of cement is the Cost Unit.",
               optionExplains:["A is false — they are different concepts, not the same.","A is still false.","Correct. R is true (both are essential but distinct building blocks); A is false (they are NOT the same concept).","R is true — identifying both is a requirement of every costing system."]}

            ]},
            {label:"Set 2", mix:"14/9/7", questions:[]},
            {label:"Set 3", mix:"13/9/8", questions:[]},
            {label:"Set 4", mix:"12/9/9", questions:[]},
            {label:"Set 5", mix:"12/9/9", questions:[]},
            {label:"Set 6", mix:"11/9/10", questions:[]},
            {label:"Set 7", mix:"10/9/11", questions:[]},
            {label:"Set 8", mix:"10/9/11", questions:[]},
            {label:"Set 9", mix:"9/9/12",  questions:[]},
            {label:"Set 10",mix:"9/9/12",  questions:[]}
          ]
        }]
      },

      /* ── UNIT 2 ──────────────────────────────────────────────── */
      {id:"ct-u2", title:"Classification of Cost & Cost Sheet", marks:15,
        syllabus:["Element-Based Classification: Raw Materials, Labour, Other Expenses, Overhead, Prime Cost","Function-Based Classification: Factory Cost, Administration Cost, Selling Cost, Distribution Cost, R&D Cost","Behaviour-Based Classification: Fixed Cost, Variable Cost, Semi-variable Cost; distinctions between Fixed and Variable","Preparation of Cost Sheet: definition, basic components, practical problems (excluding cost estimation)"],
        topics:[]},

      /* ── UNIT 3 ──────────────────────────────────────────────── */
      {id:"ct-u3", title:"Introduction to Taxation", marks:10,
        syllabus:["Brief history of Income Tax in India; Direct Tax vs Indirect Tax","Basic concepts: Previous Year, Assessment Year, Assessee, Person, Sources of Income","Heads of Income; Gross Total Income; Total Income","Incomes not forming part of Total Income — Section 10 exemptions: HUF member receipts, partnership profit share, LIC proceeds, MP/MLA allowances, awards, local authority income, dividend, units, long-term capital gains on equity"],
        topics:[]},

      /* ── UNIT 4 ──────────────────────────────────────────────── */
      {id:"ct-u4", title:"Residential Status and Incidence of Tax", marks:10,
        syllabus:["Determination of Residential Status — Resident (Ordinarily Resident), Resident but Not Ordinarily Resident, Non-Resident","Conditions under Sections 6(1) and 6(6) for Individual Assessee","Scope of Total Income based on Residential Status","Incidence of Tax: what income is taxable for each residential status"],
        topics:[]}
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     ECONOMICS
     ══════════════════════════════════════════════════════════════════════════ */
  economics:{
    name:"Economics", code:"ECO", accent:"ready",
    units:[

      /* ─── UNIT 1: Microeconomics — Introduction ──────────────────── */
      {id:"eco-u1", title:"Introduction to Microeconomics", marks:4,
        syllabus:["The economic problem — scarcity, choice and opportunity cost","Economic systems — free market, command, mixed; invisible hand","Economic growth, development and sustainable development","Indicators of development — income, poverty, employment, inequality, capital"],
        topics:[{
          learn:[
            {topicStart:"eco-u1-problem", title:"The Economic Problem — Scarcity &amp; Choice", icon:"⚖️",
             desc:"Why scarcity forces every society to make choices — the Production Possibility Curve, opportunity cost and the three fundamental economic questions."},

            {h:"The Economic Problem — Scarcity, Choice and Opportunity Cost", kicker:"Unit 1 · Topic 1",
             html:`
              <p>You have ₹500 and a free Saturday. You could buy textbooks, watch a cricket match, or buy stationery. You can do one — not all three. India's government has ₹50 trillion and must choose between hospitals and highways, between defence and education. <strong>This tension between unlimited wants and limited resources is the starting point of all economics.</strong></p>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">Scarcity — The Core Problem</h3>
              <div style="background:#e3eee6;border-left:4px solid var(--green-deep);padding:13px 16px;border-radius:8px;margin-bottom:14px">
                <b style="color:var(--green-deep)">Scarcity</b> means resources — land, labour, capital, entrepreneurship — are always limited relative to the wants they must satisfy. Scarcity forces every individual, firm and government to make <b>choices</b>. Economics is the study of those choices.
              </div>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">The Three Fundamental Economic Questions</h3>
              <table class="cmp">
                <tr><th>Question</th><th>What it asks</th><th>Indian real-life example</th></tr>
                <tr><td><b>What to produce?</b></td><td>Which goods, in what quantities?</td><td>More electric vehicles or petrol cars? More wheat or more rice?</td></tr>
                <tr><td><b>How to produce?</b></td><td>Labour-intensive or capital-intensive?</td><td>Build a road with bulldozers (few workers) or hand tools (many workers)?</td></tr>
                <tr><td><b>For whom to produce?</b></td><td>Who gets the output?</td><td>Subsidised food rations — to all citizens, or only BPL households?</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">Opportunity Cost — The True Cost of Every Choice</h3>
              <div style="background:#f8f0db;border-left:4px solid #b6862c;padding:13px 16px;border-radius:8px;margin-bottom:14px">
                <b style="color:#8a6420">Opportunity Cost</b> is the value of the best alternative you give up when you make a choice. When India spends ₹1,00,000 crore building fighter jets, the opportunity cost is what that money <i>could have built instead</i> — perhaps 200,000 new schools or 500 new hospitals. Every choice has a cost; the opportunity cost makes that cost visible.
              </div>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">The Production Possibility Curve (PPC)</h3>
              <p>The PPC — also called the <b>Production Possibility Frontier (PPF)</b> — is a graph showing all the maximum possible combinations of two goods that an economy can produce when it uses <i>all</i> its available resources fully and efficiently. Think of it as the economy's "best it can do" boundary.</p>
              <p>To understand it concretely, suppose India can deploy all its resources towards producing only two things: <b>Wheat</b> (food for people) or <b>Steel</b> (material for factories and infrastructure). If the government shifted all resources to steel, it could produce 500 million tonnes of steel but zero wheat. If it devoted everything to wheat, it gets 450 million tonnes of wheat but zero steel. Between these extremes lies a range of possible combinations — shown in the table and graph below.</p>

              <table class="cmp" style="margin-bottom:16px">
                <tr><th>Point</th><th>Wheat (mn tonnes)</th><th>Steel (mn tonnes)</th><th>Opportunity cost of 100 more wheat</th></tr>
                <tr><td><b>A</b></td><td>0</td><td>500</td><td>—</td></tr>
                <tr><td><b>B</b></td><td>100</td><td>480</td><td>Give up 20 mn t of steel</td></tr>
                <tr><td><b>C</b></td><td>200</td><td>440</td><td>Give up 40 mn t of steel</td></tr>
                <tr><td><b>D</b></td><td>300</td><td>360</td><td>Give up 80 mn t of steel</td></tr>
                <tr><td><b>E</b></td><td>400</td><td>200</td><td>Give up 160 mn t of steel</td></tr>
                <tr><td><b>F</b></td><td>450</td><td>0</td><td>Give up 200 mn t of steel</td></tr>
              </table>

              <p>Notice: each time you produce 100 more tonnes of wheat, you sacrifice <i>more and more</i> steel — 20, then 40, then 80, then 160. This rising sacrifice is called <b>increasing opportunity cost</b> and it is why the PPC curves outward (is concave).</p>

              <svg viewBox="0 0 620 410" xmlns="http://www.w3.org/2000/svg" style="width:100%;margin:12px 0 4px" font-family="IBM Plex Sans,sans-serif">
                <rect x="0" y="0" width="620" height="410" rx="10" fill="#f8f9fb"/>
                <text x="310" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#234f3b">Production Possibility Curve — Wheat vs. Steel</text>
                <line x1="80" y1="269" x2="592" y2="269" stroke="#e0e5e0" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="80" y1="205" x2="592" y2="205" stroke="#e0e5e0" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="80" y1="141" x2="592" y2="141" stroke="#e0e5e0" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="80" y1="77" x2="592" y2="77" stroke="#e0e5e0" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="193" y1="27" x2="193" y2="333" stroke="#e0e5e0" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="308" y1="27" x2="308" y2="333" stroke="#e0e5e0" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="421" y1="27" x2="421" y2="333" stroke="#e0e5e0" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="534" y1="27" x2="534" y2="333" stroke="#e0e5e0" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="80" y1="333" x2="598" y2="333" stroke="#333" stroke-width="2"/>
                <polygon points="598,329 606,333 598,337" fill="#333"/>
                <line x1="80" y1="333" x2="80" y2="22" stroke="#333" stroke-width="2"/>
                <polygon points="76,22 80,14 84,22" fill="#333"/>
                <line x1="80" y1="269" x2="74" y2="269" stroke="#555" stroke-width="1.5"/>
                <text x="68" y="273" text-anchor="end" font-size="10" fill="#444">100</text>
                <line x1="80" y1="205" x2="74" y2="205" stroke="#555" stroke-width="1.5"/>
                <text x="68" y="209" text-anchor="end" font-size="10" fill="#444">200</text>
                <line x1="80" y1="141" x2="74" y2="141" stroke="#555" stroke-width="1.5"/>
                <text x="68" y="145" text-anchor="end" font-size="10" fill="#444">300</text>
                <line x1="80" y1="77" x2="74" y2="77" stroke="#555" stroke-width="1.5"/>
                <text x="68" y="81" text-anchor="end" font-size="10" fill="#444">400</text>
                <line x1="80" y1="27" x2="74" y2="27" stroke="#555" stroke-width="1.5"/>
                <text x="68" y="31" text-anchor="end" font-size="10" fill="#444">500</text>
                <line x1="193" y1="333" x2="193" y2="339" stroke="#555" stroke-width="1.5"/>
                <text x="193" y="351" text-anchor="middle" font-size="10" fill="#444">100</text>
                <line x1="308" y1="333" x2="308" y2="339" stroke="#555" stroke-width="1.5"/>
                <text x="308" y="351" text-anchor="middle" font-size="10" fill="#444">200</text>
                <line x1="421" y1="333" x2="421" y2="339" stroke="#555" stroke-width="1.5"/>
                <text x="421" y="351" text-anchor="middle" font-size="10" fill="#444">300</text>
                <line x1="534" y1="333" x2="534" y2="339" stroke="#555" stroke-width="1.5"/>
                <text x="534" y="351" text-anchor="middle" font-size="10" fill="#444">400</text>
                <line x1="591" y1="333" x2="591" y2="339" stroke="#555" stroke-width="1.5"/>
                <text x="591" y="351" text-anchor="middle" font-size="10" fill="#444">450</text>
                <text x="345" y="368" text-anchor="middle" font-size="11.5" fill="#234f3b" font-weight="600">Wheat Production (million tonnes)</text>
                <text x="22" y="183" text-anchor="middle" font-size="11.5" fill="#234f3b" font-weight="600" transform="rotate(-90,22,183)">Steel Production (million tonnes)</text>
                <text x="72" y="348" font-size="11" fill="#444" text-anchor="end">O</text>
                <path d="M 80,27 C 135,28 185,35 193,37 C 201,39 300,61 308,63 C 316,65 413,111 421,113 C 429,115 526,213 534,215 C 542,217 588,330 591,333" fill="none" stroke="#234f3b" stroke-width="3.5" stroke-linecap="round"/>
                <circle cx="80" cy="27" r="4" fill="#234f3b"/><text x="85" y="24" font-size="9.5" fill="#234f3b" font-weight="700">A</text>
                <circle cx="193" cy="37" r="4" fill="#234f3b"/><text x="198" y="34" font-size="9.5" fill="#234f3b" font-weight="700">B</text>
                <circle cx="308" cy="63" r="4" fill="#234f3b"/><text x="313" y="60" font-size="9.5" fill="#234f3b" font-weight="700">C</text>
                <circle cx="534" cy="215" r="4" fill="#234f3b"/><text x="539" y="226" font-size="9.5" fill="#234f3b" font-weight="700">E</text>
                <circle cx="591" cy="333" r="4" fill="#234f3b"/><text x="548" y="330" font-size="9.5" fill="#234f3b" font-weight="700">F</text>
                <circle cx="421" cy="113" r="9" fill="#234f3b" stroke="white" stroke-width="2.5"/>
                <text x="425" y="110" font-size="10" fill="#234f3b" font-weight="700">D</text>
                <line x1="413" y1="107" x2="302" y2="84" stroke="#234f3b" stroke-width="1" stroke-dasharray="3,2"/>
                <rect x="160" y="66" width="140" height="38" rx="7" fill="#e3eee6" stroke="#234f3b" stroke-width="1.2"/>
                <text x="230" y="83" text-anchor="middle" font-size="10.5" font-weight="700" fill="#234f3b">D — Efficient</text>
                <text x="230" y="97" text-anchor="middle" font-size="9.5" fill="#3c4742">On the PPC: all resources</text>
                <text x="230" y="108" text-anchor="middle" font-size="9.5" fill="#3c4742">fully and efficiently used</text>
                <circle cx="268" cy="220" r="9" fill="#c0492f" stroke="white" stroke-width="2.5"/>
                <text x="272" y="217" font-size="10" fill="#c0492f" font-weight="700">H</text>
                <line x1="260" y1="228" x2="180" y2="258" stroke="#c0492f" stroke-width="1" stroke-dasharray="3,2"/>
                <rect x="100" y="248" width="156" height="38" rx="7" fill="#f6e2dc" stroke="#c0492f" stroke-width="1.2"/>
                <text x="178" y="265" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c0492f">H — Inefficient</text>
                <text x="178" y="279" text-anchor="middle" font-size="9.5" fill="#3c4742">Inside PPC: resources idle</text>
                <circle cx="492" cy="72" r="9" fill="#b6862c" stroke="white" stroke-width="2.5"/>
                <text x="496" y="69" font-size="10" fill="#b6862c" font-weight="700">G</text>
                <line x1="484" y1="72" x2="427" y2="52" stroke="#b6862c" stroke-width="1" stroke-dasharray="3,2"/>
                <rect x="305" y="36" width="118" height="38" rx="7" fill="#f8f0db" stroke="#b6862c" stroke-width="1.2"/>
                <text x="364" y="53" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8a6420">G — Unattainable</text>
                <text x="364" y="67" text-anchor="middle" font-size="9.5" fill="#3c4742">Beyond current capacity</text>
                <text x="30" y="388" font-size="10" fill="#888" font-style="italic">Based on a hypothetical example for illustration; actual India data would differ.</text>
              </svg>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">Reading the Graph — Three Types of Points</h3>
              <table class="cmp">
                <tr><th>Point</th><th>Location</th><th>What it means</th><th>Indian example</th></tr>
                <tr><td><b>D</b> (green)</td><td>ON the PPC</td><td>Efficient — all resources are fully and productively employed; impossible to produce more of one good without producing less of the other</td><td>All land, workers and factories operating at full capacity</td></tr>
                <tr><td><b>H</b> (red)</td><td>INSIDE the PPC</td><td>Inefficient — some resources are idle, wasted or poorly used; economy is producing less than it could with the same resources</td><td>Factories shut down during a recession; farmers without seeds; workers unemployed</td></tr>
                <tr><td><b>G</b> (gold)</td><td>OUTSIDE the PPC</td><td>Currently unattainable — no combination of existing resources can produce this output level with current technology</td><td>India today cannot produce 362 mn t of wheat AND 422 mn t of steel simultaneously</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">Why Is the PPC Curved (Concave)? — Increasing Opportunity Cost</h3>
              <p>Look again at the data table. Going from A to B (first 100 units of wheat) costs only 20 units of steel. But going from E to F (the last 50 units of wheat) costs 200 units of steel — a much higher sacrifice. Why?</p>
              <p>Because <b>resources are not perfectly adaptable</b>. The first resources shifted from steel to wheat production are those best suited for wheat — fertile land, agricultural workers. As you shift more and more resources, you eventually use land and workers poorly suited for farming. Their contribution to wheat output is small while their cost in lost steel is huge. This law of <b>increasing opportunity cost</b> bends the PPC outward into its characteristic concave shape.</p>
              <p>A <b>straight-line PPC</b> would only occur if resources were perfectly interchangeable between both goods — which is never true in practice.</p>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Economic Growth — Shifting the PPC Outward</h3>
              <p>The PPC shifts <b>outward</b> (to the right and upward) when an economy gains more resources or improves its technology — allowing it to produce more of both goods simultaneously. This outward shift is <b>economic growth</b>:</p>
              <ul>
                <li>New technology (e.g. better seeds, more efficient steel furnaces)</li>
                <li>More workers or better-educated workers (human capital)</li>
                <li>Investment in new machinery and infrastructure (physical capital)</li>
              </ul>
              <p>What was yesterday's "unattainable" point G can become tomorrow's "on the PPC" point D — if the economy invests and grows. For India, hitting 7–8% annual GDP growth is the policy goal of continuously expanding this frontier.</p>`},

            {topicStart:"eco-u1-systems", title:"Economic Systems — How Societies Answer the Basic Questions", icon:"🏛️",
             desc:"Free market, command and mixed economies; the invisible hand; laissez-faire; and the broad social goals that every economic system tries to achieve."},

            {h:"Economic Systems — Free Market, Command and Mixed", kicker:"Unit 1 · Topic 2",
             html:`
              <p>Every economy faces the same three questions: What, How and For Whom to produce. But different societies answer them very differently — through markets, through governments, or through a combination. The three broad approaches are the <b>Free Market Economy</b>, the <b>Command (Socialist) Economy</b>, and the <b>Mixed Economy</b>.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">Free Market Economy (Capitalism)</h3>
              <div style="background:#e3eee6;border-left:4px solid var(--green-deep);padding:13px 16px;border-radius:8px;margin-bottom:12px">
                In a free market economy, <b>prices and profits guide all decisions</b>. Individuals and firms own resources and make decisions based on self-interest. The government plays a minimal role. The economy is driven by the profit motive — businesses produce what consumers are willing to pay for.
              </div>
              <p><b>The Invisible Hand</b> — Adam Smith (1776) argued that when individuals pursue their own self-interest in a competitive market, they are led "as if by an invisible hand" to promote the overall good of society. A baker bakes bread not out of charity, but to earn a living — yet the community is fed. This is the invisible hand at work. <b>Laissez-faire</b> (French: "let it be") is the policy of minimal government interference — let markets operate freely.</p>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Command Economy (Socialism)</h3>
              <div style="background:#f6e2dc;border-left:4px solid #c0492f;padding:13px 16px;border-radius:8px;margin-bottom:12px">
                In a command economy, the <b>government owns most resources and makes all major economic decisions</b> through central planning. Individual choices are subordinate to state objectives. The former USSR and Cuba are examples; China, while market-oriented today, retains significant state control.
              </div>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Mixed Economy</h3>
              <div style="background:#f8f0db;border-left:4px solid #b6862c;padding:13px 16px;border-radius:8px;margin-bottom:14px">
                A mixed economy combines <b>private enterprise with government intervention</b>. Markets operate for most goods, but the government provides public goods (defence, roads), regulates monopolies, redistributes income, and corrects market failures. <b>India is a mixed economy</b> — private companies like Reliance and Tata operate freely, but the government runs railways, banks, and provides food subsidies.
              </div>

              <table class="cmp">
                <tr><th>Feature</th><th>Free Market</th><th>Command / Socialist</th><th>Mixed (India)</th></tr>
                <tr><td><b>Ownership</b></td><td>Private individuals/firms</td><td>State/government</td><td>Both private and public</td></tr>
                <tr><td><b>Decision-maker</b></td><td>Price signals (supply &amp; demand)</td><td>Central planning authority</td><td>Markets + government policy</td></tr>
                <tr><td><b>Motive</b></td><td>Profit</td><td>Social welfare</td><td>Both profit and social goals</td></tr>
                <tr><td><b>Income distribution</b></td><td>Unequal — based on productivity</td><td>More equal — state controls wages</td><td>Some redistribution through taxes and subsidies</td></tr>
                <tr><td><b>Example</b></td><td>USA (pre-welfare state era)</td><td>Former USSR, Cuba</td><td>India, most democracies</td></tr>
                <tr><td><b>Main strength</b></td><td>Efficiency, innovation</td><td>Equity, full employment</td><td>Balances efficiency with equity</td></tr>
                <tr><td><b>Main weakness</b></td><td>Inequality, market failures</td><td>Inefficiency, lack of choice</td><td>Can suffer from both sets of weaknesses</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">Broad Social Goals Every Economy Pursues</h3>
              <table class="cmp">
                <tr><th>Goal</th><th>What it means</th><th>Example in India</th></tr>
                <tr><td><b>Efficiency</b></td><td>Getting maximum output from available resources; avoiding waste</td><td>Using all agricultural land productively; reducing idle factory capacity</td></tr>
                <tr><td><b>Equity</b></td><td>Fair distribution of income and wealth — not necessarily equal, but fair</td><td>Progressive income tax; MGNREGA providing employment to rural poor</td></tr>
                <tr><td><b>Freedom of Choice</b></td><td>Individuals can decide what to consume, produce or work in</td><td>Indians can choose any career, consume any legal good, start any business</td></tr>
                <tr><td><b>Economic Growth</b></td><td>Increasing the economy's capacity to produce — moving the PPC outward</td><td>India aims for 7-8% annual GDP growth to create jobs and raise incomes</td></tr>
                <tr><td><b>Sustainable Development</b></td><td>Meeting current needs without compromising future generations' ability to meet theirs</td><td>Solar energy targets, EV policies, forest conservation laws</td></tr>
              </table>`},

            {topicStart:"eco-u1-growth", title:"Economic Growth, Development &amp; Sustainability", icon:"📈",
             desc:"The difference between GDP growth and human development; savings and investment; sustainable development and why India's growth story is more complex than one number suggests."},

            {h:"Economic Growth, Development and Sustainable Development", kicker:"Unit 1 · Topic 3",
             html:`
              <p>In 2023-24, India's GDP grew by 8.2% — one of the fastest growth rates in the world. Yet over 220 million Indians still live in multidimensional poverty. GDP growth and human development are related but fundamentally different concepts. Understanding the distinction is one of the most important insights in economics.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">Economic Growth — What It Is and How We Measure It</h3>
              <div style="background:#e3eee6;border-left:4px solid var(--green-deep);padding:13px 16px;border-radius:8px;margin-bottom:12px">
                <b>Economic Growth</b> means an increase in an economy's capacity to produce goods and services over time. It is measured by the <b>growth rate of GDP</b> (Gross Domestic Product — the total market value of all goods and services produced in a country in a year) and by <b>per capita income</b> (GDP divided by population).
              </div>
              <table class="cmp">
                <tr><th>Measure</th><th>What it captures</th><th>India's figure (2023-24)</th></tr>
                <tr><td><b>GDP</b></td><td>Total output of the economy</td><td>≈ ₹293 trillion (approx. $3.7 trillion)</td></tr>
                <tr><td><b>Per Capita Income</b></td><td>Average income per person (GDP ÷ population)</td><td>≈ ₹2,10,000 per year (≈ $2,500)</td></tr>
                <tr><td><b>GDP Growth Rate</b></td><td>How fast the economy is expanding</td><td>8.2% (one of the highest globally)</td></tr>
              </table>
              <p>On the PPC diagram: <b>economic growth shifts the entire PPC outward</b> — the economy can now produce more of both goods. This happens through increases in resources (more workers, more capital) or improvements in technology.</p>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Savings and Investment — The Engine of Growth</h3>
              <p>Growth doesn't happen automatically. It requires <b>investment</b> — spending on new factories, machines, roads and skills. Investment is funded by <b>savings</b>: what households and firms set aside rather than consume today.</p>
              <ul>
                <li><b>Savings → Investment → Growth</b>: Higher savings rates allow more funds to be channelled into investment, which expands productive capacity and raises future incomes. India's gross savings rate is approximately 31% of GDP.</li>
                <li><b>Physical Capital</b>: man-made inputs used in production — machines, buildings, roads, power plants. India's investments in roads, ports and power over the last decade have visibly boosted manufacturing growth.</li>
                <li><b>Human Capital</b>: the skills, knowledge and health of the workforce. Investment in education (schools, colleges) and healthcare (hospitals, clean water) creates human capital that raises productivity just as physical capital does.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Economic Development — The Broader Picture</h3>
              <div style="background:#f8f0db;border-left:4px solid #b6862c;padding:13px 16px;border-radius:8px;margin-bottom:12px">
                <b>Economic Development</b> is a broader concept than growth. It refers to improvements in the <b>quality of life</b> — including health, education, reduction in poverty, gender equality, political freedom and environmental sustainability — not just the quantity of output.
              </div>
              <table class="cmp">
                <tr><th>Feature</th><th>Economic Growth</th><th>Economic Development</th></tr>
                <tr><td><b>What it measures</b></td><td>Increase in GDP / per capita income</td><td>Improvements in living standards, health, education, equality</td></tr>
                <tr><td><b>Scope</b></td><td>Narrow — quantitative (numbers)</td><td>Broad — quantitative AND qualitative</td></tr>
                <tr><td><b>Time horizon</b></td><td>Can be short-term</td><td>Long-term structural change</td></tr>
                <tr><td><b>Can happen without the other?</b></td><td>Yes — growth can occur with widening inequality</td><td>Yes — small improvements in health/education even without rapid GDP growth</td></tr>
                <tr><td><b>Key indicator</b></td><td>GDP growth rate, per capita income</td><td>Human Development Index (HDI) — combines income, health and education</td></tr>
                <tr><td><b>India's situation</b></td><td>High growth rate (7-8%)</td><td>HDI rank 134 of 193 countries (2023) — still much to improve</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Sustainable Development</h3>
              <div style="background:var(--green-deep);padding:13px 16px;border-radius:8px;color:#f4efe3;margin-bottom:12px">
                <b>Sustainable Development</b> is "development that meets the needs of the present without compromising the ability of future generations to meet their own needs." — Brundtland Commission, 1987
              </div>
              <p>Growth that destroys forests, pollutes rivers and depletes resources is not truly "development" — it borrows prosperity from the future. India faces this tension acutely: rapid industrialisation has brought millions out of poverty but also degraded air quality (Delhi's AQI regularly exceeds 400) and stressed water resources.</p>
              <p>The <b>UN's 17 Sustainable Development Goals (SDGs)</b>, adopted in 2015, set targets for 2030 covering poverty, hunger, health, education, clean energy, climate action, and more. India is signatory to all 17.</p>`},

            {topicStart:"eco-u1-indicators", title:"Indicators of Development — Income, Poverty, Inequality &amp; Beyond", icon:"📊",
             desc:"Why no single number can measure development; income and per capita income; poverty and the poverty line; unemployment; inequality; human capital; and gender inequality in India."},

            {h:"Indicators of Development — Measuring What Growth Leaves Behind", kicker:"Unit 1 · Topic 4",
             html:`
              <p>If someone asks "Is India developed?" you cannot answer with just one number. Per capita income in India is ≈ $2,500 — about 5% of the US average. But India's space agency ISRO successfully landed on the Moon's south pole in 2023. A country that can send spacecraft to the Moon while 230 million people are undernourished is a country of stark contrasts. Development needs many lenses — not just income.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 10px">Income Indicators</h3>
              <table class="cmp">
                <tr><th>Indicator</th><th>What it measures</th><th>India's figure</th></tr>
                <tr><td><b>Gross Domestic Product (GDP)</b></td><td>Total market value of all goods and services produced in India in one year</td><td>≈ $3.7 trillion (5th largest in world, 2024)</td></tr>
                <tr><td><b>Per Capita Income</b></td><td>GDP divided by total population — the average income per person</td><td>≈ $2,500/year (vs USA $80,000; China $13,000)</td></tr>
                <tr><td><b>Limitation</b></td><td>Average hides inequality — a country where 1% earns 90% of income has the same average as one with more equal distribution</td><td>India's richest 1% own 40% of national wealth (Oxfam, 2024)</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Poverty</h3>
              <div style="background:#f6e2dc;border-left:4px solid #c0492f;padding:13px 16px;border-radius:8px;margin-bottom:12px">
                <b>Poverty</b> means inability to meet basic minimum needs — food, clothing, shelter, healthcare, education. The <b>Poverty Line</b> is a minimum level of income below which a person is considered poor. India's poverty line (Tendulkar Committee) is approximately ₹27/day (rural) and ₹33/day (urban) for consumption expenditure.
              </div>
              <ul>
                <li>The <b>Multidimensional Poverty Index (MPI)</b> goes beyond income, measuring deprivations in health, education and living standards across 10 indicators.</li>
                <li>India reduced MPI poverty from 24.8% (2015-16) to 11.3% (2022-23) — a significant achievement, but 140+ million people still remain MPI-poor.</li>
                <li><b>BPL (Below Poverty Line)</b>: India's official category for households in poverty, used to target food subsidies and welfare programmes.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Unemployment</h3>
              <p>Unemployment occurs when people who want work and are able to work cannot find it. Different types of unemployment require different solutions:</p>
              <table class="cmp">
                <tr><th>Type</th><th>Cause</th><th>Indian context</th></tr>
                <tr><td><b>Structural</b></td><td>Mismatch between workers' skills and available jobs (e.g. factory workers replaced by machines)</td><td>IT automation replacing routine banking jobs</td></tr>
                <tr><td><b>Cyclical</b></td><td>Falls in overall demand during economic downturns</td><td>Job losses during COVID-19 (2020-21)</td></tr>
                <tr><td><b>Seasonal</b></td><td>Work only available in certain seasons</td><td>Agricultural workers idle outside harvest season</td></tr>
                <tr><td><b>Disguised</b></td><td>More people employed in a job than actually needed; marginal product = zero</td><td>4 family members working a farm that needs only 2</td></tr>
                <tr><td><b>Frictional</b></td><td>Temporary unemployment while switching jobs</td><td>An IT professional between jobs who is searching for better opportunities</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Inequality and the Gini Coefficient</h3>
              <p><b>Inequality</b> measures how unevenly income or wealth is distributed. The <b>Gini Coefficient</b> ranges from 0 (perfect equality — everyone earns the same) to 1 (perfect inequality — one person owns everything). India's Gini for income is approximately 0.35, but for wealth it approaches 0.65 — reflecting extreme concentration of assets.</p>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Physical Capital vs Human Capital</h3>
              <ul>
                <li><b>Physical Capital</b>: Man-made resources used in production — roads, factories, ports, power plants, machinery. India's National Infrastructure Pipeline (2019-25) targets ₹111 trillion in physical capital investment.</li>
                <li><b>Human Capital</b>: The skills, knowledge, health and capabilities of people. Investments in schooling, vocational training, and healthcare build human capital. A healthy, educated worker is more productive than an unhealthy, unskilled one.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Gender Inequality</h3>
              <p>Gender inequality in development is about more than women's income — it includes access to education, healthcare, legal rights, and participation in economic and political life.</p>
              <table class="cmp">
                <tr><th>Indicator</th><th>India</th><th>Note</th></tr>
                <tr><td><b>Female Literacy Rate</b></td><td>70.3%</td><td>vs Male 84.7% (Census 2011; improving but gap persists)</td></tr>
                <tr><td><b>Female Labour Force Participation</b></td><td>≈ 24%</td><td>One of the lowest in the world; male LFPR ≈ 76%</td></tr>
                <tr><td><b>Gender Development Index (GDI)</b></td><td>0.849</td><td>India ranks 108 out of 166 countries (2023)</td></tr>
                <tr><td><b>Gender Pay Gap</b></td><td>≈ 35%</td><td>Women earn about 65 paise for every ₹1 men earn for similar work</td></tr>
              </table>

              <h3 style="color:var(--green-deep);margin:18px 0 10px">Development Indicators — A Multi-Dimensional View</h3>
              <table class="cmp">
                <tr><th>Indicator</th><th>India</th><th>Why it matters</th></tr>
                <tr><td><b>HDI Rank</b></td><td>134/193 (2023)</td><td>Human Development Index combines income + education + health</td></tr>
                <tr><td><b>Life Expectancy</b></td><td>70.8 years</td><td>Measures quality of healthcare; China: 78, Japan: 84</td></tr>
                <tr><td><b>Mean Years of Schooling</b></td><td>6.7 years</td><td>Average years of education adults have received</td></tr>
                <tr><td><b>MPI Poverty</b></td><td>11.3%</td><td>% of population suffering multiple deprivations simultaneously</td></tr>
                <tr><td><b>Per Capita Income (PPP)</b></td><td>$8,379</td><td>Adjusted for what money actually buys in India</td></tr>
              </table>`}
          ],
          sets:[
            {label:"Set 1 — Foundation", mix:"15/9/6", questions:[]},
            {label:"Set 2", mix:"14/9/7", questions:[]},
            {label:"Set 3", mix:"13/9/8", questions:[]},
            {label:"Set 4", mix:"12/9/9", questions:[]},
            {label:"Set 5", mix:"11/9/10",questions:[]},
            {label:"Set 6", mix:"10/9/11",questions:[]},
            {label:"Set 7", mix:"10/9/11",questions:[]},
            {label:"Set 8", mix:"9/9/12", questions:[]},
            {label:"Set 9", mix:"9/9/12", questions:[]},
            {label:"Set 10",mix:"9/9/12", questions:[]}
          ]
        }]
      },

      /* ─── UNIT 2: Consumer Behaviour ─────────────────────────── */
      {id:"eco-u2", title:"Demand, Supply and Consumer Behaviour", marks:8,
        syllabus:["Demand and Supply; Equilibrium Price; Invisible Hand; Laissez-faire","Price Elasticity of Demand; Income Elasticity; Cross-Price Elasticity","Elasticity of Supply; Comparative Statics","Cardinal Utility and Law of Diminishing Marginal Utility","Indifference Curve Analysis; Budget Constraint; Consumer Equilibrium","Price Ceiling and Price Floor"],
        topics:[{
          learn:[
            {topicStart:"eco-u2-demand", title:"Demand, Supply and Market Equilibrium", icon:"📉",
             desc:"Demand and supply curves; why they slope the way they do; equilibrium price; the invisible hand; and how markets clear."},
            {h:"Demand, Supply and Market Equilibrium", kicker:"Unit 2 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Law of Demand (with demand curve graph — what goes on each axis, why it slopes downward, what shifts the curve); Law of Supply (supply curve — why it slopes upward); Market Equilibrium (where they intersect — the equilibrium price and quantity); and the Invisible Hand concept.</p></div>`},
            {topicStart:"eco-u2-elasticity", title:"Price, Income and Cross-Price Elasticity of Demand", icon:"↔️",
             desc:"How sensitive demand is to price changes — the critical concept that determines whether a price rise raises or lowers total revenue."},
            {h:"Elasticity of Demand", kicker:"Unit 2 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Price Elasticity (elastic/inelastic/unit elastic — with graphs of differently sloped demand curves); Income Elasticity (normal vs inferior goods); Cross-Price Elasticity (substitutes vs complements); and numerical problems on elasticity measurement.</p></div>`},
            {topicStart:"eco-u2-supply-elasticity", title:"Elasticity of Supply and Comparative Statics", icon:"↕️",
             desc:"How quickly producers respond to price changes; and what happens to equilibrium when demand or supply shifts (Price Ceiling, Price Floor)."},
            {h:"Supply Elasticity and Comparative Statics", kicker:"Unit 2 · Topic 3", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Elasticity of Supply with numerical problems; Comparative Statics — how shifts in demand/supply change equilibrium; Price Ceiling (maximum price — why it creates shortage); Price Floor (minimum price — why it creates surplus) with real Indian examples (MSP for wheat, rent control).</p></div>`},
            {topicStart:"eco-u2-utility", title:"Cardinal Utility and the Law of Diminishing Marginal Utility", icon:"🧠",
             desc:"How economists measure satisfaction; why the first slice of pizza gives more pleasure than the fifth; and consumer equilibrium using marginal utility analysis."},
            {h:"Cardinal Utility Theory", kicker:"Unit 2 · Topic 4", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Utility and Marginal Utility; Total Utility vs Marginal Utility curves (with graph — why MU curve slopes downward); Law of Diminishing Marginal Utility with real examples; Consumer Equilibrium (MU/Price ratio equilisation); and derivation of the demand curve from MU analysis.</p></div>`},
            {topicStart:"eco-u2-indifference", title:"Indifference Curve Analysis and Consumer Equilibrium", icon:"🔄",
             desc:"The ordinal approach to consumer behaviour — indifference curves, their properties, the budget line, and how a rational consumer maximises utility."},
            {h:"Indifference Curve Analysis", kicker:"Unit 2 · Topic 5", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Indifference Curves and the Indifference Map (with graph — axes, what each IC represents, why they're convex); Budget Constraint / Budget Line (income and relative prices); Consumer Equilibrium (tangency of IC and budget line); Shifts in budget line; and Income and Substitution Effects.</p></div>`}
          ],
          sets:[
            {label:"Set 1 — Foundation", mix:"15/9/6", questions:[]},
            {label:"Set 2", mix:"14/9/7", questions:[]},
            {label:"Set 3", mix:"13/9/8", questions:[]},
            {label:"Set 4", mix:"12/9/9", questions:[]},
            {label:"Set 5", mix:"11/9/10",questions:[]},
            {label:"Set 6", mix:"10/9/11",questions:[]},
            {label:"Set 7", mix:"10/9/11",questions:[]},
            {label:"Set 8", mix:"9/9/12", questions:[]},
            {label:"Set 9", mix:"9/9/12", questions:[]},
            {label:"Set 10",mix:"9/9/12", questions:[]}
          ]
        }]
      },

      /* ─── UNIT 3: Producer Behaviour ─────────────────────────── */
      {id:"eco-u3", title:"Producer Behaviour — Production, Cost and Revenue", marks:8,
        syllabus:["Short-run and Long-run Production Function; Law of Variable Proportions","Returns to Scale; Economies and Diseconomies of Scale","Concepts of Cost: STC, TVC, TFC, SAC, SMC, LTC, LAC, LMC, Implicit Cost, Opportunity Cost","Concepts of Revenue and Profit: TR, AR, MR, and the AR-MR relationship"],
        topics:[{
          learn:[
            {topicStart:"eco-u3-production", title:"Production Function — Short Run and Long Run", icon:"🏭",
             desc:"What a production function is; short-run vs long-run; total product, average product and marginal product; and the Law of Variable Proportions with its three stages."},
            {h:"Production Function and Law of Variable Proportions", kicker:"Unit 3 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: The Production Function (Q = f(L, K)); Short Run vs Long Run; Total Product (TP), Average Product (AP), Marginal Product (MP) with graphs; Law of Variable Proportions — three stages with TP, AP, MP curves on the same graph, explaining WHY AP and MP first rise then fall.</p></div>`},
            {topicStart:"eco-u3-returns", title:"Returns to Scale and Economies of Scale", icon:"📐",
             desc:"What happens when ALL inputs are increased proportionally — increasing, constant and decreasing returns to scale; and why large firms often have lower costs per unit."},
            {h:"Returns to Scale and Economies of Scale", kicker:"Unit 3 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Returns to Scale — Increasing, Constant, Decreasing (IRS, CRS, DRS) with PPC-style graphs; Economies of Scale — why larger firms have lower average costs; Types: internal vs external economies; Diseconomies of Scale — when firms become too large. Real Indian examples (Reliance Industries, AMUL).</p></div>`},
            {topicStart:"eco-u3-cost", title:"Concepts of Cost — STC, SAC, SMC, LTC, LAC, LMC", icon:"💰",
             desc:"Fixed vs variable costs; how short-run and long-run average cost curves behave; the U-shape of SAC and the L-shape of LAC; and what opportunity cost and implicit cost really mean."},
            {h:"Concepts of Cost", kicker:"Unit 3 · Topic 3", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: TFC, TVC, STC; AFC, AVC, SAC, SMC — with graphs showing their shapes and relationships; WHY SAC is U-shaped (LAC of Variable Proportions); LTC, LAC, LMC — the Long-Run Envelope Curve; Opportunity Cost (economic cost vs accounting cost); Implicit Costs (owner's own inputs).</p></div>`},
            {topicStart:"eco-u3-revenue", title:"Revenue and Profit — TR, AR, MR and the Profit Motive", icon:"📊",
             desc:"Total Revenue, Average Revenue and Marginal Revenue; how they relate to price and elasticity; the concept of profit; normal profit vs supernormal profit."},
            {h:"Revenue and Profit", kicker:"Unit 3 · Topic 4", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: TR, AR, MR — definitions and relationships; AR = Price (under perfect competition); MR curve lies below AR curve (with graph) under monopoly; The AR-MR relationship and elasticity; Gross Profit and Net Profit; Normal Profit vs Supernormal Profit; Profit as the return to entrepreneurship.</p></div>`}
          ],
          sets:[
            {label:"Set 1 — Foundation", mix:"15/9/6", questions:[]},
            {label:"Set 2", mix:"14/9/7", questions:[]},
            {label:"Set 3", mix:"13/9/8", questions:[]},
            {label:"Set 4", mix:"12/9/9", questions:[]},
            {label:"Set 5", mix:"11/9/10",questions:[]},
            {label:"Set 6", mix:"10/9/11",questions:[]},
            {label:"Set 7", mix:"10/9/11",questions:[]},
            {label:"Set 8", mix:"9/9/12", questions:[]},
            {label:"Set 9", mix:"9/9/12", questions:[]},
            {label:"Set 10",mix:"9/9/12", questions:[]}
          ]
        }]
      },

      /* ─── UNIT 4: Introduction to Statistics & Data ───────────── */
      {id:"eco-u4", title:"Introduction to Statistics and Data", marks:4,
        syllabus:["Meaning, scope and importance of Statistics in Economics","Types of Data: Primary vs Secondary; Time Series vs Cross-Section; Qualitative vs Quantitative","Features of a Good Questionnaire","Data Sources for the Indian Economy"],
        topics:[{
          learn:[
            {topicStart:"eco-u4-stats", title:"Meaning, Scope and Importance of Statistics", icon:"🔢",
             desc:"What Statistics means in Economics; why data is the foundation of economic analysis; and how statistical tools help answer economic questions."},
            {h:"Meaning, Scope and Importance of Statistics", kicker:"Unit 4 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Dual meaning of Statistics (plural data vs singular method); Scope in Economics and Commerce; Importance — how GDP growth rates, inflation, unemployment figures are all statistical outputs; Limitations of Statistics (averages hide inequality, data can be manipulated).</p></div>`},
            {topicStart:"eco-u4-types", title:"Types of Data and Data Collection Methods", icon:"📋",
             desc:"Primary vs secondary data; time series vs cross-section data; qualitative vs quantitative; and how to design a good questionnaire."},
            {h:"Types of Data and Collection Methods", kicker:"Unit 4 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Primary Data (original, collected first-hand) vs Secondary Data (already collected by others); Time Series data (same variable across time — India's GDP from 2000-2024) vs Cross-Section data (same time, different units — GDP of 10 states in 2023); Qualitative vs Quantitative; Features of a Good Questionnaire; Data Sources for Indian Economy (NSO, RBI, PLFS, Census).</p></div>`}
          ],
          sets:[
            {label:"Set 1 — Foundation", mix:"12/6/4", questions:[]},
            {label:"Set 2", mix:"12/6/4", questions:[]},
            {label:"Set 3", mix:"11/6/5", questions:[]},
            {label:"Set 4", mix:"10/7/5", questions:[]},
            {label:"Set 5", mix:"10/7/5", questions:[]}
          ]
        }]
      },

      /* ─── UNIT 5: Representation of Data ─────────────────────── */
      {id:"eco-u5", title:"Organisation and Representation of Data", marks:8,
        syllabus:["Classification of Data: Continuous and Discrete Variables; frequency distributions","Textual and Tabular Presentation of Data","Graphical Representation: Bar Chart, Histogram, Frequency Polygon","Pie Chart, Ogive (Cumulative Frequency Curve), Arithmetic Line Graph"],
        topics:[{
          learn:[
            {topicStart:"eco-u5-classify", title:"Classification of Data and Frequency Distributions", icon:"🗂️",
             desc:"Discrete vs continuous variables; how to organise raw data into frequency distributions; class intervals, class boundaries and class midpoints."},
            {h:"Classification and Frequency Distribution", kicker:"Unit 5 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Discrete Variables (countable — number of children) vs Continuous Variables (measurable — height, weight, income); Frequency Distribution Tables for both; Class Width, Class Midpoint, Class Boundaries; Relative and Cumulative Frequency; how to construct a good frequency table from raw data.</p></div>`},
            {topicStart:"eco-u5-tabular", title:"Textual and Tabular Presentation of Data", icon:"📄",
             desc:"Presenting data in words and in well-structured tables; the components of a good statistical table; and why tabular form is more efficient than textual description."},
            {h:"Textual and Tabular Presentation", kicker:"Unit 5 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Textual Presentation (data described in words — limitations); Tabular Presentation — parts of a table (title, stub, caption, body, footnote); Attributes of a Good Table; Constructing frequency tables; Bivariate frequency tables.</p></div>`},
            {topicStart:"eco-u5-graphs", title:"Bar Charts, Histograms and Frequency Polygon", icon:"📊",
             desc:"How to construct and read bar charts, histograms and frequency polygons — and the crucial difference between a bar chart and a histogram."},
            {h:"Bar Charts, Histograms and Frequency Polygon", kicker:"Unit 5 · Topic 3", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Simple, Multiple and Subdivided Bar Charts (with fully labelled SVG examples); Histogram — why bars touch (continuous data); Frequency Polygon — connecting midpoints; Frequency Bar Diagram; The KEY difference: Bar Chart is for discrete/categorical data; Histogram is for continuous data grouped in class intervals.</p></div>`},
            {topicStart:"eco-u5-piechart", title:"Pie Charts, Ogive and Line Graphs", icon:"🥧",
             desc:"Circular representation of parts; the cumulative frequency curve and how to use it to find median and quartiles graphically; and arithmetic line graphs for time series."},
            {h:"Pie Charts, Ogive and Arithmetic Line Graph", kicker:"Unit 5 · Topic 4", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Pie Chart construction (degrees = percentage × 3.6); Ogive — Less-than and More-than Ogive curves; reading Median, Q1, Q3 graphically from the Ogive; Arithmetic Line Graph (time series — India's GDP growth over years); Multiple Line Graphs; Frequency Curve (smoothed histogram).</p></div>`}
          ],
          sets:[
            {label:"Set 1 — Foundation", mix:"15/9/6", questions:[]},
            {label:"Set 2", mix:"14/9/7", questions:[]},
            {label:"Set 3", mix:"13/9/8", questions:[]},
            {label:"Set 4", mix:"12/9/9", questions:[]},
            {label:"Set 5", mix:"11/9/10",questions:[]},
            {label:"Set 6", mix:"10/9/11",questions:[]},
            {label:"Set 7", mix:"10/9/11",questions:[]},
            {label:"Set 8", mix:"9/9/12", questions:[]},
            {label:"Set 9", mix:"9/9/12", questions:[]},
            {label:"Set 10",mix:"9/9/12", questions:[]}
          ]
        }]
      },

      /* ─── UNIT 6: Measures of Central Tendency ───────────────── */
      {id:"eco-u6", title:"Measures of Central Tendency", marks:8,
        syllabus:["Arithmetic Mean — direct, short-cut and step-deviation methods for individual, discrete and continuous series","Geometric Mean — calculation and uses","Median — individual, discrete and continuous series; Partition Values — Quartiles, Deciles, Percentiles (definition only)","Mode — individual, discrete and continuous series; Relationship between Mean, Median and Mode"],
        topics:[{
          learn:[
            {topicStart:"eco-u6-mean", title:"Arithmetic Mean — Calculation and Properties", icon:"➕",
             desc:"The most widely used average — three methods for calculating AM for individual, discrete and continuous frequency series; properties and merits/demerits."},
            {h:"Arithmetic Mean", kicker:"Unit 6 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: AM for Individual Series (direct method); AM for Discrete Frequency Series; AM for Continuous Frequency Series — Direct, Short-Cut (Assumed Mean) and Step-Deviation methods (with worked examples); Properties of AM; Merits and Demerits; Combined Mean formula.</p></div>`},
            {topicStart:"eco-u6-geometric", title:"Geometric Mean — Calculation and Uses", icon:"✖️",
             desc:"When to use geometric mean instead of arithmetic mean — particularly for growth rates, index numbers and ratios."},
            {h:"Geometric Mean", kicker:"Unit 6 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: GM definition and calculation (nth root of product of n values); Log method for calculation; GM for grouped data; Uses of GM — average growth rates, index numbers; Merits and demerits; Real example: average annual GDP growth rate calculation using GM vs AM.</p></div>`},
            {topicStart:"eco-u6-median", title:"Median, Quartiles, Deciles and Percentiles", icon:"📍",
             desc:"The positional average; calculating median for all three series types; partition values; and how to find them graphically using the Ogive."},
            {h:"Median, Quartiles, Deciles and Percentiles", kicker:"Unit 6 · Topic 3", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Median — the middle value concept; formula for Individual, Discrete and Continuous series; Interpolation formula for continuous series; Quartiles Q1 and Q3; Deciles and Percentiles (definition and formula only); Graphical determination using Ogive; Merits and demerits of Median vs Mean.</p></div>`},
            {topicStart:"eco-u6-mode", title:"Mode and Comparison of Averages", icon:"🏆",
             desc:"The most frequently occurring value; modal class and interpolation; empirical relationship between Mean, Median and Mode; when to use which average."},
            {h:"Mode and Comparison of Averages", kicker:"Unit 6 · Topic 4", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">🚧 Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Mode — most frequently occurring value; Modal class identification; Interpolation formula for continuous series; Mode for Individual and Discrete series; Empirical Relationship: Mode = 3 Median − 2 Mean; Comparison of AM, GM, Median, Mode — when to use each; Advantages and Disadvantages of Mode.</p></div>`}
          ],
          sets:[
            {label:"Set 1 — Foundation", mix:"15/9/6", questions:[]},
            {label:"Set 2", mix:"14/9/7", questions:[]},
            {label:"Set 3", mix:"13/9/8", questions:[]},
            {label:"Set 4", mix:"12/9/9", questions:[]},
            {label:"Set 5", mix:"11/9/10",questions:[]},
            {label:"Set 6", mix:"10/9/11",questions:[]},
            {label:"Set 7", mix:"10/9/11",questions:[]},
            {label:"Set 8", mix:"9/9/12", questions:[]},
            {label:"Set 9", mix:"9/9/12", questions:[]},
            {label:"Set 10",mix:"9/9/12", questions:[]}
          ]
        }]
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     BUSINESS MATHEMATICS & STATISTICS
     ══════════════════════════════════════════════════════════════════════════ */
  bmaths:{
    name:"Business Maths & Statistics", code:"BMS", accent:"soon",
    units:[
      {id:"bm-u1", title:"Algebra", marks:0,
        syllabus:["Theory of Quadratic Equations — roots, nature of roots, discriminant, sum &amp; product of roots","Compound Interest — formula, effective rate, present value","Taxes — types of taxes, tax calculation, GST computation basics"], topics:[]},
      {id:"bm-u2", title:"Statistics", marks:0,
        syllabus:["Arithmetic Mean for Discrete Data — direct &amp; short-cut methods","Arithmetic Mean for Grouped Data — direct, short-cut, step-deviation","Mode for Discrete Data — inspection &amp; grouping","Median for Discrete Data — cumulative frequency method"], topics:[]},
      {id:"bm-u3", title:"Theory of Sets", marks:0,
        syllabus:["Meaning and types of sets — empty, finite, infinite, equal, equivalent","Subset, Universal Set, Power Set","Operations on Sets — union, intersection, difference, complement","Venn Diagrams — representation and application","De Morgan's Laws"], topics:[]},
      {id:"bm-u4", title:"Trigonometry", marks:0,
        syllabus:["Trigonometrical Ratios — sin, cos, tan, cosec, sec, cot","Ratios of standard angles (0°, 30°, 45°, 60°, 90°)","Trigonometric identities","Application problems using trigonometrical ratios"], topics:[]}
    ]
  }

}; // ← end of DATA

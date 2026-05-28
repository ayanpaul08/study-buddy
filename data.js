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
              <rect x="10" y="36" width="200" height="172" rx="10" fill="#e3eee6" stroke="#234f3b" stroke-width="1.5"/>
              <text x="110" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#234f3b">Personal Account</text>
              <text x="110" y="78" text-anchor="middle" font-size="10.5" fill="#3c4742">Accounts of persons,</text>
              <text x="110" y="91" text-anchor="middle" font-size="10.5" fill="#3c4742">firms and companies</text>
              <rect x="30" y="105" width="160" height="28" rx="6" fill="#234f3b"/>
              <text x="110" y="123" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Debit the Receiver</text>
              <rect x="30" y="139" width="160" height="28" rx="6" fill="#2f6b4f"/>
              <text x="110" y="157" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Credit the Giver</text>
              <text x="110" y="196" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">e.g. Bought from Suresh on credit:</text>
              <text x="110" y="207" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">Debit Purchases, Credit Suresh</text>
              <rect x="250" y="36" width="200" height="172" rx="10" fill="#f8f0db" stroke="#b6862c" stroke-width="1.5"/>
              <text x="350" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#8a6420">Real Account</text>
              <text x="350" y="78" text-anchor="middle" font-size="10.5" fill="#3c4742">Accounts of tangible</text>
              <text x="350" y="91" text-anchor="middle" font-size="10.5" fill="#3c4742">and intangible assets</text>
              <rect x="270" y="105" width="160" height="28" rx="6" fill="#b6862c"/>
              <text x="350" y="123" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Debit what Comes In</text>
              <rect x="270" y="139" width="160" height="28" rx="6" fill="#8a6420"/>
              <text x="350" y="157" text-anchor="middle" font-size="11.5" font-weight="600" fill="#f4efe3">Credit what Goes Out</text>
              <text x="350" y="196" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">e.g. Bought machinery for cash:</text>
              <text x="350" y="207" text-anchor="middle" font-size="10" fill="#3c4742" font-style="italic">Debit Machinery, Credit Cash</text>
              <rect x="490" y="36" width="200" height="172" rx="10" fill="#f6e2dc" stroke="#c0492f" stroke-width="1.5"/>
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
    name:"Costing & Taxation", code:"C&T", accent:"soon",
    units:[
      {id:"ct-u1", title:"Introduction to Cost Accounting", marks:0,
        syllabus:["Meaning, objectives and importance of Cost Accounting","Difference between Financial Accounting and Cost Accounting","Cost concepts — cost unit, cost centre"], topics:[]},
      {id:"ct-u2", title:"Classification of Cost & Cost Sheet", marks:0,
        syllabus:["Classification of Cost — by nature, function, behaviour and controllability","Fixed, Variable and Semi-variable costs","Preparation of Cost Sheet — format and components","Prime Cost, Works Cost, Cost of Production, Cost of Goods Sold, Total Cost"], topics:[]},
      {id:"ct-u3", title:"Introduction to Taxation & Income Tax Basics", marks:0,
        syllabus:["Introduction — meaning and types of taxes (direct and indirect)","Basic concepts and definitions under the Income Tax Act","Previous Year and Assessment Year","Gross Total Income and Total Income","Incomes which do not form part of Total Income (exempted incomes)"], topics:[]},
      {id:"ct-u4", title:"Residential Status and Incidence of Tax", marks:0,
        syllabus:["Determination of Residential Status — Resident, Non-Resident, Not Ordinarily Resident","Rules for Individual, HUF, Company","Incidence of Tax based on Residential Status","Scope of Total Income for different residential statuses"], topics:[]}
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     ECONOMICS
     ══════════════════════════════════════════════════════════════════════════ */
  economics:{
    name:"Economics", code:"ECO", accent:"soon",
    units:[
      {id:"eco-u1", title:"Introduction to Microeconomics", marks:0,
        syllabus:["Meaning and scope of Economics","Difference between Microeconomics and Macroeconomics","Basic economic problems — what, how, for whom to produce","Central problems of an economy","Production Possibility Curve (PPC)"], topics:[]},
      {id:"eco-u2", title:"Demand, Supply and Equilibrium Price", marks:0,
        syllabus:["Meaning of Demand — individual and market demand","Law of Demand — assumptions, exceptions","Determinants of Demand; shifts in demand curve","Meaning of Supply — individual and market supply","Law of Supply — assumptions","Determinants of Supply; shifts in supply curve","Market Equilibrium — determination of equilibrium price and quantity","Effects of shifts in demand and supply on equilibrium"], topics:[]},
      {id:"eco-u3", title:"Elasticity, Consumer & Production Theory", marks:0,
        syllabus:["Price Elasticity of Demand — meaning, types, measurement (percentage method)","Factors affecting Elasticity of Demand","Price Elasticity of Supply — meaning and measurement","Theory of Consumer Behaviour — utility, total &amp; marginal utility, Law of DMU","Indifference Curve approach — budget line, consumer equilibrium","Theory of Production — production function","Short-run &amp; Long-run production; Law of Variable Proportions","Returns to Scale","Cost of Production — TC, TFC, TVC, AC, MC","Revenue — TR, AR, MR; AR-MR relationship","Profit — normal and supernormal profit"], topics:[]},
      {id:"eco-u4", title:"Introduction to Statistics & Data", marks:0,
        syllabus:["Meaning, scope and importance of Statistics in Economics","Types of data — primary and secondary","Methods of collecting primary data","Sources of secondary data","Sampling methods — random and non-random"], topics:[]},
      {id:"eco-u5", title:"Representation of Data", marks:0,
        syllabus:["Classification and tabulation of data","Frequency distribution — discrete and continuous","Diagrammatic representation — bar diagrams, pie charts","Graphic representation — histogram, frequency polygon, ogive"], topics:[]},
      {id:"eco-u6", title:"Measures of Central Tendency", marks:0,
        syllabus:["Arithmetic Mean — direct, short-cut and step-deviation methods","Median — individual, discrete and continuous series","Mode — individual, discrete and continuous series","Relationship between Mean, Median and Mode"], topics:[]}
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

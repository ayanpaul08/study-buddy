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

            /* ── TOPIC 1: ACCOUNTING — MEANING, OBJECTIVES & USERS ── */
            {topicStart:"accounting", title:"Accounting — Meaning, Objectives & Users", icon:"", desc:"What accounting is, who uses it, its objectives, limitations and the three sub-fields."},
            {h:"Accounting — Meaning, Objectives & Users", kicker:"Unit 1 · Topic 1", html:`
              <p>Accounting is a systematic process of <strong>identifying, measuring, recording, classifying, summarising, interpreting and communicating</strong> financial information to its users so that informed judgements and decisions can be made.</p>
              <p>The <em>American Institute of Certified Public Accountants (AICPA)</em> defined it as "the art of recording, classifying, and summarising in a significant manner and in terms of money, transactions and events which are, in part at least, of a financial character, and interpreting the results thereof."</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Objectives of Accounting</h3>
              <table class="cmp"><thead><tr><th>#</th><th>Objective</th><th>What it means</th></tr></thead><tbody>
                <tr><td>1</td><td>Systematic record of transactions</td><td>Every financial transaction is recorded in books of account in a clear, chronological manner.</td></tr>
                <tr><td>2</td><td>Ascertain profit or loss</td><td>At the end of the period the income statement shows whether the firm earned a profit or suffered a loss.</td></tr>
                <tr><td>3</td><td>Ascertain financial position</td><td>The Balance Sheet reveals what the firm owns (assets) and owes (liabilities) at a point in time.</td></tr>
                <tr><td>4</td><td>Provide information to users</td><td>Stakeholders use the accounts to make investment, credit, and management decisions.</td></tr>
                <tr><td>5</td><td>Assist management</td><td>Accounting data helps in planning, controlling, and decision-making.</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Users of Accounting Information</h3>
              <table class="cmp"><thead><tr><th>Category</th><th>Who</th><th>What they need to know</th></tr></thead><tbody>
                <tr><td><strong>Internal</strong></td><td>Owners / Shareholders</td><td>Profitability, return on investment</td></tr>
                <tr><td></td><td>Management</td><td>Cost control, pricing, budgets</td></tr>
                <tr><td></td><td>Employees</td><td>Job security, wages, bonus prospects</td></tr>
                <tr><td><strong>External</strong></td><td>Creditors &amp; Suppliers</td><td>Ability to repay debts on time</td></tr>
                <tr><td></td><td>Banks &amp; Lenders</td><td>Creditworthiness before granting loans</td></tr>
                <tr><td></td><td>Government &amp; Tax Authorities</td><td>Accurate income for taxation; policy decisions</td></tr>
                <tr><td></td><td>Investors (potential)</td><td>Future profitability and risk</td></tr>
                <tr><td></td><td>Consumers</td><td>Whether the firm is financially sound and fair</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Limitations of Accounting</h3>
              <ul>
                <li><strong>Records only monetary transactions</strong> — non-monetary events (employee morale, brand reputation) are ignored.</li>
                <li><strong>Based on historical cost</strong> — assets shown at original cost, not current market value.</li>
                <li><strong>Affected by personal judgements</strong> — choices like depreciation method or bad-debt provisions involve estimates.</li>
                <li><strong>Ignores price-level changes</strong> — inflation makes comparisons over years misleading.</li>
                <li><strong>Window dressing</strong> — accounts can be manipulated to present a rosier picture.</li>
                <li><strong>Not an exact science</strong> — several alternative methods exist for the same item.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">The Three Sub-fields of Accounting</h3>
              <table class="cmp"><thead><tr><th>Sub-field</th><th>Focus</th><th>Audience</th></tr></thead><tbody>
                <tr><td><strong>Financial Accounting</strong></td><td>Record all transactions; prepare final accounts (P&amp;L, Balance Sheet)</td><td>External users</td></tr>
                <tr><td><strong>Cost Accounting</strong></td><td>Determine cost of products/services; control costs</td><td>Internal management</td></tr>
                <tr><td><strong>Management Accounting</strong></td><td>Interpret financial data for planning and decision-making</td><td>Internal management</td></tr>
              </tbody></table>

              <div class="example"><div class="lbl">Worked example</div>
                <p>Riya opens a bakery. She records all cash purchases of flour and sugar (financial accounting), calculates the cost per cake (cost accounting), and uses monthly profit reports to decide whether to open a second outlet (management accounting). All three sub-fields serve her — but for different purposes.</p>
              </div>
            `},

            /* ── TOPIC 2: BASIC ACCOUNTING TERMS ── */
            {topicStart:"terms", title:"Basic Accounting Terms", icon:"", desc:"Capital, drawings, assets, liabilities, revenue, expenses and all the key vocabulary of accounting."},
            {h:"Basic Accounting Terms", kicker:"Unit 1 · Topic 2", html:`
              <p>A shared vocabulary is essential in accounting. Below are the key terms you must know for Class XI and the board exam.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Business Entity &amp; Transaction</h3>
              <ul>
                <li><strong>Business Entity</strong> — The business is treated as a separate person from its owner. Personal transactions of the owner are kept out of the business books.</li>
                <li><strong>Transaction</strong> — Any event that can be expressed in money and that changes the financial position of the business (e.g., buying goods for ₹5,000).</li>
                <li><strong>Event</strong> — A happening that may or may not result in a financial transaction (e.g., signing a contract — the event; paying under it — the transaction).</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Capital &amp; Drawings</h3>
              <table class="cmp"><thead><tr><th>Term</th><th>Meaning</th><th>Effect on Capital</th></tr></thead><tbody>
                <tr><td><strong>Capital</strong></td><td>Amount invested by the owner into the business; also called Owner's Equity or Net Worth. Capital = Assets − Liabilities.</td><td>—</td></tr>
                <tr><td><strong>Additional Capital</strong></td><td>Fresh funds introduced by the owner during the year.</td><td>Increases capital</td></tr>
                <tr><td><strong>Drawings</strong></td><td>Cash or goods withdrawn by the owner for personal use.</td><td>Decreases capital</td></tr>
                <tr><td><strong>Net Profit</strong></td><td>Surplus of income over expenses during the period.</td><td>Increases capital</td></tr>
                <tr><td><strong>Net Loss</strong></td><td>Surplus of expenses over income during the period.</td><td>Decreases capital</td></tr>
              </tbody></table>
              <p style="margin-top:8px"><strong>Closing Capital Formula:</strong> Closing Capital = Opening Capital + Additional Capital + Net Profit − Drawings (or − Net Loss instead of + Net Profit)</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Assets</h3>
              <p>Assets are economic resources owned or controlled by the business that are expected to provide future economic benefit.</p>
              <table class="cmp"><thead><tr><th>Type</th><th>Meaning</th><th>Examples</th></tr></thead><tbody>
                <tr><td><strong>Fixed Assets</strong></td><td>Held for long-term use; not for resale; also called Non-current Assets.</td><td>Land, Building, Machinery, Vehicles</td></tr>
                <tr><td><strong>Current Assets</strong></td><td>Expected to be converted to cash within one year.</td><td>Cash, Debtors, Stock, Prepaid expenses</td></tr>
                <tr><td><strong>Liquid Assets</strong></td><td>Cash or near-cash (quickly convertible).</td><td>Cash, Bank balance, Short-term investments</td></tr>
                <tr><td><strong>Tangible Assets</strong></td><td>Have physical existence.</td><td>Building, Furniture, Stock</td></tr>
                <tr><td><strong>Intangible Assets</strong></td><td>No physical form but have value.</td><td>Goodwill, Patents, Trademarks, Copyrights</td></tr>
                <tr><td><strong>Fictitious Assets</strong></td><td>Not real assets; deferred losses or expenses shown on the asset side.</td><td>Preliminary expenses, Discount on issue of shares</td></tr>
                <tr><td><strong>Wasting Assets</strong></td><td>Natural resources that deplete with use.</td><td>Mines, Quarries, Oil wells</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Liabilities</h3>
              <p>Liabilities are obligations owed by the business to outsiders that require future payment.</p>
              <table class="cmp"><thead><tr><th>Type</th><th>Meaning</th><th>Examples</th></tr></thead><tbody>
                <tr><td><strong>Long-term / Non-current</strong></td><td>Payable after more than one year.</td><td>Long-term bank loans, Debentures</td></tr>
                <tr><td><strong>Current / Short-term</strong></td><td>Payable within one year.</td><td>Creditors, Bank overdraft, Outstanding expenses</td></tr>
                <tr><td><strong>Contingent Liabilities</strong></td><td>Potential obligations depending on a future event; NOT recorded in books — shown as a note.</td><td>Pending court case, Bills discounted</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Debtors, Creditors &amp; Trade Payables</h3>
              <ul>
                <li><strong>Debtors (Trade Receivables)</strong> — Persons or firms who owe money to the business for goods/services sold on credit. They are current assets.</li>
                <li><strong>Creditors (Trade Payables)</strong> — Persons or firms to whom the business owes money for goods/services purchased on credit. They are current liabilities.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Revenue, Income &amp; Expenses</h3>
              <table class="cmp"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
                <tr><td><strong>Revenue</strong></td><td>Gross income earned from the main business activities (sales, fees, commission earned).</td></tr>
                <tr><td><strong>Income</strong></td><td>Broader term — all earnings including revenue and non-operating gains (rent received, interest received).</td></tr>
                <tr><td><strong>Expense</strong></td><td>Cost incurred to earn revenue in the current period. Examples: rent, salaries, electricity.</td></tr>
                <tr><td><strong>Expenditure</strong></td><td>Spending that may relate to current period (expense) or future periods (capital expenditure, prepaid expense).</td></tr>
                <tr><td><strong>Profit</strong></td><td>Revenue − Expenses (when positive).</td></tr>
                <tr><td><strong>Loss</strong></td><td>Expenses − Revenue (when expenses exceed revenue).</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Purchases, Sales &amp; Stock</h3>
              <table class="cmp"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
                <tr><td><strong>Purchases</strong></td><td>Goods bought by the business for resale or production. Can be cash or credit.</td></tr>
                <tr><td><strong>Sales</strong></td><td>Goods sold to customers. Can be cash or credit.</td></tr>
                <tr><td><strong>Goods</strong></td><td>Items in which the business deals (trades). Same items are "purchases" when bought and "sales" when sold.</td></tr>
                <tr><td><strong>Opening Stock</strong></td><td>Unsold stock at the beginning of the accounting period.</td></tr>
                <tr><td><strong>Closing Stock</strong></td><td>Unsold stock at the end of the accounting period; carried forward as Opening Stock for the next year.</td></tr>
                <tr><td><strong>Returns Inward</strong></td><td>Goods returned by customers (Sales Returns). Reduces sales.</td></tr>
                <tr><td><strong>Returns Outward</strong></td><td>Goods returned to suppliers (Purchase Returns). Reduces purchases.</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Discount</h3>
              <table class="cmp"><thead><tr><th></th><th>Trade Discount</th><th>Cash Discount</th></tr></thead><tbody>
                <tr><td><strong>Purpose</strong></td><td>Encourage bulk purchases; given on list price</td><td>Encourage prompt payment</td></tr>
                <tr><td><strong>When given</strong></td><td>At time of sale</td><td>When payment is made early</td></tr>
                <tr><td><strong>Recorded in books?</strong></td><td>No — invoice shows net price only</td><td>Yes — recorded as Discount Allowed (expense) or Discount Received (income)</td></tr>
              </tbody></table>

              <div class="example"><div class="lbl">Worked example</div>
                <p>Ajay sells goods listed at ₹10,000 with 10% trade discount and 2% cash discount. Invoice price = ₹10,000 − ₹1,000 = <strong>₹9,000</strong> (trade discount not recorded). If the buyer pays within 7 days: cash discount = ₹9,000 × 2% = ₹180. Ajay records: Cash received = ₹8,820; Discount Allowed = ₹180.</p>
              </div>
            `},

            /* ── TOPIC 3: GAAP & BASIC ACCOUNTING CONCEPTS ── */
            {topicStart:"gaap", title:"GAAP & Basic Accounting Concepts", icon:"", desc:"The 15 fundamental concepts and conventions that form the foundation of accounting practice."},
            {h:"GAAP & Basic Accounting Concepts", kicker:"Unit 1 · Topic 3", html:`
              <p><strong>GAAP (Generally Accepted Accounting Principles)</strong> are the standard frameworks, concepts, conventions and guidelines that guide how accountants record and report financial information. They ensure consistency, comparability, and reliability across firms and periods.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">1. Business Entity Concept</h3>
              <p>The business is treated as a <strong>separate legal entity</strong> from its owner(s). Personal transactions of the proprietor are not mixed with business transactions. The business "owes" capital to the owner.</p>
              <div class="example"><div class="lbl">Application</div><p>If Meera withdraws ₹20,000 cash for personal use, this is recorded as Drawings (not an expense). It reduces capital, not profit.</p></div>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">2. Money Measurement Concept</h3>
              <p>Only transactions that can be <strong>expressed in monetary terms</strong> are recorded. Non-monetary events (disputes, reputation, morale) are ignored, even if highly significant.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">3. Going Concern Concept</h3>
              <p>It is assumed that the business will <strong>continue to operate indefinitely</strong> into the future unless there is strong evidence to the contrary. This justifies showing assets at cost rather than forced-sale (liquidation) value.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">4. Accounting Period Concept</h3>
              <p>The indefinite life of the business is divided into <strong>regular, equal time periods</strong> (usually 12 months) called accounting periods, so that periodic reports can be prepared and performance assessed. In India, the financial year runs 1 April to 31 March.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">5. Historical Cost (Cost) Concept</h3>
              <p>Assets are initially recorded at their <strong>original acquisition cost</strong> (not market value). This provides an objective, verifiable basis for measurement. Over time, depreciation reduces the book value of fixed assets.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">6. Dual Aspect Concept</h3>
              <p>Every transaction has <strong>two effects</strong> — a debit and a credit of equal amount. This maintains the accounting equation: <strong>Assets = Liabilities + Capital (Owner's Equity)</strong>. This is the foundation of double-entry bookkeeping.</p>
              <div class="example"><div class="lbl">Application</div><p>Bought machinery for ₹50,000 cash: Machinery (asset) ↑ by ₹50,000; Cash (asset) ↓ by ₹50,000. Both sides of the equation remain balanced.</p></div>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">7. Revenue Recognition (Realisation) Concept</h3>
              <p>Revenue is recognised <strong>when it is earned</strong> (goods are delivered or service is rendered), NOT when cash is received. For credit sales, revenue is recorded at the time of sale even if payment comes later.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">8. Accrual Concept</h3>
              <p>Income and expenses are recognised in the period in which they are <strong>earned or incurred</strong>, regardless of when cash changes hands. This is the basis of mercantile/accrual accounting.</p>
              <div class="example"><div class="lbl">Application</div><p>Salary of ₹40,000 for March due on 31 March but paid on 5 April: the expense is recorded in March's accounts as Outstanding Salary (a current liability).</p></div>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">9. Matching Concept</h3>
              <p>Expenses must be matched against the <strong>revenue they helped generate</strong> in the same accounting period. All costs incurred to earn the period's revenue — whether paid or not — are deducted from that period's revenue.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">10. Objectivity (Verifiable Evidence) Concept</h3>
              <p>Accounting entries must be based on <strong>objective, verifiable evidence</strong> — documentary proof such as invoices, receipts, contracts, and vouchers. This reduces personal bias.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">11. Full Disclosure Concept</h3>
              <p>All <strong>material information</strong> relevant to users must be disclosed in the financial statements — either in the main statements or in the notes to accounts. Nothing significant should be hidden.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">12. Consistency Concept</h3>
              <p>Once an accounting method is adopted, it should be <strong>applied consistently</strong> from period to period. Changes in method should be disclosed with the reason and effect on financial statements.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">13. Conservatism (Prudence) Concept</h3>
              <p>"<strong>Anticipate no profit, but provide for all possible losses.</strong>" When in doubt, assets and income should not be overstated, and liabilities and losses should not be understated. Example: stock is valued at Cost or Net Realisable Value, whichever is lower.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">14. Materiality Concept</h3>
              <p>Only items that are <strong>significant enough to influence decisions</strong> of users need to be separately disclosed. Trivial items may be grouped or ignored for the sake of clarity (e.g., pens bought for office use are expensed immediately, not capitalised).</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">15. Timeliness</h3>
              <p>Financial information must be provided to users <strong>within a relevant time frame</strong>. Information that arrives too late loses its usefulness for decision-making, even if accurate.</p>

              <div class="casebox"><div class="lbl">Case in point</div>
                <p>A firm uses SLM depreciation for five years consistently (Consistency concept). Mid-year, it discovers a machine is worth ₹60,000 more than book value — it does NOT write it up (Conservatism). However, the increased market value is noted in the annual report (Full Disclosure). These three concepts work together to produce reliable, comparable accounts.</p>
              </div>
            `},

            /* ── TOPIC 4: SYSTEM OF ACCOUNTING ── */
            {topicStart:"system", title:"System of Accounting", icon:"", desc:"Single entry, double entry, golden rules, accounting equation and types of accounts."},
            {h:"System of Accounting", kicker:"Unit 1 · Topic 4", html:`
              <h3 style="color:var(--green-deep);margin:10px 0 10px;padding-top:0">Single Entry System</h3>
              <p>Under single entry, only <strong>one aspect</strong> of a transaction is recorded (usually the cash or personal account effect). It is incomplete, unscientific and not suitable for large businesses.</p>
              <table class="cmp"><thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody>
                <tr><td>Simple and inexpensive</td><td>Incomplete records — no nominal or real accounts</td></tr>
                <tr><td>Suitable for very small traders</td><td>Profit cannot be accurately ascertained</td></tr>
                <tr><td>Less clerical work</td><td>No Trial Balance possible; errors undetected</td></tr>
                <tr><td></td><td>Not acceptable to banks, tax authorities or courts</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Double Entry System</h3>
              <p>Every transaction is recorded in <strong>two accounts</strong> — one is debited and another is credited for the same amount. This system is complete, scientific, and self-balancing.</p>
              <p><strong>Key features:</strong> Every debit has a corresponding credit · The Trial Balance checks arithmetical accuracy · Complete information for final accounts · Detects and prevents errors and frauds.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Types of Accounts</h3>
              <table class="cmp"><thead><tr><th>Type</th><th>Meaning</th><th>Examples</th></tr></thead><tbody>
                <tr><td><strong>Personal Account</strong></td><td>Accounts of persons, firms, companies, banks</td><td>Ram's A/c, Bank A/c, Capital A/c, Drawings A/c</td></tr>
                <tr><td><strong>Real Account</strong></td><td>Accounts of tangible and intangible assets</td><td>Cash A/c, Machinery A/c, Goodwill A/c, Stock A/c</td></tr>
                <tr><td><strong>Nominal Account</strong></td><td>Accounts of expenses, losses, incomes and gains</td><td>Salary A/c, Rent A/c, Sales A/c, Commission Received A/c</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Golden Rules of Debit and Credit</h3>
              <table class="cmp"><thead><tr><th>Type of Account</th><th>Debit (Dr)</th><th>Credit (Cr)</th></tr></thead><tbody>
                <tr><td><strong>Personal Account</strong></td><td>The Receiver</td><td>The Giver</td></tr>
                <tr><td><strong>Real Account</strong></td><td>What comes in</td><td>What goes out</td></tr>
                <tr><td><strong>Nominal Account</strong></td><td>Expenses &amp; Losses</td><td>Incomes &amp; Gains</td></tr>
              </tbody></table>

              <div class="example"><div class="lbl">Applying the Golden Rules</div>
                <p><strong>Transaction:</strong> Paid salary ₹25,000 in cash.<br>
                Salary A/c → Nominal → Expense → <strong>Debit</strong> ₹25,000<br>
                Cash A/c → Real → Goes out → <strong>Credit</strong> ₹25,000</p>
                <p><strong>Transaction:</strong> Purchased furniture ₹30,000 on credit from Raj Furniture.<br>
                Furniture A/c → Real → Comes in → <strong>Debit</strong> ₹30,000<br>
                Raj Furniture A/c → Personal → Giver → <strong>Credit</strong> ₹30,000</p>
              </div>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">The Accounting Equation</h3>
              <p style="font-size:18px;font-weight:700;text-align:center;color:var(--green-deep);padding:14px;background:var(--green-soft);border-radius:10px;margin:10px 0">Assets = Liabilities + Capital (Owner's Equity)</p>
              <p>This equation is always in balance. Every transaction changes two or more elements but the equation remains balanced (Dual Aspect Concept).</p>
              <table class="cmp"><thead><tr><th>Transaction</th><th>Effect</th><th>Equation stays balanced?</th></tr></thead><tbody>
                <tr><td>Owner invests ₹1,00,000 cash</td><td>Cash (A) ↑ ₹1,00,000; Capital (C) ↑ ₹1,00,000</td><td>Yes</td></tr>
                <tr><td>Bought goods for ₹20,000 cash</td><td>Stock (A) ↑ ₹20,000; Cash (A) ↓ ₹20,000</td><td>Yes</td></tr>
                <tr><td>Borrowed ₹50,000 from bank</td><td>Cash (A) ↑ ₹50,000; Loan (L) ↑ ₹50,000</td><td>Yes</td></tr>
                <tr><td>Sold goods (cost ₹8,000) for ₹12,000 cash</td><td>Cash ↑ ₹12,000; Stock ↓ ₹8,000; Profit/Capital ↑ ₹4,000</td><td>Yes</td></tr>
              </tbody></table>
            `},

            /* ── TOPIC 5: BASIS OF ACCOUNTING ── */
            {topicStart:"basis", title:"Basis of Accounting", icon:"", desc:"Cash basis, accrual (mercantile) basis, and hybrid basis — how and when transactions are recorded."},
            {h:"Basis of Accounting", kicker:"Unit 1 · Topic 5", html:`
              <p>The <strong>basis of accounting</strong> determines <em>when</em> revenues and expenses are recognised — at the time of cash movement, or when they are earned/incurred regardless of cash.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 10px;padding-top:0">1. Cash Basis of Accounting</h3>
              <p>Under cash basis, transactions are recorded <strong>only when cash is actually received or paid</strong>. Revenues are recorded when cash comes in; expenses when cash goes out.</p>
              <table class="cmp"><thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody>
                <tr><td>Simple — no adjustments needed</td><td>Profit/loss is not a true measure of performance</td></tr>
                <tr><td>Easy to verify — every entry has a cash receipt/payment</td><td>Accrued income &amp; outstanding expenses are ignored</td></tr>
                <tr><td>Suitable for professionals (doctors, lawyers) who record fees when received</td><td>Does not match revenues with related expenses</td></tr>
                <tr><td></td><td>Not recognised by the Companies Act or Income Tax Act for most businesses</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">2. Accrual (Mercantile) Basis of Accounting</h3>
              <p>Under the accrual basis, income is recognised <strong>when it is earned</strong> and expenses when they are <strong>incurred</strong>, regardless of when cash changes hands. This is the most widely used basis and is required by the Companies Act for companies.</p>
              <table class="cmp"><thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody>
                <tr><td>Shows true and fair profit/loss for the period</td><td>More complex — requires adjustments for outstanding/prepaid items</td></tr>
                <tr><td>Matches revenues with the expenses that produced them</td><td>Involves estimates which may be inaccurate</td></tr>
                <tr><td>Recognised by Companies Act 2013 and required by Accounting Standards</td><td>Requires skilled bookkeepers</td></tr>
                <tr><td>Allows comparison across periods and firms</td><td>Cash position may not be clear from profit figure alone</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">3. Hybrid (Mixed) Basis</h3>
              <p>A <strong>combination</strong> of cash and accrual: income may be recorded on cash basis while expenses are recorded on accrual basis, or vice versa. This can lead to inconsistencies and is generally not recommended for formal financial reporting.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Comparison: Cash vs Accrual</h3>
              <table class="cmp"><thead><tr><th>Aspect</th><th>Cash Basis</th><th>Accrual Basis</th></tr></thead><tbody>
                <tr><td>When is revenue recognised?</td><td>When cash received</td><td>When earned (sale/service complete)</td></tr>
                <tr><td>When is expense recognised?</td><td>When cash paid</td><td>When incurred (benefit received)</td></tr>
                <tr><td>Adjustments needed?</td><td>No</td><td>Yes (outstanding, prepaid, accruals)</td></tr>
                <tr><td>Legal requirement for companies?</td><td>No</td><td>Yes — Companies Act 2013</td></tr>
                <tr><td>Reflects true financial position?</td><td>No</td><td>Yes</td></tr>
                <tr><td>Common users</td><td>Small traders, professionals</td><td>Companies, large businesses</td></tr>
              </tbody></table>

              <div class="example"><div class="lbl">Worked example</div>
                <p><strong>Scenario:</strong> A firm earns ₹1,20,000 in sales for March. Of this, ₹80,000 is received in March and ₹40,000 will be received in April. Salary of ₹30,000 for March is paid on 5 April.</p>
                <p><strong>Cash basis profit for March:</strong> Revenue = ₹80,000 (received); Expense = ₹0 (not paid yet). Profit = ₹80,000.</p>
                <p><strong>Accrual basis profit for March:</strong> Revenue = ₹1,20,000 (earned); Expense = ₹30,000 (incurred). Profit = ₹90,000.</p>
                <p>The accrual basis gives a truer picture of March's performance.</p>
              </div>
            `},

            /* ── TOPIC 6: VALUATION PRINCIPLES ── */
            {topicStart:"valuation", title:"Valuation Principles & Accounting Estimates", icon:"", desc:"How assets and liabilities are measured — cost concept, NRV, depreciation, provisions and estimates."},
            {h:"Valuation Principles & Accounting Estimates", kicker:"Unit 1 · Topic 6", html:`
              <p>Valuation is the process of assigning monetary amounts to the elements of financial statements. Several principles guide how assets and liabilities should be measured and reported.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 10px;padding-top:0">Historical Cost Principle</h3>
              <p>Assets are recorded at their <strong>original purchase cost</strong> at the date of acquisition, including all costs to bring the asset to its intended use (purchase price + freight + installation). Market value changes are NOT reflected in the books under historical cost accounting.</p>
              <div class="example"><div class="lbl">Application</div><p>A machine purchased for ₹5,00,000 two years ago has a current market value of ₹7,50,000. It remains on the books at ₹5,00,000 less accumulated depreciation — NOT at market value.</p></div>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Valuation of Stock (Inventory)</h3>
              <p>Stock is valued at <strong>Cost or Net Realisable Value (NRV), whichever is lower</strong> (Conservatism concept). This prevents overstatement of assets and profit.</p>
              <ul>
                <li><strong>Cost</strong> = Purchase price + Freight + Import duties − Trade discounts</li>
                <li><strong>NRV</strong> = Estimated selling price − Estimated costs of completion and selling</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Depreciation</h3>
              <p>Depreciation is the <strong>systematic allocation of the cost of a fixed tangible asset</strong> over its useful life. It reflects the consumption of economic benefits and must be charged to match against the revenues the asset helps generate (Matching concept).</p>
              <table class="cmp"><thead><tr><th>Method</th><th>Formula</th><th>Nature</th></tr></thead><tbody>
                <tr><td><strong>Straight Line Method (SLM / Fixed Instalment)</strong></td><td>Depreciation = (Cost − Scrap Value) ÷ Useful Life</td><td>Equal depreciation every year</td></tr>
                <tr><td><strong>Written Down Value Method (WDV / Diminishing Balance)</strong></td><td>Depreciation = WDV at start of year × Rate %</td><td>Higher charge in early years; decreasing over time</td></tr>
              </tbody></table>
              <div class="example"><div class="lbl">SLM example</div><p>Machine: Cost ₹1,00,000 · Scrap ₹10,000 · Life 9 years. Annual depreciation = (₹1,00,000 − ₹10,000) ÷ 9 = <strong>₹10,000 per year</strong>. Book value reduces by ₹10,000 each year.</p></div>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Provisions &amp; Reserves</h3>
              <table class="cmp"><thead><tr><th>Aspect</th><th>Provision</th><th>Reserve</th></tr></thead><tbody>
                <tr><td><strong>Nature</strong></td><td>Created for a known or probable liability/loss of uncertain amount</td><td>Appropriation from profit for strengthening the firm</td></tr>
                <tr><td><strong>Compulsory?</strong></td><td>Yes — must be created if liability is likely</td><td>Discretionary (except statutory reserves)</td></tr>
                <tr><td><strong>Effect on profit</strong></td><td>Charged to P&amp;L; reduces profit</td><td>Appropriated from profit after tax</td></tr>
                <tr><td><strong>Examples</strong></td><td>Provision for Bad Debts, Provision for Depreciation</td><td>General Reserve, Capital Reserve, Dividend Equalisation Reserve</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Provision for Bad &amp; Doubtful Debts</h3>
              <p>At year end, it is likely that some debtors will not pay. A <strong>provision for bad debts</strong> is created as a charge to the P&amp;L account, and deducted from debtors on the Balance Sheet. This applies the Prudence (Conservatism) concept.</p>
              <p>Example: Debtors = ₹2,00,000; provision rate = 5%. Provision = ₹10,000. Balance Sheet shows Debtors at ₹1,90,000 (net of provision).</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Accounting Estimates</h3>
              <p>Some items cannot be measured precisely and require <strong>management estimates</strong>:</p>
              <ul>
                <li>Useful life of fixed assets (for depreciation)</li>
                <li>Residual (scrap) value of assets</li>
                <li>Percentage of debtors likely to default (bad debt provision)</li>
                <li>Warranty provision on products sold</li>
              </ul>
              <p>Estimates are revised when new information is available; the change is recognised prospectively (in the current and future periods).</p>
            `},

            /* ── TOPIC 7: ACCOUNTING STANDARDS ── */
            {topicStart:"standards", title:"Accounting Standards (AS & Ind AS)", icon:"", desc:"Why standards exist, the role of ICAI's ASB, key Indian AS, and the shift to Ind AS / IFRS."},
            {h:"Accounting Standards (AS & Ind AS)", kicker:"Unit 1 · Topic 7", html:`
              <p><strong>Accounting Standards (AS)</strong> are written documents issued by authoritative bodies that set the rules for how financial transactions should be recognised, measured, and disclosed in financial statements. They reduce the diversity of accounting practices and ensure comparability.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 10px;padding-top:0">Need for Accounting Standards</h3>
              <ul>
                <li><strong>Uniformity</strong> — all firms follow the same rules, making cross-company comparisons meaningful.</li>
                <li><strong>Reliability and Transparency</strong> — users can trust that financial statements present a true and fair view.</li>
                <li><strong>Prevents manipulation</strong> — reduces the scope for window dressing.</li>
                <li><strong>International recognition</strong> — standards aligned to IFRS aid foreign investment.</li>
                <li><strong>Legal basis</strong> — Companies Act 2013 mandates compliance with notified accounting standards.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Accounting Standards Board (ASB)</h3>
              <p>The <strong>Institute of Chartered Accountants of India (ICAI)</strong> established the ASB in 1977 to formulate accounting standards for India. The ASB issues Accounting Standards (AS) for non-company entities and has issued 32 standards to date.</p>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Key Accounting Standards (Indian AS)</h3>
              <table class="cmp"><thead><tr><th>AS No.</th><th>Title</th><th>Key Requirement</th></tr></thead><tbody>
                <tr><td><strong>AS 1</strong></td><td>Disclosure of Accounting Policies</td><td>Disclose all significant accounting policies in notes; any change must be disclosed.</td></tr>
                <tr><td><strong>AS 2</strong></td><td>Valuation of Inventories</td><td>Inventories valued at lower of cost or NRV; FIFO or Weighted Average cost formula.</td></tr>
                <tr><td><strong>AS 6</strong></td><td>Depreciation Accounting</td><td>Depreciation must be charged on all depreciable assets; method and rates disclosed.</td></tr>
                <tr><td><strong>AS 9</strong></td><td>Revenue Recognition</td><td>Revenue recognised when risks/rewards transferred and amount can be measured reliably.</td></tr>
                <tr><td><strong>AS 10</strong></td><td>Property, Plant &amp; Equipment</td><td>Fixed assets carried at cost less accumulated depreciation.</td></tr>
                <tr><td><strong>AS 13</strong></td><td>Accounting for Investments</td><td>Investments classified as current or long-term; valuation rules for each.</td></tr>
                <tr><td><strong>AS 26</strong></td><td>Intangible Assets</td><td>Recognised only if identifiable, controlled, and future economic benefits probable.</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Ind AS (Indian Accounting Standards)</h3>
              <p>From 2015, India has been converging its accounting standards with <strong>IFRS (International Financial Reporting Standards)</strong>. The <strong>Ministry of Corporate Affairs (MCA)</strong> has notified 41 Ind AS for certain categories of companies. Ind AS are more principle-based and closer to IFRS than the older Indian AS.</p>
              <table class="cmp"><thead><tr><th>Aspect</th><th>AS (Old)</th><th>Ind AS (IFRS-aligned)</th></tr></thead><tbody>
                <tr><td>Basis</td><td>Rule-based</td><td>Principle-based</td></tr>
                <tr><td>Valuation</td><td>Mainly historical cost</td><td>Fair value permitted in many cases</td></tr>
                <tr><td>Applicability</td><td>Non-listed companies, SMEs</td><td>Listed &amp; large companies (phased rollout)</td></tr>
                <tr><td>Global recognition</td><td>Limited</td><td>Accepted internationally</td></tr>
              </tbody></table>
            `},

            /* ── TOPIC 8: GOODS AND SERVICES TAX (GST) ── */
            {topicStart:"gst", title:"Goods and Services Tax (GST)", icon:"", desc:"India's indirect tax regime — CGST, SGST, IGST, input tax credit and its effect on accounting."},
            {h:"Goods and Services Tax (GST)", kicker:"Unit 1 · Topic 8", html:`
              <p><strong>GST (Goods and Services Tax)</strong> is a <em>destination-based, multi-stage, comprehensive indirect tax</em> levied on the supply of goods and services in India. It replaced multiple central and state taxes (VAT, Service Tax, Excise Duty, etc.) and was implemented on <strong>1 July 2017</strong> under the 101st Constitutional Amendment.</p>

              <h3 style="color:var(--green-deep);margin:20px 0 10px;padding-top:0">Components of GST</h3>
              <table class="cmp"><thead><tr><th>Component</th><th>Full Form</th><th>When applicable</th><th>Revenue goes to</th></tr></thead><tbody>
                <tr><td><strong>CGST</strong></td><td>Central Goods and Services Tax</td><td>Intra-state supply (same state)</td><td>Central Government</td></tr>
                <tr><td><strong>SGST</strong></td><td>State Goods and Services Tax</td><td>Intra-state supply (same state)</td><td>State Government</td></tr>
                <tr><td><strong>IGST</strong></td><td>Integrated Goods and Services Tax</td><td>Inter-state supply (different states) &amp; imports</td><td>Central Govt (then apportioned)</td></tr>
                <tr><td><strong>UTGST</strong></td><td>Union Territory GST</td><td>Supply within Union Territories without legislature</td><td>Central Government</td></tr>
              </tbody></table>

              <div class="example"><div class="lbl">Application — Intra vs Inter-state</div>
                <p><strong>Intra-state:</strong> A seller in West Bengal sells goods worth ₹1,00,000 + 18% GST to a buyer in West Bengal. Taxes: CGST 9% = ₹9,000 + SGST 9% = ₹9,000. Total price = ₹1,18,000.</p>
                <p><strong>Inter-state:</strong> Same seller sells to a buyer in Maharashtra. Tax: IGST 18% = ₹18,000. Total price = ₹1,18,000.</p>
              </div>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">GST Tax Slabs</h3>
              <table class="cmp"><thead><tr><th>Rate</th><th>Category</th><th>Examples</th></tr></thead><tbody>
                <tr><td><strong>0% (Exempt)</strong></td><td>Essential items</td><td>Fresh fruits, vegetables, milk, bread, books, eggs</td></tr>
                <tr><td><strong>5%</strong></td><td>Basic necessities</td><td>Packaged food, edible oil, sugar, tea, coffee, medicines</td></tr>
                <tr><td><strong>12%</strong></td><td>Standard goods</td><td>Fruit juice, processed food, business class flights, frozen meat</td></tr>
                <tr><td><strong>18%</strong></td><td>Most goods and services</td><td>Soaps, hair oil, IT services, restaurants (AC), financial services</td></tr>
                <tr><td><strong>28%</strong></td><td>Luxury and demerit goods</td><td>Cars, motorcycles, tobacco, aerated drinks, luxury hotels</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Input Tax Credit (ITC)</h3>
              <p><strong>Input Tax Credit</strong> allows a registered business to deduct the GST it paid on purchases (inputs) from the GST it collects on sales (output tax). This prevents <em>cascading effect</em> (tax on tax).</p>
              <div class="example"><div class="lbl">ITC illustration</div>
                <p>Manufacturer A buys raw materials for ₹10,00,000 + CGST ₹90,000 + SGST ₹90,000 (18% GST on intra-state). A sells finished goods for ₹15,00,000 + CGST ₹1,35,000 + SGST ₹1,35,000.</p>
                <p>ITC available = ₹90,000 CGST + ₹90,000 SGST = ₹1,80,000.</p>
                <p>Net GST payable = (₹1,35,000+₹1,35,000) − ₹1,80,000 = <strong>₹90,000</strong> (₹45,000 CGST + ₹45,000 SGST).</p>
              </div>

              <h3 style="color:var(--green-deep);margin:24px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Effect of GST on Accounting</h3>
              <ul>
                <li><strong>GST is NOT an expense</strong> for a GST-registered buyer — it is a recoverable tax (shown as "Input GST / CGST / SGST Receivable" — a current asset).</li>
                <li><strong>GST collected on sales</strong> is a liability ("Output GST / CGST / SGST Payable") — the business collects it on behalf of the government.</li>
                <li><strong>Net GST payable</strong> (Output − Input) is remitted to the government.</li>
                <li>Purchase and Sales accounts are recorded at <strong>exclusive of GST price</strong> (GST is shown separately).</li>
              </ul>

              <div class="casebox"><div class="lbl">Case in point</div>
                <p>Before GST, Kavya's textile firm paid excise duty on production, then VAT on sale, and the buyer paid service tax on delivery — taxes stacked on each other. With GST, Kavya pays 5% on fabric purchase (CGST 2.5% + SGST 2.5%), claims full ITC, and only remits the net tax on her value addition. Her compliance simplified from 11 different returns to 3 monthly GSTR filings. This is the core benefit of GST — seamless credit chain and single national market.</p>
              </div>
            `}

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
                 answer:2,
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

            {topicStart:"meaning-objectives", title:"Meaning, Objectives & Importance", icon:"",
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

            {topicStart:"fa-vs-ca", title:"Financial Accounting vs Cost Accounting", icon:"",
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

            {topicStart:"cost-concepts", title:"Cost Concepts — Cost Unit, Cost Centre", icon:"",
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
            {topicStart:"eco-u1-problem", title:"The Economic Problem — Scarcity &amp; Choice", icon:"",
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
                <rect x="160" y="66" width="140" height="56" rx="7" fill="#e3eee6" stroke="#234f3b" stroke-width="1.2"/>
                <text x="230" y="84" text-anchor="middle" font-size="10.5" font-weight="700" fill="#234f3b">D — Efficient</text>
                <text x="230" y="99" text-anchor="middle" font-size="9.5" fill="#3c4742">On the PPC: all resources</text>
                <text x="230" y="113" text-anchor="middle" font-size="9.5" fill="#3c4742">fully and efficiently used</text>
                <circle cx="268" cy="220" r="9" fill="#c0492f" stroke="white" stroke-width="2.5"/>
                <text x="272" y="217" font-size="10" fill="#c0492f" font-weight="700">H</text>
                <line x1="260" y1="228" x2="180" y2="258" stroke="#c0492f" stroke-width="1" stroke-dasharray="3,2"/>
                <rect x="100" y="248" width="156" height="48" rx="7" fill="#f6e2dc" stroke="#c0492f" stroke-width="1.2"/>
                <text x="178" y="265" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c0492f">H — Inefficient</text>
                <text x="178" y="279" text-anchor="middle" font-size="9.5" fill="#3c4742">Inside PPC: resources idle</text>
                <circle cx="492" cy="72" r="9" fill="#b6862c" stroke="white" stroke-width="2.5"/>
                <text x="496" y="69" font-size="10" fill="#b6862c" font-weight="700">G</text>
                <line x1="484" y1="72" x2="427" y2="52" stroke="#b6862c" stroke-width="1" stroke-dasharray="3,2"/>
                <rect x="305" y="36" width="118" height="48" rx="7" fill="#f8f0db" stroke="#b6862c" stroke-width="1.2"/>
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

            {topicStart:"eco-u1-systems", title:"Economic Systems — How Societies Answer the Basic Questions", icon:"",
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

            {topicStart:"eco-u1-growth", title:"Economic Growth, Development &amp; Sustainability", icon:"",
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

            {topicStart:"eco-u1-indicators", title:"Indicators of Development — Income, Poverty, Inequality &amp; Beyond", icon:"",
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
            {label:"Set 1 — Foundation", mix:"15/9/6", questions:[

                /* ── 15 EASY ── */
                {type:"standard",diff:"E",
                 q:"Scarcity in economics means:",
                 options:["A temporary shortage of goods caused by supply chain disruptions","The government's failure to provide essential public services to all citizens","Resources are always limited relative to the unlimited wants they must satisfy","Prices of goods rise so high that most people cannot afford them"],
                 answer:2,
                 explain:"Scarcity is the fundamental economic problem — resources (land, labour, capital, entrepreneurship) are always finite, while human wants are unlimited. This forces every individual, firm and government to make choices. Scarcity is universal and permanent.",
                 optionExplains:["Supply chain disruptions cause temporary shortages — that is a market problem, not the definition of scarcity in economic theory.","Government service failures are a policy concern, not the economic definition of scarcity.","Correct. Scarcity = limited resources vs unlimited wants. This forces choice and is the starting point of all economics.","High prices are a market outcome, not the definition of scarcity; even wealthy people face scarcity of time and attention."]},

                {type:"standard",diff:"E",
                 q:"Which of the following is NOT one of the three basic economic questions every society must answer?",
                 options:["What to produce?","How to produce?","When to produce?","For whom to produce?"],
                 answer:2,
                 explain:"The three universal economic questions are: What to produce? (which goods and in what quantities), How to produce? (labour-intensive or capital-intensive methods) and For whom to produce? (who receives the output). 'When to produce?' is not one of the fundamental economic problems.",
                 optionExplains:["'What to produce?' is the first fundamental economic question.","'How to produce?' is the second fundamental economic question.","Correct. 'When to produce?' is not a fundamental economic question — the three basic ones are What, How, and For Whom.","'For whom to produce?' is the third fundamental economic question."]},

                {type:"standard",diff:"E",
                 q:"The opportunity cost of making a choice is best described as:",
                 options:["The total money paid for the chosen option","The value of the next best alternative that was given up","The profit or benefit earned from the chosen option","The government tax imposed on the transaction"],
                 answer:1,
                 explain:"Opportunity cost is the value of the best alternative foregone when a choice is made. It is not necessarily a money cost — it includes time, enjoyment or any other benefit sacrificed. Every choice has an opportunity cost because resources are scarce.",
                 optionExplains:["The money paid is the financial cost, not the opportunity cost — opportunity cost is the best alternative given up.","Correct. Opportunity cost = the value of the best alternative sacrificed when a decision is made.","The benefit of the chosen option is the gain, not the opportunity cost; OC is what you give up, not what you get.","Government taxes are a separate financial concept, unrelated to opportunity cost."]},

                {type:"standard",diff:"E",
                 q:"A point ON the Production Possibility Curve (PPC) represents:",
                 options:["A level of production that is currently unattainable with existing resources","Efficient production — all available resources are fully and productively employed","Inefficient production — some resources are lying idle or wasted","The maximum output of only one of the two goods"],
                 answer:1,
                 explain:"Any point on the PPC represents a production combination where ALL resources are fully and efficiently employed. The economy cannot produce more of one good without giving up some of the other. This is the definition of productive efficiency on the frontier.",
                 optionExplains:["Unattainable points lie OUTSIDE the PPC, not on it.","Correct. Points ON the PPC are efficient — all resources are employed and there is no waste; output of one can only rise if the other falls.","Inefficient points (idle resources) lie INSIDE the PPC, not on it.","The PPC shows combinations of TWO goods — not just one. All points on the curve involve producing some of each."]},

                {type:"standard",diff:"E",
                 q:"A point INSIDE the Production Possibility Curve (PPC) indicates:",
                 options:["Inefficient production — resources are idle or being wasted","The maximum possible production of both goods simultaneously","Production beyond what the economy can currently achieve","A situation of perfect resource allocation between two goods"],
                 answer:0,
                 explain:"Points inside the PPC represent underutilisation — some resources (labour, land, capital) are idle, unemployed or being used wastefully. The economy could produce more of one or both goods by using those resources. This is productive inefficiency.",
                 optionExplains:["Correct. Inside the PPC = inefficient — some resources are not being used; moving to the PPC (outward) would improve output without extra resources.","Maximum possible production lies ON the PPC, not inside it.","Points beyond current capacity lie OUTSIDE the PPC, not inside.","Perfect resource allocation would place the economy ON the PPC, not inside it."]},

                {type:"standard",diff:"E",
                 q:"The Production Possibility Curve shifts OUTWARD when:",
                 options:["The government raises taxes on businesses","Some resources remain unemployed during an economic slowdown","Technology improves or the economy acquires additional productive resources","The economy shifts production from one good to the other"],
                 answer:2,
                 explain:"An outward shift of the PPC means the economy can now produce more of BOTH goods — its productive capacity has grown. This happens through technological progress, growth in the workforce, new capital investment, or better education and skills. This outward shift IS economic growth.",
                 optionExplains:["Higher taxes may reduce investment and could actually shift the PPC inward — not outward.","Unemployed resources mean the economy operates INSIDE the current PPC; the frontier itself does not move.","Correct. Better technology or more resources (labour, capital) shifts the entire PPC outward — enabling more of both goods.","Switching production between goods moves the operating point ALONG the existing PPC — it does not shift the curve itself."]},

                {type:"standard",diff:"E",
                 q:"In a free market economy, decisions about what, how and for whom to produce are primarily guided by:",
                 options:["Central government planning committees and five-year plans","Price signals in markets and the profit motive of producers and consumers","International trade agreements and foreign investment policies","Labour unions negotiating on behalf of workers in each industry"],
                 answer:1,
                 explain:"In a free market economy, there is no central authority dictating production. Instead, price signals (rising prices signal scarcity; falling prices signal surplus) and the profit motive guide producers to make what consumers demand and consumers to signal what they value. This is the invisible hand mechanism.",
                 optionExplains:["Central planning committees characterise command economies (e.g. USSR), not free markets.","Correct. Price signals and profit motive are the decentralised coordinators in a free market — no single authority needed.","Trade agreements affect international commerce; domestic production decisions in free markets are driven by prices and profits.","Labour unions influence wages but don't guide the economy-wide 'what, how, for whom' decisions in a free market."]},

                {type:"standard",diff:"E",
                 q:"Adam Smith's concept of the 'invisible hand' argues that:",
                 options:["Governments must intervene in markets to prevent firms from exploiting consumers","Markets always fail without strict regulation and price controls","When individuals pursue their own self-interest in competitive markets, they unintentionally promote the overall welfare of society","International trade is always more beneficial to a nation than domestic production"],
                 answer:2,
                 explain:"Adam Smith (1776, 'The Wealth of Nations') argued that individuals pursuing profit in competitive markets are guided 'as if by an invisible hand' to serve society — a baker bakes for profit but feeds the community. This is the core argument for decentralised markets over central planning.",
                 optionExplains:["Smith argued the OPPOSITE — that markets, not governments, coordinate best when competition is present.","The invisible hand is an argument FOR market efficiency, not for the need of regulation.","Correct. Smith's invisible hand: individual self-interest + competitive markets → social benefit, without deliberate coordination.","Comparative advantage relates to international trade; the invisible hand is about domestic market coordination."]},

                {type:"standard",diff:"E",
                 q:"'Laissez-faire' as an economic policy means:",
                 options:["Minimal government interference — let markets operate freely and set their own prices","Complete government ownership of all major industries and resources","Equal redistribution of all income and wealth among all citizens","Strict regulation of international trade to protect domestic industries"],
                 answer:0,
                 explain:"Laissez-faire (French: 'let it be/let it do') is the policy of minimal government intervention in economic affairs. The belief is that free markets, guided by price signals and competition, will produce better outcomes than government interference. This complements Adam Smith's invisible hand argument.",
                 optionExplains:["Correct. Laissez-faire = leave markets alone; government's role is minimal (protection of property rights and contracts, not more).","Government ownership of all industries describes a command/socialist economy — the opposite of laissez-faire.","Equal redistribution of income is a social welfare or socialist goal — incompatible with laissez-faire.","Trade protection (tariffs, quotas) is government interference — the opposite of laissez-faire."]},

                {type:"standard",diff:"E",
                 q:"The concept of Sustainable Development was formally defined by:",
                 options:["The World Bank Commission in a 1980 report on global poverty","Adam Smith in 'The Wealth of Nations' (1776)","The Brundtland Commission in its 1987 report 'Our Common Future'","The IMF Advisory Council in its 2000 Millennium Development Goals"],
                 answer:2,
                 explain:"The Brundtland Commission (World Commission on Environment and Development, 1987) gave the most widely used definition: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' This balanced growth with environmental responsibility.",
                 optionExplains:["The World Bank Commission addressed poverty but did not define Sustainable Development in 1980.","Adam Smith wrote about markets in 1776 — long before the environmental concerns that gave rise to Sustainable Development.","Correct. Brundtland Commission (1987) — 'Our Common Future' — defined Sustainable Development in the framework used worldwide.","The Millennium Development Goals (2000) were UN targets, not the original definition of Sustainable Development."]},

                {type:"standard",diff:"E",
                 q:"Per Capita Income of an economy is calculated as:",
                 options:["Total Government Revenue ÷ Total Population","Gross Domestic Product (GDP) ÷ Total Population","National Savings × Average Interest Rate","Total Exports − Total Imports"],
                 answer:1,
                 explain:"Per Capita Income = GDP ÷ Total Population. It gives the average income per person if the national income were divided equally. India's per capita income (2023-24) is approximately ₹2,10,000 (≈$2,500) — much lower than developed nations despite India's large total GDP.",
                 optionExplains:["Government revenue divided by population gives per capita tax burden — not per capita income.","Correct. GDP ÷ Population = Per Capita Income. A simple but important measure of average living standards.","National Savings × Interest Rate gives investment income — unrelated to per capita income formula.","Exports − Imports = Trade Balance, which is very different from per capita income."]},

                {type:"standard",diff:"E",
                 q:"Which of the following is an example of HUMAN capital?",
                 options:["A new automated packaging machine installed in a factory","A 500-km national highway connecting two cities","The solar power plant built under India's renewable energy programme","The technical skills and medical training of a nurse working in a government hospital"],
                 answer:3,
                 explain:"Human capital refers to the knowledge, skills, health and capabilities of people — built through education, training and healthcare. A nurse's medical training is a classic example. Human capital raises productivity just as physical capital does, but it resides in people rather than machines or buildings.",
                 optionExplains:["Automated machinery is Physical Capital — a man-made tool of production, not embedded in a person.","A highway is Physical Capital (infrastructure) — not human capital.","A solar power plant is Physical Capital — energy infrastructure used in production.","Correct. Medical training is Human Capital — skills and knowledge embedded in a person that raise their productivity."]},

                {type:"standard",diff:"E",
                 q:"Which of the following is an example of PHYSICAL capital?",
                 options:["Roads, bridges, factories and machinery used to produce goods and services","The education, health and skills of the working population","The savings deposited in bank accounts by households","Forest resources and mineral deposits owned by the state"],
                 answer:0,
                 explain:"Physical capital refers to man-made inputs used in production — machinery, buildings, infrastructure, tools and equipment. It is distinct from human capital (people's skills) and natural capital (land, forests, minerals). Investment in physical capital (factories, roads, power plants) directly expands an economy's productive capacity.",
                 optionExplains:["Correct. Roads, factories and machinery are Physical Capital — man-made productive assets used to produce other goods/services.","Education, health and skills of workers are Human Capital — embedded in people, not in physical assets.","Savings in banks are financial capital — not the physical productive assets used in production.","Forests and minerals are Natural Capital — not man-made and therefore not classified as physical capital."]},

                {type:"standard",diff:"E",
                 q:"Economic Growth of a country is primarily measured by:",
                 options:["The level of government spending on welfare programmes","The number of new businesses and start-ups registered each year","The growth rate of Gross Domestic Product (GDP) and changes in per capita income","The volume and value of goods exported to other countries each year"],
                 answer:2,
                 explain:"Economic Growth refers to the increase in an economy's productive capacity over time, measured by the rate of growth in GDP and in per capita income (GDP ÷ population). India's 8.2% GDP growth in 2023-24 is the primary measure of its economic growth performance.",
                 optionExplains:["Government welfare spending is a policy tool; it affects growth but doesn't measure it.","New business registrations reflect entrepreneurship but are too narrow and indirect a measure of economy-wide growth.","Correct. GDP growth rate is the standard measure of Economic Growth — it shows how much total output has expanded.","Export volumes measure trade performance, not overall Economic Growth (which includes domestic production too)."]},

                {type:"standard",diff:"E",
                 q:"The Human Development Index (HDI) measures development along which three dimensions?",
                 options:["GDP growth rate, inflation rate and unemployment rate","Per capita income, education (mean and expected years of schooling) and health (life expectancy at birth)","Trade balance, foreign investment and government debt","Income inequality, gender equality and environmental sustainability"],
                 answer:1,
                 explain:"The UNDP's Human Development Index (HDI) measures: (1) Income — per capita GNI (PPP); (2) Education — average years of schooling (adults) and expected years of schooling (children); (3) Health — life expectancy at birth. India's HDI rank is 134 out of 193 (2023), highlighting that high GDP growth has not automatically produced high human development.",
                 optionExplains:["GDP growth, inflation and unemployment are macroeconomic indicators — not the HDI's three dimensions.","Correct. HDI = Income + Education + Health. These three together capture human wellbeing better than income alone.","Trade balance, FDI and debt are economic indicators — not HDI dimensions.","Inequality and environment are measured by other indices (Inequality-adjusted HDI, SDGs) — not the basic HDI."]},

                /* ── 9 MODERATE ── */
                {type:"standard",diff:"M",
                 q:"The Production Possibility Curve is bowed outward (concave to the origin) because of the:",
                 options:["Law of Diminishing Returns to Scale in all production processes","Law of Increasing Opportunity Cost — as more of one good is produced, the opportunity cost per unit rises progressively","Principle of Comparative Advantage between the two goods produced","Law of Supply: as output rises, marginal cost always falls"],
                 answer:1,
                 explain:"The PPC is concave because resources are NOT perfectly adaptable. The first resources shifted from Steel to Wheat are those best suited for wheat. As more resources shift, increasingly ill-suited resources are used, making each extra unit of wheat costlier in steel sacrificed. From our example: gaining 100 units of wheat costs 20 steel early on but 200 steel at the margin — rising OC bends the curve outward.",
                 optionExplains:["Diminishing returns to scale refers to what happens when ALL inputs change proportionally — relevant to the shape of production functions, but not the standard explanation for PPC concavity.","Correct. Increasing opportunity cost — caused by resource non-adaptability — is the definitive explanation for the outward bow of the PPC.","Comparative advantage applies to international trade between two countries, not to the shape of a single country's PPC.","Law of Supply relates to producers' price-output decisions; marginal cost actually RISES (not falls) as output increases — and is not the explanation for PPC concavity."]},

                {type:"standard",diff:"M",
                 q:"Which statement BEST distinguishes Economic Development from Economic Growth?",
                 options:["Economic Development is a short-term concept; Economic Growth refers to long-run structural change","Economic Growth only covers industrial expansion; Economic Development only covers agriculture","Economic Development is broader — it encompasses improvements in education, health, poverty reduction, equality and quality of life, not just a rise in GDP","Economic Growth and Economic Development are identical concepts — they differ only in the academic tradition that uses them"],
                 answer:2,
                 explain:"Economic Growth = increase in GDP (quantitative). Economic Development = Growth PLUS qualitative improvements: better health, more education, reduced poverty, greater equality, more freedom. India's 8%+ growth with HDI rank 134/193 shows these can diverge sharply. Development is the richer concept.",
                 optionExplains:["Growth can be short or long-term; Development is explicitly long-term — but this is NOT the best or most accurate distinction.","Neither concept is limited to one sector — both cover the whole economy.","Correct. Development is GDP growth PLUS improvements in human wellbeing, equity, health and education — a multidimensional concept.","They are fundamentally different: Growth is one dimension (output); Development is multidimensional (output + quality of life)."]},

                {type:"assertion",diff:"M",
                 assertion:"In a free market economy guided by the invisible hand, income and wealth are distributed equitably among all members of society because competitive markets reward everyone fairly.",
                 reason:"When individuals pursue profit in competitive markets, resources flow to their most productive uses, improving overall economic efficiency.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:2,
                 explain:"R is TRUE — competitive markets do improve resource allocation efficiency through the price mechanism. A is FALSE — free markets promote efficiency, not equity. Income distribution in market economies is determined by ownership of resources and productivity, which leads to inequality. India's top 1% own 40% of national wealth despite rapid market-driven growth. Equity requires government intervention (taxes, transfers, public services).",
                 optionExplains:["A is false; equity is not guaranteed by free markets — this option would require A to be correct.","A is still false — free markets are about efficiency, not equitable distribution.","Correct. R is true (markets = efficient resource allocation); A is false (markets do NOT ensure equitable distribution — they typically produce inequality).","R is true — competitive markets do promote productive efficiency through price signals and profit incentives."]},

                {type:"standard",diff:"M",
                 q:"India is described as a MIXED economy because:",
                 options:["Its GDP comes equally from agriculture, industry and services — a mix of sectors","It combines private enterprise (Reliance, Tata, startups) with significant government ownership (railways, PSU banks), regulation and social welfare programmes","It mixes free-market capitalism from the USA with central planning from China","Its economy includes both formal (registered) and informal (unregistered) business sectors"],
                 answer:1,
                 explain:"A mixed economy is one where both private markets AND government intervention coexist. In India: private firms drive most industrial and service output, but the government owns railways, several banks, ONGC, Air India (until privatised), and provides food, fuel and fertiliser subsidies, MGNREGA employment and public healthcare — classic mixed economy features.",
                 optionExplains:["Sector composition (agriculture/industry/services) describes an economy's structure, not why it's 'mixed' in the political-economic sense.","Correct. India is mixed because private enterprise and government ownership/regulation/welfare coexist — neither pure market nor pure command.","India has its own unique model — not simply a mix of the US and Chinese systems.","Having formal and informal sectors describes India's labour market duality, not the mixed economy concept."]},

                {type:"standard",diff:"M",
                 q:"A student spends Saturday studying Economics instead of attending a cricket match she values very much. What is the opportunity cost of her choice to study?",
                 options:["The enjoyment and experience she sacrificed by missing the cricket match","The price of the Economics textbook she used while studying","The exam marks she hopes to gain from her study session","There is no opportunity cost — studying is always the rational choice"],
                 answer:0,
                 explain:"Opportunity cost is the value of the BEST ALTERNATIVE FOREGONE. The student's best alternative was the cricket match. Her opportunity cost is the enjoyment, entertainment and social experience she gave up by not going. Note that opportunity cost is not the money cost but the value of the next best option sacrificed.",
                 optionExplains:["Correct. The opportunity cost = the cricket match experience foregone — the best alternative she gave up by choosing to study.","The textbook cost is an accounting cost (money spent), not the opportunity cost of how she spent her time.","The expected marks are the BENEFIT of studying — not the cost. Opportunity cost is what is given up, not what is gained.","Every choice has an opportunity cost — even studying has a cost (the cricket match missed). There is no cost-free choice when resources (like time) are scarce."]},

                {type:"standard",diff:"M",
                 q:"India's GDP grew at 8.2% in 2023-24 — among the fastest globally — yet its HDI rank is 134 out of 193 countries. Which explanation is MOST consistent with these facts?",
                 options:["India's GDP growth figures must be significantly overstated by measurement errors","The HDI is a flawed and politically biased measure that cannot be applied to developing countries","Rapid GDP growth can coexist with a low HDI rank if growth benefits are concentrated among the wealthy and are not matched by proportionate improvements in health, education and poverty reduction for the majority","HDI and GDP always move in exactly opposite directions for emerging market economies"],
                 answer:2,
                 explain:"This is the fundamental lesson of the Growth vs Development distinction. India's growth has been real, but its benefits have been unevenly distributed — the richest 1% own 40% of national wealth. Life expectancy (70.8 years), mean years of schooling (6.7) and MPI poverty figures all lag behind GDP performance. Growth without equitable development leaves HDI rank low.",
                 optionExplains:["GDP growth is independently verified by multiple agencies — measurement error at this scale is implausible.","The HDI, developed by Mahbub ul Haq and Amartya Sen for UNDP, is a widely validated and respected index used by all 193 UN member states.","Correct. GDP can rise sharply while HDI lags if growth is concentrated (inequality) and not translated into health/education improvements for the majority.","There is no such mechanical inverse relationship; many countries show both high GDP and high HDI."]},

                {type:"standard",diff:"M",
                 q:"Using the PPC data where at Wheat = 300 million tonnes, maximum Steel output = 360 million tonnes, which production combination lies OUTSIDE the PPC and is currently unattainable?",
                 options:["(300 wheat, 300 steel) — steel output is below the PPC maximum at that wheat level","(200 wheat, 400 steel) — at wheat=200, max steel is 440; 400 is below that maximum","(100 wheat, 450 steel) — at wheat=100, max steel is 480; 450 is below that maximum","(300 wheat, 400 steel) — at wheat=300, max steel is only 360; requesting 400 steel exceeds the frontier"],
                 answer:3,
                 explain:"At wheat=300, the maximum steel the economy can produce is 360 million tonnes. Combination (300, 400) requires 400 steel — which is 40 more than the maximum possible. This point lies beyond the current PPC and is unattainable with existing resources and technology. All other options lie inside or on the PPC.",
                 optionExplains:["(300, 300): At wheat=300, max steel=360. 300 < 360 → inside the PPC (inefficient, not unattainable).","(200, 400): At wheat=200, max steel=440. 400 < 440 → inside the PPC (inefficient, achievable but wasteful).","(100, 450): At wheat=100, max steel=480. 450 < 480 → inside the PPC (inefficient, not unattainable).","Correct. (300, 400): At wheat=300, max steel=360. Demanding 400 steel while producing 300 wheat exceeds the frontier — unattainable."]},

                {type:"standard",diff:"M",
                 q:"India's MGNREGA provides 100 days of guaranteed paid work per year to rural households. Which type of unemployment does this programme PRIMARILY address?",
                 options:["Cyclical unemployment caused by economy-wide recessions and falling aggregate demand","Frictional unemployment among educated professionals switching between white-collar jobs","Seasonal and structural unemployment in rural areas where agricultural work is unavailable year-round","Disguised unemployment in India's formal urban manufacturing sector"],
                 answer:2,
                 explain:"MGNREGA targets rural labour. Agricultural workers face SEASONAL unemployment (no work between harvest and planting seasons) and STRUCTURAL unemployment (traditional farming skills not matching new economy needs). By guaranteeing 100 days of work, MGNREGA provides a safety net for these workers during off-season and transition periods. Rural disguised unemployment is also partly addressed.",
                 optionExplains:["Cyclical unemployment is addressed by macroeconomic stimulus (fiscal/monetary policy) — MGNREGA is rural-focused, not a business-cycle tool.","Frictional unemployment among educated professionals is temporary and voluntary; MGNREGA targets unskilled rural poor.","Correct. MGNREGA primarily addresses seasonal unemployment (between agricultural seasons) and provides rural livelihood support year-round.","Disguised urban manufacturing unemployment is a different sector and problem — MGNREGA is specifically a rural employment guarantee."]},

                {type:"assertion",diff:"M",
                 assertion:"Sustainable Development means maximising current economic production and consumption to ensure the highest material living standards for people alive today, trusting that future generations will find their own technological solutions to resource depletion.",
                 reason:"The Brundtland Commission (1987) defined Sustainable Development as development that meets the needs of the present without compromising the ability of future generations to meet their own needs.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:2,
                 explain:"R is TRUE — the Brundtland definition is exactly as stated: meeting present needs without compromising future generations' ability to meet theirs. A is FALSE — Sustainable Development explicitly rejects maximising current consumption at the expense of the future. The Brundtland definition requires balance between present and future, not maximisation for the present alone.",
                 optionExplains:["A is false — maximising current consumption at future generations' expense is the OPPOSITE of Sustainable Development.","A is still false — R accurately defines Sustainable Development and directly contradicts A.","Correct. R is the accurate Brundtland definition; A misrepresents Sustainable Development by suggesting unlimited current maximisation.","R is true — the Brundtland (1987) definition is accurately stated."]},

                /* ── 6 VERY HARD ── */
                {type:"case",diff:"VH",
                 passage:"An economy produces only Wheat and Steel. Using all resources fully and efficiently, it can produce: A(0 wheat, 500 steel), B(100,480), C(200,440), D(300,360), E(400,200), F(450,0). The economy currently operates at Point P = (200 wheat, 300 steel). A planner proposes moving to Point Q = (300 wheat, 400 steel).",
                 q:"Which option CORRECTLY identifies Point P, Point Q, and the opportunity cost of moving from Point B to Point D along this PPC?",
                 options:["P is efficient; Q is attainable with current resources; OC from B to D = 0.4 steel per wheat unit","P is inefficient (inside PPC); Q is unattainable (outside PPC); OC from B to D = 0.6 steel per wheat unit","P is unattainable; Q is efficient; OC from B to D = 1.2 steel per wheat unit","P is inefficient; Q is unattainable; OC from B to D = 1.0 steel per wheat unit"],
                 answer:1,
                 explain:"Point P (200,300): at wheat=200, maximum steel=440. Since 300 < 440, Point P is INSIDE the PPC → inefficient (resources wasted). Point Q (300,400): at wheat=300, maximum steel=360. Since 400 > 360, Point Q is OUTSIDE the PPC → unattainable with current resources. OC from B(100,480) to D(300,360): Wheat gained = 300−100 = 200 units; Steel lost = 480−360 = 120 units. OC per unit of wheat = 120 ÷ 200 = 0.6 units of steel per wheat unit.",
                 optionExplains:["P is not efficient (it's inside, not on, the PPC); Q cannot be attained with current resources since it exceeds the frontier at wheat=300.","Correct. P(200,300) is inside (max steel at wheat=200 is 440); Q(300,400) is outside (max steel at wheat=300 is 360); OC = 120÷200 = 0.6.","P is not unattainable (it's reachable, just inefficient — inside the PPC, not outside); and the OC calculation of 1.2 is incorrect.","The OC of 1.0 is wrong; correct calculation: wheat gained=200, steel lost=120, OC=0.6 steel per wheat unit."]},

                {type:"assertion",diff:"VH",
                 assertion:"Economic Growth and Economic Development always occur simultaneously — whenever a country's GDP grows, its human development indicators (health, education, poverty) automatically improve in proportion.",
                 reason:"Increases in national income (GDP) provide governments with additional tax revenue that can be directed towards education, healthcare and social programmes, thereby raising human development outcomes.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:3,
                 explain:"BOTH A and R are FALSE. A is false: India's 8%+ growth with HDI rank 134/193 is definitive evidence that growth and development frequently diverge. Countries can grow their GDP while widening inequality and neglecting health/education. R is also false: higher GDP does NOT automatically produce better human development — it depends on HOW income is distributed and WHETHER governments actually direct revenue to social spending. In India, the richest 1% own 40% of wealth, showing that GDP gains need not reach the majority.",
                 optionExplains:["Both A and R are false — growth and development do not automatically co-move, and higher GDP does not automatically fund social improvements.","A is still false even if we granted R some truth; they cannot both be true.","A is false (India's data decisively contradicts it); R is also false because higher GDP does not automatically translate to human development.","Correct. A is false (India disproves automatic co-movement); R is false (GDP growth doesn't automatically fund social development — it depends on distribution and policy choices)."]},

                {type:"matching",diff:"VH",
                 q:"Match each scenario to the correct type of unemployment:",
                 columnA:["(1) A senior accountant's job is eliminated because AI software now handles all tax return processing automatically","(2) A sugarcane cutter in Maharashtra has no work during the five months between harvest and the next planting season","(3) A fresh MBA graduate takes 8 weeks searching for a position she considers suitable before accepting an offer","(4) In a family of five, all members work a 2-acre farm plot that agricultural experts say needs only two workers to operate efficiently"],
                 columnB:["(a) Disguised Unemployment — more workers employed than needed; marginal product ≈ zero","(b) Frictional Unemployment — temporary gap between jobs, usually voluntary","(c) Structural Unemployment — technology or industry change eliminates certain skills","(d) Seasonal Unemployment — work only available in specific periods of the year"],
                 options:["1-c, 2-d, 3-b, 4-a","1-d, 2-c, 3-a, 4-b","1-c, 2-a, 3-d, 4-b","1-b, 2-d, 3-c, 4-a"],
                 answer:0,
                 explain:"(1) AI replacing the accountant's role = Structural Unemployment — a change in technology has made certain skills redundant. (2) No work between harvest seasons = Seasonal Unemployment — dependent on agricultural calendar. (3) Graduate searching for the right job = Frictional Unemployment — a normal, temporary transition between school and work. (4) Five people doing the work of two = Disguised Unemployment — the extra workers add zero (or near-zero) marginal output; removing them would not reduce total production.",
                 optionExplains:["Correct. Structural (1-c), Seasonal (2-d), Frictional (3-b), Disguised (4-a) — each matches the economic definition precisely.","Wrong — seasonal work is not structural, and frictional is not disguised.","Wrong — the accountant's situation is structural (technology change), not agricultural; and 3 is frictional, not seasonal.","Wrong — structural unemployment is technology-driven, not voluntary job-searching (that's frictional)."]},

                {type:"assertion",diff:"VH",
                 assertion:"The Production Possibility Curve is concave to the origin (bowed outward) specifically because of the Law of Increasing Opportunity Cost — as more of one good is produced, the opportunity cost of each additional unit rises.",
                 reason:"Resources are not perfectly adaptable between different uses; as an economy shifts more resources from producing one good to another, it increasingly uses resources that are ill-suited for the new good, making each successive unit progressively more expensive in terms of the other good sacrificed.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:0,
                 explain:"BOTH A and R are TRUE and R correctly explains A. The Law of Increasing Opportunity Cost (A) IS the reason for the PPC's concave shape. R accurately explains WHY this law holds: resources are heterogeneous — land suited for wheat production is not equally good for steel, and vice versa. The first units shifted are those best adapted; later units are progressively less suited, driving up the opportunity cost. From our data: gaining 100 wheat costs 20 steel early (B→C) but 200 steel at the margin (E→F).",
                 optionExplains:["Correct. Both are true and R is the causal mechanism for A: resource non-adaptability → increasing opportunity cost → concave PPC.","R does explain A — this option would require R to be true but not explanatory, which is not the case here.","A is true — the PPC IS concave because of increasing opportunity cost.","Both are true — neither A nor R is false."]},

                {type:"case",diff:"VH",
                 passage:"Country X and Country Y both had identical per capita GDPs of $5,000 in 2000. By 2024: Country X has grown per capita GDP to $15,000, but its Gini coefficient rose from 0.30 to 0.62 (extreme inequality), female labour force participation remains at 15%, and life expectancy increased by only 3 years. Country Y grew per capita GDP to $9,000, but Gini fell to 0.26, female labour force participation rose from 20% to 58%, and life expectancy improved by 14 years.",
                 q:"Which conclusion is MOST justified from this evidence?",
                 options:["Country X achieved superior Economic Development because its per capita GDP is higher","Country Y achieved superior Economic Development — development encompasses equity, gender inclusion, health and wellbeing, not just income","It is impossible to compare development across countries since all indicators are subjective","Per capita income is the only valid measure of development; all other indicators are unreliable"],
                 answer:1,
                 explain:"Economic Development is multidimensional — it includes equity (Gini), gender inclusion (female labour force participation), health (life expectancy) and income together. Country Y's lower but more equitably distributed income, alongside dramatic gains in gender participation and life expectancy, represents superior human development. Country X's high GDP growth has been captured by the wealthy (Gini=0.62), with minimal progress in health and gender inclusion — high growth, low development.",
                 optionExplains:["Per capita GDP alone does not define Economic Development; Country X's extreme inequality, low female participation and modest health gains mean most people's lives have not improved proportionately.","Correct. Country Y's balanced progress on income, equity, gender and health represents genuine Economic Development — all dimensions improving together.","Comparison IS possible using HDI and other multi-dimensional indices — this is precisely what international development economics does.","Modern development economics has long established that income alone is insufficient; Sen's Capabilities Approach, HDI and MPI all validate multidimensional measurement."]},

                {type:"assertion",diff:"VH",
                 assertion:"India operates as a command economy in which the central government makes all major economic decisions about production, distribution and pricing through five-year plans, with no meaningful role for private markets.",
                 reason:"A socialist or command economy, by concentrating economic decisions in the state, ensures equitable distribution of resources and automatically eliminates market failures such as monopoly power and information asymmetry.",
                 options:["Both A and R are true and R correctly explains A","Both A and R are true but R does NOT explain A","A is false but R is true","Both A and R are false"],
                 answer:3,
                 explain:"BOTH A and R are FALSE. A is clearly false — India is a MIXED economy. Private firms like Reliance, Tata, Infosys, and millions of small businesses drive most of India's output. India abandoned comprehensive central planning after 1991 reforms; five-year plans were replaced by indicative planning and eventually discontinued. R is also false — command economies do NOT automatically eliminate market failures; instead they create their own inefficiencies (misallocation of resources, information problems, lack of innovation) as seen in the collapse of USSR-style command economies.",
                 optionExplains:["Both A and R are false — India is not a command economy, and command economies do not automatically solve market failures.","Both are still false — independent of each other's truth value.","A is false (India is a mixed economy, not command); R is also false (command economies create their own inefficiencies rather than eliminating all market failures).","Correct. A is false (India = mixed economy, major private sector since 1991); R is false (command economies generate significant inefficiencies, not efficiency)."]}

              ]},
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
            {topicStart:"eco-u2-demand", title:"Demand, Supply and Market Equilibrium", icon:"",
             desc:"Demand and supply curves; why they slope the way they do; equilibrium price; the invisible hand; and how markets clear."},
            {h:"Demand, Supply and Market Equilibrium", kicker:"Unit 2", html:`
              <p>A <strong>market</strong> is any arrangement that brings buyers and sellers together to determine the price and quantity of a good or service. The twin forces of <strong>Demand</strong> (buyers) and <strong>Supply</strong> (sellers) interact to determine the <strong>equilibrium price</strong> — the price at which the market clears.</p>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">The Law of Demand</h3>
              <p>The Law of Demand states: <em>"Other things being equal (ceteris paribus), the quantity demanded of a good falls when its price rises, and rises when its price falls."</em> Price and quantity demanded move in <strong>opposite directions</strong> — hence the demand curve slopes <strong>downward from left to right</strong>.</p>
              <table class="cmp"><thead><tr><th>Price (₹/unit)</th><th>60</th><th>50</th><th>40</th><th>30</th><th>20</th><th>10</th></tr></thead><tbody>
                <tr><td><strong>Quantity Demanded (units/week)</strong></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
              </tbody></table>
              <div class="diagram"><svg viewBox="0 0 520 370" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="370" fill="#f9f6f0" rx="8"/>

  <line x1="70" y1="30" x2="70" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <line x1="70" y1="310" x2="480" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <text x="32" y="175" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,32,175)">Price (₹)</text>
  <text x="275" y="348" font-size="12" fill="#5a6e63" text-anchor="middle">Quantity (units)</text>
    <line x1="65" y1="270" x2="75" y2="270" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="274" font-size="11" fill="#5a6e63" text-anchor="end" >10</text>   <line x1="65" y1="230" x2="75" y2="230" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="234" font-size="11" fill="#5a6e63" text-anchor="end" >20</text>   <line x1="65" y1="190" x2="75" y2="190" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="194" font-size="11" fill="#5a6e63" text-anchor="end" >30</text>   <line x1="65" y1="150" x2="75" y2="150" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="154" font-size="11" fill="#1a4731" text-anchor="end" font-weight="700">₹40*</text>   <line x1="65" y1="110" x2="75" y2="110" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="114" font-size="11" fill="#5a6e63" text-anchor="end" >50</text>   <line x1="65" y1="70" x2="75" y2="70" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="74" font-size="11" fill="#5a6e63" text-anchor="end" >60</text>
    <line x1="137" y1="305" x2="137" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="137" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >1</text>   <line x1="203" y1="305" x2="203" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="203" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >2</text>   <line x1="270" y1="305" x2="270" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="270" y="328" font-size="11" fill="#1a4731" text-anchor="middle" font-weight="700">3*</text>   <line x1="337" y1="305" x2="337" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="337" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >4</text>   <line x1="403" y1="305" x2="403" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="403" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >5</text>   <line x1="470" y1="305" x2="470" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="470" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >6</text>
  <!-- Demand curve -->
  <polyline points="70,30 137,70 203,110 270,150 337,190 403,230 470,270" stroke="#1a4731" stroke-width="3" fill="none" stroke-linejoin="round"/>
  <text x="480" y="274" font-size="15" fill="#1a4731" font-weight="700">D</text>
  <!-- Key points A-E -->
    <circle cx="137" cy="70" r="5" fill="#e05a2b"/>
  <text x="145" y="64" font-size="12" fill="#e05a2b" font-weight="700">A (₹60,1)</text>
    <circle cx="203" cy="110" r="5" fill="#e05a2b"/>
  <text x="211" y="104" font-size="12" fill="#e05a2b" font-weight="700">B (₹50,2)</text>
    <circle cx="270" cy="150" r="5" fill="#e05a2b"/>
  <text x="278" y="144" font-size="12" fill="#e05a2b" font-weight="700">C (₹40,3)</text>
    <circle cx="337" cy="190" r="5" fill="#e05a2b"/>
  <text x="345" y="184" font-size="12" fill="#e05a2b" font-weight="700">D (₹30,4)</text>
    <circle cx="403" cy="230" r="5" fill="#e05a2b"/>
  <text x="411" y="224" font-size="12" fill="#e05a2b" font-weight="700">E (₹20,5)</text>
  <text x="140" y="55" font-size="12" fill="#1a4731" text-anchor="middle">As price rises →</text>
  <text x="140" y="70" font-size="12" fill="#1a4731" text-anchor="middle">quantity demanded falls</text>
</svg><div class="dcap">Demand curve D slopes downward. As price rises from ₹20 to ₹60, quantity demanded falls from 5 to 1 unit. Each lettered point (A–E) corresponds to one row of the demand schedule above.</div></div>
              <p><strong>Why does the demand curve slope downward?</strong></p>
              <ul>
                <li><strong>Law of Diminishing Marginal Utility</strong> — Each additional unit gives less satisfaction, so buyers are willing to pay less for extra units.</li>
                <li><strong>Substitution Effect</strong> — When a good's price rises, consumers switch to cheaper substitutes (tea → coffee).</li>
                <li><strong>Income Effect</strong> — A price rise reduces real purchasing power, so consumers buy less.</li>
                <li><strong>New buyers</strong> — Lower prices attract buyers who previously could not afford the good.</li>
              </ul>
              <div class="example"><div class="lbl">Real-life example</div>
                <p>When mango prices fell from ₹100/kg to ₹40/kg in summer, Priya's family bought 3 kg per week instead of 1 kg. This is the law of demand in action — lower price, higher quantity demanded. Conversely, when petrol prices rose, car usage fell and public transport ridership rose (substitution effect).</p>
              </div>
              <p><strong>Exceptions to the Law of Demand (upward-sloping demand curves):</strong></p>
              <ul>
                <li><strong>Giffen goods</strong> — Inferior goods for which the income effect dominates. When the price of a staple (like cheap rice) falls, poor consumers feel richer and switch to more preferred foods, reducing demand for rice. Example: Bread during famine.</li>
                <li><strong>Veblen/Prestige goods</strong> — Luxury goods where high price signals status. A ₹2 lakh handbag may be demanded MORE at higher prices (Veblen effect).</li>
                <li><strong>Speculation</strong> — If buyers expect prices to rise further, they may buy MORE today despite current high prices (shares, real estate).</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Shifts in Demand vs. Movement Along Demand</h3>
              <table class="cmp"><thead><tr><th>Concept</th><th>Cause</th><th>What moves?</th></tr></thead><tbody>
                <tr><td><strong>Movement along D curve</strong></td><td>Change in the good's own price</td><td>A point slides along the existing curve</td></tr>
                <tr><td><strong>Shift of D curve (right)</strong></td><td>Income rises · Related goods price changes · Tastes improve · More buyers</td><td>The entire D curve moves right (increase in demand)</td></tr>
                <tr><td><strong>Shift of D curve (left)</strong></td><td>Income falls · Cheaper substitute appears · Tastes worsen</td><td>The entire D curve moves left (decrease in demand)</td></tr>
              </tbody></table>
              <div class="diagram"><svg viewBox="0 0 520 370" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="370" fill="#f9f6f0" rx="8"/>

  <line x1="70" y1="30" x2="70" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <line x1="70" y1="310" x2="480" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <text x="32" y="175" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,32,175)">Price (₹)</text>
  <text x="275" y="348" font-size="12" fill="#5a6e63" text-anchor="middle">Quantity (units)</text>
    <line x1="65" y1="230" x2="75" y2="230" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="234" font-size="11" fill="#5a6e63" text-anchor="end" >20</text>   <line x1="65" y1="190" x2="75" y2="190" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="194" font-size="11" fill="#5a6e63" text-anchor="end" >30</text>   <line x1="65" y1="150" x2="75" y2="150" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="154" font-size="11" fill="#5a6e63" text-anchor="end" >₹40</text>   <line x1="65" y1="110" x2="75" y2="110" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="114" font-size="11" fill="#1a4731" text-anchor="end" font-weight="700">₹50</text>   <line x1="65" y1="70" x2="75" y2="70" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="74" font-size="11" fill="#5a6e63" text-anchor="end" >60</text>
    <line x1="203" y1="305" x2="203" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="203" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >2</text>   <line x1="270" y1="305" x2="270" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="270" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >3</text>   <line x1="337" y1="305" x2="337" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="337" y="328" font-size="11" fill="#1a4731" text-anchor="middle" font-weight="700">4*</text>   <line x1="403" y1="305" x2="403" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="403" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >5</text>   <line x1="470" y1="305" x2="470" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="470" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >6</text>
  <!-- Original D1 (dashed) -->
  <polyline points="70,30 137,70 203,110 270,150 337,190 403,230 470,270" stroke="#1a4731" stroke-width="2" fill="none" stroke-dasharray="6,4"/>
  <text x="480" y="274" font-size="13" fill="#5a6e63" font-weight="600">D₁</text>
  <!-- New D2 (solid) -->
  <polyline points="137,30 203,70 270,110 337,150 403,190 470,230 537,270" stroke="#1a4731" stroke-width="3" fill="none"/>
  <text x="480" y="234" font-size="14" fill="#1a4731" font-weight="700">D₂</text>
  <!-- Supply curve -->
  <polyline points="70,270 137,230 203,190 270,150 337,110 403,70 470,30" stroke="#b6862c" stroke-width="3" fill="none"/>
  <text x="480" y="34" font-size="15" fill="#b6862c" font-weight="700">S</text>
  <!-- Shift arrow -->
  <path d="M 270 142 Q 303 115 337 102" stroke="#e05a2b" stroke-width="2" fill="none" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#e05a2b"/></marker></defs>
  <!-- Old equil E1 -->
  <circle cx="270" cy="150" r="4" fill="#5a6e63" opacity="0.6"/>
  <text x="262" y="142" font-size="11" fill="#5a6e63">E₁</text>
  <!-- New equil E2 -->
    <circle cx="337" cy="110" r="5" fill="#e05a2b"/>
  <text x="345" y="104" font-size="12" fill="#e05a2b" font-weight="700">E₂</text>
  <!-- Dashes to new equil -->
    <line x1="70" y1="110" x2="337" y2="110" stroke="#e05a2b" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="337" y1="310" x2="337" y2="110" stroke="#e05a2b" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="290" y="50" font-size="12" fill="#e05a2b">Increase in demand: income↑,</text>
  <text x="290" y="65" font-size="12" fill="#e05a2b">tastes, related goods prices</text>
</svg><div class="dcap">D₁ shifts right to D₂ after an increase in consumer income. With the same supply curve S, the equilibrium moves from E₁ (Q=3, P=₹40) to E₂ (Q=4, P=₹50) — both price and quantity rise.</div></div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">The Law of Supply</h3>
              <p>The Law of Supply states: <em>"Other things being equal, the quantity supplied of a good rises when its price rises, and falls when its price falls."</em> Price and quantity supplied move in the <strong>same direction</strong> — hence the supply curve slopes <strong>upward from left to right</strong>.</p>
              <table class="cmp"><thead><tr><th>Price (₹/unit)</th><th>10</th><th>20</th><th>30</th><th>40</th><th>50</th><th>60</th></tr></thead><tbody>
                <tr><td><strong>Quantity Supplied (units/week)</strong></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
              </tbody></table>
              <div class="diagram"><svg viewBox="0 0 520 370" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="370" fill="#f9f6f0" rx="8"/>

  <line x1="70" y1="30" x2="70" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <line x1="70" y1="310" x2="480" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <text x="32" y="175" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,32,175)">Price (₹)</text>
  <text x="275" y="348" font-size="12" fill="#5a6e63" text-anchor="middle">Quantity (units)</text>
    <line x1="65" y1="270" x2="75" y2="270" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="274" font-size="11" fill="#5a6e63" text-anchor="end" >10</text>   <line x1="65" y1="230" x2="75" y2="230" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="234" font-size="11" fill="#5a6e63" text-anchor="end" >20</text>   <line x1="65" y1="190" x2="75" y2="190" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="194" font-size="11" fill="#5a6e63" text-anchor="end" >30</text>   <line x1="65" y1="150" x2="75" y2="150" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="154" font-size="11" fill="#1a4731" text-anchor="end" font-weight="700">₹40*</text>   <line x1="65" y1="110" x2="75" y2="110" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="114" font-size="11" fill="#5a6e63" text-anchor="end" >50</text>   <line x1="65" y1="70" x2="75" y2="70" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="74" font-size="11" fill="#5a6e63" text-anchor="end" >60</text>
    <line x1="137" y1="305" x2="137" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="137" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >1</text>   <line x1="203" y1="305" x2="203" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="203" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >2</text>   <line x1="270" y1="305" x2="270" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="270" y="328" font-size="11" fill="#1a4731" text-anchor="middle" font-weight="700">3*</text>   <line x1="337" y1="305" x2="337" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="337" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >4</text>   <line x1="403" y1="305" x2="403" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="403" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >5</text>   <line x1="470" y1="305" x2="470" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="470" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >6</text>
  <!-- Supply curve -->
  <polyline points="70,270 137,230 203,190 270,150 337,110 403,70 470,30" stroke="#b6862c" stroke-width="3" fill="none" stroke-linejoin="round"/>
  <text x="480" y="34" font-size="15" fill="#b6862c" font-weight="700">S</text>
  <!-- Key points -->
    <circle cx="137" cy="230" r="5" fill="#b6862c"/>
  <text x="145" y="224" font-size="12" fill="#b6862c" font-weight="700">A (₹20,1)</text>
    <circle cx="203" cy="190" r="5" fill="#b6862c"/>
  <text x="211" y="184" font-size="12" fill="#b6862c" font-weight="700">B (₹30,2)</text>
    <circle cx="270" cy="150" r="5" fill="#b6862c"/>
  <text x="278" y="144" font-size="12" fill="#b6862c" font-weight="700">C (₹40,3)</text>
    <circle cx="337" cy="110" r="5" fill="#b6862c"/>
  <text x="345" y="104" font-size="12" fill="#b6862c" font-weight="700">D (₹50,4)</text>
    <circle cx="403" cy="70" r="5" fill="#b6862c"/>
  <text x="411" y="64" font-size="12" fill="#b6862c" font-weight="700">E (₹60,5)</text>
  <text x="380" y="55" font-size="12" fill="#b6862c" text-anchor="middle">As price rises →</text>
  <text x="380" y="70" font-size="12" fill="#b6862c" text-anchor="middle">quantity supplied rises</text>
</svg><div class="dcap">Supply curve S slopes upward. As price rises from ₹20 to ₹60, quantity supplied rises from 2 to 6 units. Higher prices make production more profitable, attracting more supply.</div></div>
              <p><strong>Why does the supply curve slope upward?</strong></p>
              <ul>
                <li><strong>Profit motive</strong> — Higher prices mean greater profit per unit, incentivising producers to supply more.</li>
                <li><strong>New producers enter</strong> — Rising prices attract new firms into the market.</li>
                <li><strong>Law of Increasing Costs</strong> — To produce more, firms must use less efficient resources, increasing marginal cost, so they need a higher price to justify the extra production.</li>
              </ul>
              <p><strong>Determinants of Supply (Shifters):</strong> input costs · technology · number of sellers · taxes &amp; subsidies · future price expectations · prices of related goods (in production)</p>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Market Equilibrium</h3>
              <p>Equilibrium occurs where <strong>Quantity Demanded = Quantity Supplied</strong>. At this price (P*), the market clears — there is no shortage or surplus. Using our example: P=70–10Q = 10+10Q → Q*=3, P*=₹40.</p>
              <div class="diagram"><svg viewBox="0 0 520 370" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="370" fill="#f9f6f0" rx="8"/>

  <line x1="70" y1="30" x2="70" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <line x1="70" y1="310" x2="480" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <text x="32" y="175" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,32,175)">Price (₹)</text>
  <text x="275" y="348" font-size="12" fill="#5a6e63" text-anchor="middle">Quantity (units)</text>
    <line x1="65" y1="270" x2="75" y2="270" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="274" font-size="11" fill="#5a6e63" text-anchor="end" >10</text>   <line x1="65" y1="230" x2="75" y2="230" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="234" font-size="11" fill="#5a6e63" text-anchor="end" >20</text>   <line x1="65" y1="190" x2="75" y2="190" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="194" font-size="11" fill="#5a6e63" text-anchor="end" >30</text>   <line x1="65" y1="150" x2="75" y2="150" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="154" font-size="11" fill="#1a4731" text-anchor="end" font-weight="700">P*=40</text>   <line x1="65" y1="110" x2="75" y2="110" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="114" font-size="11" fill="#5a6e63" text-anchor="end" >50</text>   <line x1="65" y1="70" x2="75" y2="70" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="74" font-size="11" fill="#5a6e63" text-anchor="end" >60</text>
    <line x1="137" y1="305" x2="137" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="137" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >1</text>   <line x1="203" y1="305" x2="203" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="203" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >2</text>   <line x1="270" y1="305" x2="270" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="270" y="328" font-size="11" fill="#1a4731" text-anchor="middle" font-weight="700">Q*=3</text>   <line x1="337" y1="305" x2="337" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="337" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >4</text>   <line x1="403" y1="305" x2="403" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="403" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >5</text>   <line x1="470" y1="305" x2="470" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="470" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >6</text>
  <!-- Surplus label (above P*=40, supply exceeds demand) -->
  <text x="360" y="115" font-size="11" fill="#b6862c" text-anchor="middle">Excess Supply (Surplus)</text>
  <!-- Shortage label (below P*=40, demand exceeds supply) -->
  <text x="185" y="250" font-size="11" fill="#1a4731" text-anchor="middle">Excess Demand (Shortage)</text>
  <!-- D curve -->
  <polyline points="70,30 137,70 203,110 270,150 337,190 403,230 470,270" stroke="#1a4731" stroke-width="3" fill="none" stroke-linejoin="round"/>
  <text x="480" y="274" font-size="15" fill="#1a4731" font-weight="700">D</text>
  <!-- S curve -->
  <polyline points="70,270 137,230 203,190 270,150 337,110 403,70 470,30" stroke="#b6862c" stroke-width="3" fill="none" stroke-linejoin="round"/>
  <text x="480" y="34" font-size="15" fill="#b6862c" font-weight="700">S</text>
  <!-- Dashed lines to axes -->
    <line x1="70" y1="150" x2="270" y2="150" stroke="#e05a2b" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="270" y1="310" x2="270" y2="150" stroke="#e05a2b" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- Equilibrium dot -->
    <circle cx="270" cy="150" r="5" fill="#e05a2b"/>
  <text x="278" y="144" font-size="12" fill="#e05a2b" font-weight="700">E*</text>
</svg><div class="dcap">D and S intersect at E* (Q*=3, P*=₹40). Above P*, quantity supplied exceeds demand — surplus drives price down. Below P*, demand exceeds supply — shortage drives price up. Market self-corrects to equilibrium.</div></div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">The Invisible Hand &amp; Laissez-Faire</h3>
              <p>Adam Smith's concept of the <strong>Invisible Hand</strong> argues that individuals pursuing their own self-interest are guided — as if by an invisible hand — to promote the social good. In a free market:</p>
              <ul>
                <li>Sellers seeking profit produce what consumers want.</li>
                <li>Buyers spending income signal which goods are most valued.</li>
                <li>Prices coordinate all decisions without central planning.</li>
              </ul>
              <p><strong>Laissez-faire</strong> (French: "let it be") is the policy of minimal government intervention in markets. The market mechanism allocates resources efficiently through prices.</p>
              <div class="example"><div class="lbl">Real-life example — Invisible Hand</div>
                <p>During the COVID-19 pandemic, demand for sanitizers surged. No government order was needed — within weeks, hundreds of distilleries switched from alcohol to sanitizer production because of higher prices and profits. The invisible hand (price signal) reallocated resources from less urgent to more urgent uses automatically.</p>
              </div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Price Ceiling and Price Floor</h3>
              <div class="diagram"><svg viewBox="0 0 520 370" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="370" fill="#f9f6f0" rx="8"/>

  <line x1="70" y1="30" x2="70" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <line x1="70" y1="310" x2="480" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <text x="32" y="175" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,32,175)">Price (₹)</text>
  <text x="275" y="348" font-size="12" fill="#5a6e63" text-anchor="middle">Quantity (units)</text>
    <line x1="65" y1="230" x2="75" y2="230" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="234" font-size="11" fill="#5a6e63" text-anchor="end" >₹20 (ceiling)</text>   <line x1="65" y1="150" x2="75" y2="150" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="154" font-size="11" fill="#1a4731" text-anchor="end" font-weight="700">₹40 (P*)</text>   <line x1="65" y1="70" x2="75" y2="70" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="74" font-size="11" fill="#5a6e63" text-anchor="end" >₹60 (floor)</text>
    <line x1="137" y1="305" x2="137" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="137" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >1</text>   <line x1="203" y1="305" x2="203" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="203" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >2</text>   <line x1="270" y1="305" x2="270" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="270" y="328" font-size="11" fill="#1a4731" text-anchor="middle" font-weight="700">3</text>   <line x1="337" y1="305" x2="337" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="337" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >4</text>   <line x1="403" y1="305" x2="403" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="403" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >5</text>
  <polyline points="70,30 137,70 203,110 270,150 337,190 403,230 470,270" stroke="#1a4731" stroke-width="3" fill="none"/>
  <text x="478" y="274" font-size="14" fill="#1a4731" font-weight="700">D</text>
  <polyline points="70,270 137,230 203,190 270,150 337,110 403,70 470,30" stroke="#b6862c" stroke-width="3" fill="none"/>
  <text x="478" y="34" font-size="14" fill="#b6862c" font-weight="700">S</text>
  <!-- Equil -->
    <circle cx="270" cy="150" r="5" fill="#e05a2b"/>
  <text x="278" y="144" font-size="12" fill="#e05a2b" font-weight="700">E*</text>
  <!-- Price Ceiling line -->
  <line x1="70" y1="230" x2="480" y2="230" stroke="#c0392b" stroke-width="2" stroke-dasharray="7,4"/>
  <text x="485" y="234" font-size="11" fill="#c0392b" font-weight="700">Pmax</text>
  <text x="170" y="223" font-size="10" fill="#c0392b">Shortage: Qs&lt;Qd at ₹20</text>
  <!-- Price Floor line -->
  <line x1="70" y1="70" x2="480" y2="70" stroke="#2471a3" stroke-width="2" stroke-dasharray="7,4"/>
  <text x="485" y="74" font-size="11" fill="#2471a3" font-weight="700">Pmin</text>
  <text x="200" y="86" font-size="10" fill="#2471a3">Surplus: Qs&gt;Qd at ₹60</text>
</svg><div class="dcap">Price Ceiling (Pmax=₹20, below P*=₹40): Quantity supplied falls, quantity demanded rises → Shortage. Government uses it to keep essential goods affordable (rent control, food price caps). Price Floor (Pmin=₹60, above P*): Quantity supplied rises, quantity demanded falls → Surplus. Used to protect producers (minimum support price for farmers).</div></div>
              <table class="cmp"><thead><tr><th></th><th>Price Ceiling (Maximum Price)</th><th>Price Floor (Minimum Price)</th></tr></thead><tbody>
                <tr><td><strong>Set</strong></td><td>Below equilibrium</td><td>Above equilibrium</td></tr>
                <tr><td><strong>Effect</strong></td><td>Shortage (Qd &gt; Qs)</td><td>Surplus (Qs &gt; Qd)</td></tr>
                <tr><td><strong>Purpose</strong></td><td>Keep prices affordable for buyers</td><td>Protect income of sellers/producers</td></tr>
                <tr><td><strong>Indian examples</strong></td><td>Rent control; kerosene price cap; drug price control</td><td>MSP for wheat, rice (APMC); minimum wages</td></tr>
              </tbody></table>
              <div class="casebox"><div class="lbl">Case in point — MSP in India</div>
                <p>India's Minimum Support Price (MSP) for wheat is set above the market equilibrium price. This means farmers have an incentive to produce more wheat than consumers will buy at MSP — creating a government surplus stored by the Food Corporation of India (FCI). This is exactly the price floor model: Qs &gt; Qd. The government buys the surplus to maintain the floor price and protect farmer incomes, but this costs taxpayers and creates warehousing challenges.</p>
              </div>
            `},
            {topicStart:"eco-u2-elasticity", title:"Price, Income and Cross-Price Elasticity of Demand", icon:"",
             desc:"How sensitive demand is to price changes — the critical concept that determines whether a price rise raises or lowers total revenue."},
            {h:"Price, Income and Cross-Price Elasticity of Demand", kicker:"Unit 2", html:`
              <p><strong>Elasticity of demand</strong> measures how <em>sensitive</em> the quantity demanded of a good is to a change in one of its determinants. The most important is <strong>Price Elasticity of Demand (PED)</strong>.</p>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Price Elasticity of Demand (PED)</h3>
              <p><strong>PED</strong> measures the percentage change in quantity demanded resulting from a 1% change in the good's own price.</p>
              <div style="text-align:center;background:var(--green-soft);border-radius:10px;padding:14px;margin:12px 0">
                <span style="font-size:15px;font-weight:700;font-family:IBM Plex Mono,monospace;color:var(--green-deep)">PED = % Change in Quantity Demanded / % Change in Price = (ΔQ/Q) ÷ (ΔP/P)</span>
              </div>
              <p>Because price and quantity move in opposite directions (law of demand), PED is always <strong>negative</strong>. By convention we take the <strong>absolute value</strong> |PED|.</p>
              <div class="diagram"><svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="360" fill="#f9f6f0" rx="8"/>
  <!-- LEFT: Elastic demand panel -->
  <text x="125" y="22" font-size="12" fill="#1a4731" text-anchor="middle" font-weight="700">Elastic Demand (Ed &gt; 1)</text>
  <line x1="40" y1="30" x2="40" y2="300" stroke="#5a6e63" stroke-width="2"/>
  <line x1="40" y1="300" x2="225" y2="300" stroke="#5a6e63" stroke-width="2"/>
  <text x="28" y="175" font-size="10" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,28,175)">Price</text>
  <text x="132" y="320" font-size="10" fill="#5a6e63" text-anchor="middle">Quantity</text>
  <!-- Flat (elastic) demand curve -->
  <polyline points="55,80 205,200" stroke="#1a4731" stroke-width="3" fill="none"/>
  <text x="210" y="204" font-size="13" fill="#1a4731" font-weight="700">D</text>
  <!-- Price change brackets -->
  <line x1="40" y1="110" x2="40" y2="170" stroke="#e05a2b" stroke-width="2"/>
  <line x1="36" y1="110" x2="44" y2="110" stroke="#e05a2b" stroke-width="2"/>
  <line x1="36" y1="170" x2="44" y2="170" stroke="#e05a2b" stroke-width="2"/>
  <text x="28" y="143" font-size="10" fill="#e05a2b" text-anchor="middle">ΔP</text>
  <!-- Dashes at P1 and P2 -->
  <line x1="40" y1="110" x2="110" y2="110" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="40" y1="170" x2="150" y2="170" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="110" y1="110" x2="110" y2="300" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="150" y1="170" x2="150" y2="300" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Quantity change brackets -->
  <line x1="110" y1="310" x2="150" y2="310" stroke="#e05a2b" stroke-width="2"/>
  <text x="130" y="330" font-size="10" fill="#e05a2b" text-anchor="middle">Large ΔQ</text>
  <!-- Label -->
  <text x="125" y="250" font-size="10" fill="#1a4731" text-anchor="middle">%ΔQ &gt; %ΔP</text>
  <text x="125" y="265" font-size="10" fill="#1a4731" text-anchor="middle">Ed &gt; 1</text>

  <!-- RIGHT: Inelastic demand panel -->
  <text x="388" y="22" font-size="12" fill="#1a4731" text-anchor="middle" font-weight="700">Inelastic Demand (Ed &lt; 1)</text>
  <line x1="295" y1="30" x2="295" y2="300" stroke="#5a6e63" stroke-width="2"/>
  <line x1="295" y1="300" x2="490" y2="300" stroke="#5a6e63" stroke-width="2"/>
  <text x="283" y="175" font-size="10" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,283,175)">Price</text>
  <text x="393" y="320" font-size="10" fill="#5a6e63" text-anchor="middle">Quantity</text>
  <!-- Steep (inelastic) demand curve -->
  <polyline points="340,50 380,270" stroke="#1a4731" stroke-width="3" fill="none"/>
  <text x="385" y="274" font-size="13" fill="#1a4731" font-weight="700">D</text>
  <!-- Price change brackets -->
  <line x1="295" y1="100" x2="295" y2="200" stroke="#e05a2b" stroke-width="2"/>
  <line x1="291" y1="100" x2="299" y2="100" stroke="#e05a2b" stroke-width="2"/>
  <line x1="291" y1="200" x2="299" y2="200" stroke="#e05a2b" stroke-width="2"/>
  <text x="283" y="153" font-size="10" fill="#e05a2b" text-anchor="middle">ΔP</text>
  <!-- Dashes -->
  <line x1="295" y1="100" x2="348" y2="100" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="295" y1="200" x2="356" y2="200" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="348" y1="100" x2="348" y2="300" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="356" y1="200" x2="356" y2="300" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Quantity bracket -->
  <line x1="348" y1="310" x2="356" y2="310" stroke="#e05a2b" stroke-width="2"/>
  <text x="352" y="330" font-size="10" fill="#e05a2b" text-anchor="middle">Small ΔQ</text>
  <!-- Label -->
  <text x="388" y="250" font-size="10" fill="#1a4731" text-anchor="middle">%ΔQ &lt; %ΔP</text>
  <text x="388" y="265" font-size="10" fill="#1a4731" text-anchor="middle">Ed &lt; 1</text>
</svg><div class="dcap">Left: Elastic demand (flat curve) — a small price change causes a large change in quantity demanded. Right: Inelastic demand (steep curve) — a large price change causes only a small change in quantity.</div></div>
              <div class="diagram"><svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="240" fill="#f9f6f0" rx="8"/>
  <!-- 4 mini panels: perfectly elastic, elastic, unit, inelastic, perfectly inelastic -->
  <!-- Panel labels -->
  <text x="52" y="16" font-size="9.5" fill="#1a4731" text-anchor="middle" font-weight="700">Perfectly Elastic</text>
  <text x="52" y="27" font-size="9" fill="#5a6e63" text-anchor="middle">Ed = ∞</text>
  <text x="157" y="16" font-size="9.5" fill="#1a4731" text-anchor="middle" font-weight="700">Elastic</text>
  <text x="157" y="27" font-size="9" fill="#5a6e63" text-anchor="middle">Ed &gt; 1</text>
  <text x="262" y="16" font-size="9.5" fill="#1a4731" text-anchor="middle" font-weight="700">Unit Elastic</text>
  <text x="262" y="27" font-size="9" fill="#5a6e63" text-anchor="middle">Ed = 1</text>
  <text x="367" y="16" font-size="9.5" fill="#1a4731" text-anchor="middle" font-weight="700">Inelastic</text>
  <text x="367" y="27" font-size="9" fill="#5a6e63" text-anchor="middle">Ed &lt; 1</text>
  <text x="472" y="16" font-size="9.5" fill="#1a4731" text-anchor="middle" font-weight="700">Perf. Inelastic</text>
  <text x="472" y="27" font-size="9" fill="#5a6e63" text-anchor="middle">Ed = 0</text>

  <!-- Mini axes for all 5 -->
  <!-- P1: Perfectly Elastic (horizontal line) -->
  <line x1="10" y1="40" x2="10" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="10" y1="190" x2="95" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="10" y1="115" x2="92" y2="115" stroke="#1a4731" stroke-width="2.5"/>
  <text x="94" y="119" font-size="10" fill="#1a4731" font-weight="700">D</text>

  <!-- P2: Elastic (flatter slope) -->
  <line x1="115" y1="40" x2="115" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="115" y1="190" x2="200" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="120" y1="55" x2="195" y2="180" stroke="#1a4731" stroke-width="2.5"/>
  <text x="196" y="184" font-size="10" fill="#1a4731" font-weight="700">D</text>

  <!-- P3: Unit Elastic (rectangular hyperbola approximation) -->
  <line x1="220" y1="40" x2="220" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="220" y1="190" x2="305" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <polyline points="225,50 235,67 250,90 265,120 278,150 290,172 303,188" stroke="#1a4731" stroke-width="2.5" fill="none"/>
  <text x="304" y="192" font-size="10" fill="#1a4731" font-weight="700">D</text>

  <!-- P4: Inelastic (steeper slope) -->
  <line x1="325" y1="40" x2="325" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="325" y1="190" x2="410" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="352" y1="50" x2="368" y2="180" stroke="#1a4731" stroke-width="2.5"/>
  <text x="369" y="184" font-size="10" fill="#1a4731" font-weight="700">D</text>

  <!-- P5: Perfectly Inelastic (vertical line) -->
  <line x1="430" y1="40" x2="430" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="430" y1="190" x2="515" y2="190" stroke="#9eaaa5" stroke-width="1.5"/>
  <line x1="475" y1="45" x2="475" y2="190" stroke="#1a4731" stroke-width="2.5"/>
  <text x="478" y="45" font-size="10" fill="#1a4731" font-weight="700">D</text>

  <!-- Price and Qty labels for each -->
  <text x="8" y="236" font-size="8.5" fill="#5a6e63" text-anchor="start">P→Price; Q→Quantity on all axes</text>
</svg><div class="dcap">Five types of price elasticity from left to right: Perfectly Elastic (horizontal — any price rise drops quantity to zero; e.g., perfectly competitive market), Elastic (flat slope, Ed&gt;1; e.g., luxury goods), Unit Elastic (rectangular hyperbola, Ed=1; revenue unchanged), Inelastic (steep slope, Ed&lt;1; e.g., essential medicines), Perfectly Inelastic (vertical — quantity unchanged regardless of price; e.g., insulin for diabetics).</div></div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Factors Affecting PED</h3>
              <table class="cmp"><thead><tr><th>Factor</th><th>More Elastic if…</th><th>More Inelastic if…</th></tr></thead><tbody>
                <tr><td><strong>Availability of substitutes</strong></td><td>Many substitutes exist (Pepsi vs Coke)</td><td>Few or no substitutes (insulin, salt)</td></tr>
                <tr><td><strong>Necessity vs luxury</strong></td><td>Luxury good (jewellery, foreign holiday)</td><td>Necessity (rice, medicines)</td></tr>
                <tr><td><strong>Proportion of income</strong></td><td>Large share of budget (car, fridge)</td><td>Tiny share of budget (matchbox, pen)</td></tr>
                <tr><td><strong>Time period</strong></td><td>Long run (consumers can adjust)</td><td>Short run (habits hard to break immediately)</td></tr>
                <tr><td><strong>Definition of market</strong></td><td>Narrowly defined (Maruti Suzuki Swift)</td><td>Broadly defined (cars in general)</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Measurement — Percentage (Proportional) Method</h3>
              <p>This is the <strong>only method prescribed by WBCHSE</strong>.</p>
              <div class="example"><div class="lbl">Worked example</div>
                <p>When the price of mangoes falls from ₹80/kg to ₹60/kg, quantity demanded rises from 200 kg to 280 kg per day.</p>
                <p>% Change in P = (60−80)/80 × 100 = <strong>−25%</strong></p>
                <p>% Change in Q = (280−200)/200 × 100 = <strong>+40%</strong></p>
                <p>PED = 40%/25% = <strong>1.6</strong> (|Ed|&gt;1 → Elastic demand)</p>
                <p>Interpretation: A 1% fall in price leads to a 1.6% rise in quantity demanded.</p>
              </div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">PED and Total Revenue</h3>
              <table class="cmp"><thead><tr><th>Elasticity</th><th>Price falls → TR</th><th>Price rises → TR</th><th>Implication</th></tr></thead><tbody>
                <tr><td>Elastic (Ed&gt;1)</td><td>Rises</td><td>Falls</td><td>Lower price increases revenue — good for price cuts</td></tr>
                <tr><td>Unit elastic (Ed=1)</td><td>Unchanged</td><td>Unchanged</td><td>Revenue insensitive to price change</td></tr>
                <tr><td>Inelastic (Ed&lt;1)</td><td>Falls</td><td>Rises</td><td>Higher price increases revenue — tax incidence falls on buyers</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Income Elasticity of Demand (YED)</h3>
              <div style="text-align:center;background:var(--green-soft);border-radius:10px;padding:12px;margin:10px 0">
                <span style="font-size:14px;font-weight:700;font-family:IBM Plex Mono,monospace;color:var(--green-deep)">YED = % Change in Quantity Demanded / % Change in Income</span>
              </div>
              <table class="cmp"><thead><tr><th>YED value</th><th>Type of good</th><th>Example</th></tr></thead><tbody>
                <tr><td>YED &gt; 1</td><td><strong>Luxury/Superior good</strong></td><td>Foreign holidays, cars, jewellery — demand rises faster than income</td></tr>
                <tr><td>0 &lt; YED &lt; 1</td><td><strong>Normal good (necessity)</strong></td><td>Rice, bread — demand rises with income but less than proportionately</td></tr>
                <tr><td>YED = 0</td><td><strong>Zero income elasticity</strong></td><td>Salt, matches — demand barely changes with income</td></tr>
                <tr><td>YED &lt; 0</td><td><strong>Inferior good</strong></td><td>Coarse grains, cheap bus travel — demand falls as income rises (switch to better alternatives)</td></tr>
              </tbody></table>
              <div class="example"><div class="lbl">Real-life example</div>
                <p>As India's per-capita income rose over 2010–2023, demand for two-wheelers (normal goods, YED≈0.8) grew proportionately, while demand for cars (luxury goods, YED≈1.5) grew much faster — India became one of the world's largest car markets. Meanwhile, demand for coarse millets (inferior goods) declined as households switched to rice and wheat.</p>
              </div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Cross-Price Elasticity of Demand (XED)</h3>
              <p>XED measures how the quantity demanded of Good A changes when the price of Good B changes.</p>
              <div style="text-align:center;background:var(--green-soft);border-radius:10px;padding:12px;margin:10px 0">
                <span style="font-size:14px;font-weight:700;font-family:IBM Plex Mono,monospace;color:var(--green-deep)">XED(A,B) = % Change in Qty Demanded of A / % Change in Price of B</span>
              </div>
              <table class="cmp"><thead><tr><th>XED value</th><th>Relationship</th><th>Example</th></tr></thead><tbody>
                <tr><td>XED &gt; 0 (positive)</td><td><strong>Substitutes</strong> — goods that can replace each other</td><td>Tea &amp; Coffee; Pepsi &amp; Coke; Butter &amp; Margarine. When price of tea rises, demand for coffee rises.</td></tr>
                <tr><td>XED &lt; 0 (negative)</td><td><strong>Complements</strong> — goods used together</td><td>Car &amp; Petrol; Printers &amp; Ink; Bread &amp; Butter. When price of cars rises, demand for petrol falls.</td></tr>
                <tr><td>XED = 0</td><td><strong>Unrelated goods</strong></td><td>Umbrella &amp; Toothpaste — no relationship</td></tr>
              </tbody></table>
              <div class="casebox"><div class="lbl">Case in point — Pricing Strategy</div>
                <p>When Apple raises the price of iPhones, it studies the XED of accessories (cases, AirPods, Apple Watch) — all complements with negative XED. Fewer iPhone buyers means fewer accessory buyers too — so Apple keeps iPhone prices high only when accessories profit compensates. Meanwhile, when Jio cut mobile data prices sharply in 2016 (substitute for broadband), demand for Airtel's mobile data fell sharply (positive XED for substitutes), forcing Airtel to also cut prices to remain competitive.</p>
              </div>
            `},
            {topicStart:"eco-u2-supply-elasticity", title:"Elasticity of Supply and Comparative Statics", icon:"",
             desc:"How quickly producers respond to price changes; and what happens to equilibrium when demand or supply shifts (Price Ceiling, Price Floor)."},
            {h:"Elasticity of Supply and Comparative Statics", kicker:"Unit 2", html:`
              <h3 style="color:var(--green-deep);margin:10px 0 10px;padding-top:0">Elasticity of Supply (Es)</h3>
              <p><strong>Price Elasticity of Supply</strong> measures the responsiveness of quantity supplied to a change in price.</p>
              <div style="text-align:center;background:var(--green-soft);border-radius:10px;padding:14px;margin:12px 0">
                <span style="font-size:15px;font-weight:700;font-family:IBM Plex Mono,monospace;color:var(--green-deep)">Es = % Change in Quantity Supplied / % Change in Price = (ΔQs/Qs) ÷ (ΔP/P)</span>
              </div>
              <p>Unlike PED, Es is normally <strong>positive</strong> since price and quantity supplied move in the same direction (Law of Supply).</p>
              <div class="diagram"><svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="360" fill="#f9f6f0" rx="8"/>
  <!-- LEFT: Elastic Supply -->
  <text x="125" y="22" font-size="12" fill="#b6862c" text-anchor="middle" font-weight="700">Elastic Supply (Es &gt; 1)</text>
  <line x1="40" y1="30" x2="40" y2="300" stroke="#5a6e63" stroke-width="2"/>
  <line x1="40" y1="300" x2="225" y2="300" stroke="#5a6e63" stroke-width="2"/>
  <text x="28" y="175" font-size="10" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,28,175)">Price</text>
  <text x="132" y="320" font-size="10" fill="#5a6e63" text-anchor="middle">Quantity</text>
  <polyline points="55,250 205,90" stroke="#b6862c" stroke-width="3" fill="none"/>
  <text x="208" y="86" font-size="13" fill="#b6862c" font-weight="700">S</text>
  <line x1="40" y1="140" x2="40" y2="190" stroke="#e05a2b" stroke-width="2"/>
  <line x1="36" y1="140" x2="44" y2="140" stroke="#e05a2b" stroke-width="2"/>
  <line x1="36" y1="190" x2="44" y2="190" stroke="#e05a2b" stroke-width="2"/>
  <text x="28" y="168" font-size="10" fill="#e05a2b" text-anchor="middle">ΔP</text>
  <line x1="40" y1="140" x2="158" y2="140" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="40" y1="190" x2="123" y2="190" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="158" y1="140" x2="158" y2="300" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="123" y1="190" x2="123" y2="300" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="123" y1="310" x2="158" y2="310" stroke="#e05a2b" stroke-width="2"/>
  <text x="140" y="330" font-size="10" fill="#e05a2b" text-anchor="middle">Large ΔQ</text>
  <text x="125" y="270" font-size="10" fill="#b6862c" text-anchor="middle">%ΔQ &gt; %ΔP</text>

  <!-- RIGHT: Inelastic Supply -->
  <text x="388" y="22" font-size="12" fill="#b6862c" text-anchor="middle" font-weight="700">Inelastic Supply (Es &lt; 1)</text>
  <line x1="295" y1="30" x2="295" y2="300" stroke="#5a6e63" stroke-width="2"/>
  <line x1="295" y1="300" x2="490" y2="300" stroke="#5a6e63" stroke-width="2"/>
  <text x="283" y="175" font-size="10" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,283,175)">Price</text>
  <text x="393" y="320" font-size="10" fill="#5a6e63" text-anchor="middle">Quantity</text>
  <polyline points="340,270 385,55" stroke="#b6862c" stroke-width="3" fill="none"/>
  <text x="388" y="52" font-size="13" fill="#b6862c" font-weight="700">S</text>
  <line x1="295" y1="100" x2="295" y2="200" stroke="#e05a2b" stroke-width="2"/>
  <line x1="291" y1="100" x2="299" y2="100" stroke="#e05a2b" stroke-width="2"/>
  <line x1="291" y1="200" x2="299" y2="200" stroke="#e05a2b" stroke-width="2"/>
  <text x="283" y="153" font-size="10" fill="#e05a2b" text-anchor="middle">ΔP</text>
  <line x1="295" y1="100" x2="378" y2="100" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="295" y1="200" x2="365" y2="200" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="378" y1="100" x2="378" y2="300" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="365" y1="200" x2="365" y2="300" stroke="#e05a2b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="365" y1="310" x2="378" y2="310" stroke="#e05a2b" stroke-width="2"/>
  <text x="371" y="330" font-size="10" fill="#e05a2b" text-anchor="middle">Small ΔQ</text>
  <text x="388" y="250" font-size="10" fill="#b6862c" text-anchor="middle">%ΔQ &lt; %ΔP</text>
</svg><div class="dcap">Left: Elastic supply (flat curve) — producers can ramp up output quickly when price rises a little (e.g., a tailor who can stitch more shirts overnight). Right: Inelastic supply (steep curve) — output barely changes even with a big price rise (e.g., a farmer cannot grow extra wheat overnight; agricultural produce takes a season).</div></div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Factors Affecting Elasticity of Supply</h3>
              <table class="cmp"><thead><tr><th>Factor</th><th>More Elastic if…</th><th>More Inelastic if…</th></tr></thead><tbody>
                <tr><td><strong>Time period</strong></td><td>Long run — firms can build capacity</td><td>Short run / immediate period — fixed capacity</td></tr>
                <tr><td><strong>Spare capacity</strong></td><td>Factory has idle machines/labour to use</td><td>Already operating at full capacity</td></tr>
                <tr><td><strong>Storability</strong></td><td>Good can be stored and released later (manufactured goods)</td><td>Perishable goods (vegetables, fish) — must sell quickly</td></tr>
                <tr><td><strong>Ease of entry</strong></td><td>New firms can enter easily</td><td>High barriers to entry (licensing, capital)</td></tr>
                <tr><td><strong>Mobility of factors</strong></td><td>Labour/capital can shift between uses easily</td><td>Specialised, immobile factors (skilled artisans, fixed land)</td></tr>
              </tbody></table>

              <div class="example"><div class="lbl">Worked example</div>
                <p>The price of tomatoes rises from ₹20/kg to ₹30/kg. A farmer who had already harvested can only bring 5% more to market this week (inelastic, short run), but over the next season, many farmers shift land to tomato cultivation and supply rises by 40% (elastic, long run) at the same new price.</p>
                <p>Short run: Es = 5%/50% = <strong>0.1</strong> (highly inelastic)</p>
                <p>Long run: Es = 40%/50% = <strong>0.8</strong> (still inelastic, but far more responsive)</p>
              </div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:18px;border-top:1px solid var(--line)">Comparative Statics</h3>
              <p><strong>Comparative statics</strong> is the method of analysing how the equilibrium price and quantity change when demand and/or supply curves shift, by comparing the old and new equilibrium positions (without studying the path between them).</p>
              <table class="cmp"><thead><tr><th>Change</th><th>Effect on Equilibrium Price</th><th>Effect on Equilibrium Quantity</th></tr></thead><tbody>
                <tr><td>Demand increases (D shifts right)</td><td>Rises</td><td>Rises</td></tr>
                <tr><td>Demand decreases (D shifts left)</td><td>Falls</td><td>Falls</td></tr>
                <tr><td>Supply increases (S shifts right)</td><td>Falls</td><td>Rises</td></tr>
                <tr><td>Supply decreases (S shifts left)</td><td>Rises</td><td>Falls</td></tr>
                <tr><td>Both D &amp; S increase</td><td>Ambiguous (depends on relative shift size)</td><td>Rises</td></tr>
              </tbody></table>
              <div class="diagram"><svg viewBox="0 0 520 370" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="370" fill="#f9f6f0" rx="8"/>

  <line x1="70" y1="30" x2="70" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <line x1="70" y1="310" x2="480" y2="310" stroke="#5a6e63" stroke-width="2" stroke-linecap="round"/>
  <text x="32" y="175" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,32,175)">Price (₹)</text>
  <text x="275" y="348" font-size="12" fill="#5a6e63" text-anchor="middle">Quantity (units)</text>
    <line x1="65" y1="230" x2="75" y2="230" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="234" font-size="11" fill="#5a6e63" text-anchor="end" >20</text>   <line x1="65" y1="190" x2="75" y2="190" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="194" font-size="11" fill="#5a6e63" text-anchor="end" >30</text>   <line x1="65" y1="150" x2="75" y2="150" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="154" font-size="11" fill="#1a4731" text-anchor="end" font-weight="700">P*₁=40</text>   <line x1="65" y1="110" x2="75" y2="110" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="114" font-size="11" fill="#1a4731" text-anchor="end" font-weight="700">P*₂=50</text>   <line x1="65" y1="70" x2="75" y2="70" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="60" y="74" font-size="11" fill="#5a6e63" text-anchor="end" >60</text>
    <line x1="203" y1="305" x2="203" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="203" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >2</text>   <line x1="270" y1="305" x2="270" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="270" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >3</text>   <line x1="337" y1="305" x2="337" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="337" y="328" font-size="11" fill="#1a4731" text-anchor="middle" font-weight="700">4</text>   <line x1="403" y1="305" x2="403" y2="315" stroke="#5a6e63" stroke-width="1.5"/>
  <text x="403" y="328" font-size="11" fill="#5a6e63" text-anchor="middle" >5</text>
  <!-- Original D and S -->
  <polyline points="70,30 137,70 203,110 270,150 337,190 403,230 470,270" stroke="#1a4731" stroke-width="2" fill="none" stroke-dasharray="6,4"/>
  <text x="478" y="274" font-size="12" fill="#5a6e63" font-weight="600">D₁</text>
  <polyline points="70,270 137,230 203,190 270,150 337,110 403,70 470,30" stroke="#b6862c" stroke-width="2" fill="none" stroke-dasharray="6,4"/>
  <text x="478" y="34" font-size="12" fill="#5a6e63" font-weight="600">S₁</text>
  <!-- Supply shifts LEFT (costs rise) -->
  <polyline points="70,230 137,190 203,150 270,110 337,70 403,30" stroke="#b6862c" stroke-width="3" fill="none"/>
  <text x="411" y="34" font-size="13" fill="#b6862c" font-weight="700">S₂</text>
  <!-- Demand shifts RIGHT (income rises) -->
  <polyline points="137,30 203,70 270,110 337,150 403,190 470,230 537,270" stroke="#1a4731" stroke-width="3" fill="none"/>
  <text x="478" y="234" font-size="13" fill="#1a4731" font-weight="700">D₂</text>
    <circle cx="270" cy="150" r="5" fill="#5a6e63"/>
  <text x="278" y="144" font-size="12" fill="#5a6e63" font-weight="700">E₁</text>
    <circle cx="337" cy="110" r="5" fill="#e05a2b"/>
  <text x="345" y="104" font-size="12" fill="#e05a2b" font-weight="700">E₂</text>
    <line x1="70" y1="110" x2="337" y2="110" stroke="#e05a2b" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="337" y1="310" x2="337" y2="110" stroke="#e05a2b" stroke-width="1.5" stroke-dasharray="5,4"/>
</svg><div class="dcap">Comparative statics: Demand shifts right (D₁→D₂, income rises) AND Supply shifts left (S₁→S₂, input costs rise). Equilibrium moves from E₁ (Q=3,P=₹40) to E₂ (Q=4,P=₹50). Price rises unambiguously; quantity could rise, fall, or stay same depending on the relative magnitude of the two shifts — here demand effect dominates so quantity rises.</div></div>

              <div class="casebox"><div class="lbl">Case in point — Onion Price Crisis</div>
                <p>India regularly sees sharp onion price spikes. Onion supply is highly inelastic in the short run (Es≈0.1–0.2) because crops take 3–4 months to grow and cannot be rushed. When unseasonal rains destroy a harvest (supply shifts left sharply), even a small drop in quantity causes onion prices to triple or quadruple, since demand for onions is also inelastic (no easy substitute in Indian cooking). This is comparative statics in action: small supply shift → large price change, because both curves are steep (inelastic).</p>
              </div>
            `},
            {topicStart:"eco-u2-utility", title:"Cardinal Utility and the Law of Diminishing Marginal Utility", icon:"",
             desc:"How economists measure satisfaction; why the first slice of pizza gives more pleasure than the fifth; and consumer equilibrium using marginal utility analysis."},
            {h:"Cardinal Utility and the Law of Diminishing Marginal Utility", kicker:"Unit 2", html:`
              <p><strong>Cardinal utility analysis</strong> assumes that satisfaction (utility) derived from consuming goods can be measured in precise numerical units, traditionally called <strong>"utils."</strong> This is the older approach to consumer behaviour, later supplemented by the ordinal (indifference curve) approach.</p>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Key Concepts</h3>
              <table class="cmp"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
                <tr><td><strong>Total Utility (TU)</strong></td><td>The total satisfaction obtained from consuming a given quantity of a good.</td></tr>
                <tr><td><strong>Marginal Utility (MU)</strong></td><td>The additional utility gained from consuming <em>one more</em> unit of the good. MUₙ = TUₙ − TUₙ₋₁</td></tr>
                <tr><td><strong>Util</strong></td><td>The hypothetical unit used to measure utility (cardinal/numerical).</td></tr>
              </tbody></table>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">The Law of Diminishing Marginal Utility (LDMU)</h3>
              <p>The Law states: <em>"As a consumer consumes more and more units of a good (with all other factors constant), the marginal utility derived from each successive unit goes on diminishing."</em></p>
              <table class="cmp"><thead><tr><th>Units of cake</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr></thead><tbody>
                <tr><td><strong>Total Utility (TU)</strong></td><td>10</td><td>18</td><td>24</td><td>28</td><td>30</td><td>30</td><td>28</td></tr>
                <tr><td><strong>Marginal Utility (MU)</strong></td><td>10</td><td>8</td><td>6</td><td>4</td><td>2</td><td>0</td><td>−2</td></tr>
              </tbody></table>
              <div class="diagram"><svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="330" fill="#f9f6f0" rx="8"/>
  <line x1="70" y1="20" x2="70" y2="290" stroke="#5a6e63" stroke-width="2"/>
  <line x1="70" y1="290" x2="480" y2="290" stroke="#5a6e63" stroke-width="2"/>
  <text x="30" y="155" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,30,155)">Total Utility</text>
  <text x="275" y="312" font-size="12" fill="#5a6e63" text-anchor="middle">Units of cake consumed</text>
  <line x1="70" y1="285" x2="70" y2="295" stroke="#5a6e63" stroke-width="1.5"/><text x="70" y="306" font-size="10" fill="#5a6e63" text-anchor="middle">1</text>
<line x1="137" y1="285" x2="137" y2="295" stroke="#5a6e63" stroke-width="1.5"/><text x="137" y="306" font-size="10" fill="#5a6e63" text-anchor="middle">2</text>
<line x1="203" y1="285" x2="203" y2="295" stroke="#5a6e63" stroke-width="1.5"/><text x="203" y="306" font-size="10" fill="#5a6e63" text-anchor="middle">3</text>
<line x1="270" y1="285" x2="270" y2="295" stroke="#5a6e63" stroke-width="1.5"/><text x="270" y="306" font-size="10" fill="#5a6e63" text-anchor="middle">4</text>
<line x1="337" y1="285" x2="337" y2="295" stroke="#5a6e63" stroke-width="1.5"/><text x="337" y="306" font-size="10" fill="#5a6e63" text-anchor="middle">5</text>
<line x1="403" y1="285" x2="403" y2="295" stroke="#5a6e63" stroke-width="1.5"/><text x="403" y="306" font-size="10" fill="#5a6e63" text-anchor="middle">6</text>
<line x1="470" y1="285" x2="470" y2="295" stroke="#5a6e63" stroke-width="1.5"/><text x="470" y="306" font-size="10" fill="#5a6e63" text-anchor="middle">7</text>
  <polyline points="70,235 137,175 203,130 270,100 337,85 403,85 470,100" stroke="#1a4731" stroke-width="3" fill="none" stroke-linejoin="round"/>
  <circle cx="70" cy="235" r="4" fill="#1a4731"/>
<circle cx="137" cy="175" r="4" fill="#1a4731"/>
<circle cx="203" cy="130" r="4" fill="#1a4731"/>
<circle cx="270" cy="100" r="4" fill="#1a4731"/>
<circle cx="337" cy="85" r="4" fill="#1a4731"/>
<circle cx="403" cy="85" r="4" fill="#1a4731"/>
<circle cx="470" cy="100" r="4" fill="#1a4731"/>
  <text x="478" y="104" font-size="13" fill="#1a4731" font-weight="700">TU</text>
  <text x="342" y="73" font-size="10" fill="#e05a2b">TU peaks (MU=0)</text>
</svg><div class="dcap">Total Utility rises at a decreasing rate, reaches a maximum at the 6th unit (where MU=0), then declines as overeating causes disutility (7th unit).</div></div>
              <div class="diagram"><svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="280" fill="#f9f6f0" rx="8"/>
  <line x1="70" y1="20" x2="70" y2="250" stroke="#5a6e63" stroke-width="2"/>
  <line x1="70" y1="195" x2="480" y2="195" stroke="#5a6e63" stroke-width="2"/>
  <text x="30" y="110" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,30,110)">Marginal Utility</text>
  <text x="275" y="270" font-size="12" fill="#5a6e63" text-anchor="middle">Units of cake consumed</text>
  <line x1="70" y1="190" x2="70" y2="200" stroke="#5a6e63" stroke-width="1.5"/><text x="70" y="212" font-size="10" fill="#5a6e63" text-anchor="middle">1</text>
<line x1="137" y1="190" x2="137" y2="200" stroke="#5a6e63" stroke-width="1.5"/><text x="137" y="212" font-size="10" fill="#5a6e63" text-anchor="middle">2</text>
<line x1="203" y1="190" x2="203" y2="200" stroke="#5a6e63" stroke-width="1.5"/><text x="203" y="212" font-size="10" fill="#5a6e63" text-anchor="middle">3</text>
<line x1="270" y1="190" x2="270" y2="200" stroke="#5a6e63" stroke-width="1.5"/><text x="270" y="212" font-size="10" fill="#5a6e63" text-anchor="middle">4</text>
<line x1="337" y1="190" x2="337" y2="200" stroke="#5a6e63" stroke-width="1.5"/><text x="337" y="212" font-size="10" fill="#5a6e63" text-anchor="middle">5</text>
<line x1="403" y1="190" x2="403" y2="200" stroke="#5a6e63" stroke-width="1.5"/><text x="403" y="212" font-size="10" fill="#5a6e63" text-anchor="middle">6</text>
<line x1="470" y1="190" x2="470" y2="200" stroke="#5a6e63" stroke-width="1.5"/><text x="470" y="212" font-size="10" fill="#5a6e63" text-anchor="middle">7</text>
  <text x="60" y="199" font-size="10" fill="#5a6e63" text-anchor="end">0</text>
  <polyline points="70,87 137,108 203,130 270,152 337,173 403,195 470,217" stroke="#e05a2b" stroke-width="3" fill="none" stroke-linejoin="round"/>
  <circle cx="70" cy="87" r="4" fill="#e05a2b"/>
<circle cx="137" cy="108" r="4" fill="#e05a2b"/>
<circle cx="203" cy="130" r="4" fill="#e05a2b"/>
<circle cx="270" cy="152" r="4" fill="#e05a2b"/>
<circle cx="337" cy="173" r="4" fill="#e05a2b"/>
<circle cx="403" cy="195" r="4" fill="#e05a2b"/>
<circle cx="470" cy="217" r="4" fill="#e05a2b"/>
  <text x="478" y="221" font-size="13" fill="#e05a2b" font-weight="700">MU</text>
  <text x="398" y="185" font-size="10" fill="#1a4731">MU = 0 at 6th unit (saturation)</text>
  <text x="455" y="239" font-size="10" fill="#c0392b">MU negative — disutility</text>
</svg><div class="dcap">Marginal Utility declines continuously with each additional unit — from 10 utils (1st cake) down to 0 utils (6th cake, satiation point) and turns negative for the 7th cake (overeating causes discomfort, i.e., disutility).</div></div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Relationship between TU and MU</h3>
              <ul>
                <li>When <strong>MU is positive</strong>, TU is <strong>increasing</strong>.</li>
                <li>When <strong>MU = 0</strong>, TU is at its <strong>maximum</strong> (point of saturation).</li>
                <li>When <strong>MU is negative</strong>, TU is <strong>decreasing</strong> (the consumer would be better off not consuming that unit).</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Assumptions of LDMU</h3>
              <ul>
                <li><strong>Cardinal measurability</strong> — Utility can be measured in exact numbers (utils).</li>
                <li><strong>Constant marginal utility of money</strong> — One rupee yields the same utility throughout.</li>
                <li><strong>Homogeneous units</strong> — All units consumed are identical in quality.</li>
                <li><strong>Continuous consumption</strong> — No time gap between consuming successive units.</li>
                <li><strong>Rationality</strong> — The consumer behaves rationally to maximise satisfaction.</li>
              </ul>

              <div class="example"><div class="lbl">Real-life example</div>
                <p>You're very thirsty after a long walk. The first glass of water gives enormous satisfaction (high MU). The second glass is still nice but a bit less exciting. By the fourth or fifth glass, you don't really want more — MU has fallen close to zero. If forced to drink a sixth glass, you'd feel uncomfortable (negative MU) — this is the law of diminishing marginal utility playing out in real time.</p>
              </div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Importance of LDMU</h3>
              <ul>
                <li><strong>Explains the law of demand</strong> — since each additional unit gives less utility, consumers are willing to pay less for it, so demand curves slope downward.</li>
                <li><strong>Basis of progressive taxation</strong> — the marginal utility of money is assumed to fall as income rises, justifying higher tax rates on higher incomes (equal sacrifice principle).</li>
                <li><strong>Consumer equilibrium</strong> — guides how a rational consumer allocates a fixed budget across goods (Law of Equi-Marginal Utility).</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Law of Equi-Marginal Utility</h3>
              <p>A consumer with a fixed budget maximises total utility by allocating spending such that the <strong>marginal utility per rupee spent is equal across all goods</strong>:</p>
              <div style="text-align:center;background:var(--green-soft);border-radius:10px;padding:12px;margin:10px 0">
                <span style="font-size:14px;font-weight:700;font-family:IBM Plex Mono,monospace;color:var(--green-deep)">MUx/Px = MUy/Py = ... = MUm (marginal utility of money)</span>
              </div>
              <div class="casebox"><div class="lbl">Case in point</div>
                <p>Rohan has ₹100 to spend on samosas (₹10 each) and tea (₹10 each). If MU of the 3rd samosa is 40 utils and MU of the 2nd tea is 20 utils, then MU per rupee on samosa (40/10=4) exceeds that on tea (20/10=2). Rohan should buy more samosas and less tea until both ratios are equal — this is exactly how he reaches the highest possible total satisfaction from his fixed budget.</p>
              </div>
            `},
            {topicStart:"eco-u2-indifference", title:"Indifference Curve Analysis and Consumer Equilibrium", icon:"",
             desc:"The ordinal approach to consumer behaviour — indifference curves, their properties, the budget line, and how a rational consumer maximises utility."},
            {h:"Indifference Curve Analysis and Consumer Equilibrium", kicker:"Unit 2", html:`
              <p>The <strong>Indifference Curve approach</strong> (ordinal utility analysis) was developed by Hicks and Allen as a more realistic alternative to cardinal utility. It assumes consumers can only <strong>rank</strong> their preferences (this bundle is better than that one) without needing to measure satisfaction in precise numbers.</p>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Indifference Curve (IC)</h3>
              <p>An <strong>Indifference Curve</strong> shows all combinations of two goods that give the consumer the <strong>same level of satisfaction</strong> — the consumer is "indifferent" between any two points on the same curve.</p>
              <table class="cmp"><thead><tr><th>Combination</th><th>Good X</th><th>Good Y</th></tr></thead><tbody>
                <tr><td>A</td><td>2</td><td>6</td></tr>
                <tr><td>B</td><td>4</td><td>3</td></tr>
                <tr><td>C</td><td>6</td><td>2</td></tr>
              </tbody></table>
              <div class="diagram"><svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="330" fill="#f9f6f0" rx="8"/>
  <line x1="60" y1="20" x2="60" y2="290" stroke="#5a6e63" stroke-width="2"/>
  <line x1="60" y1="290" x2="490" y2="290" stroke="#5a6e63" stroke-width="2"/>
  <text x="22" y="155" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,22,155)">Good Y (units)</text>
  <text x="275" y="312" font-size="12" fill="#5a6e63" text-anchor="middle">Good X (units)</text>
  <polyline points="156,98 175,130 204,162 252,194 290,210 348,226" stroke="#5a6e63" stroke-width="2.5" fill="none"/>
  <text x="356" y="230" font-size="13" fill="#5a6e63" font-weight="700">IC₁</text>
  <polyline points="156,-30 180,34 220,98 252,130 300,162 380,194 444,210" stroke="#1a4731" stroke-width="2.5" fill="none"/>
  <text x="452" y="214" font-size="13" fill="#1a4731" font-weight="700">IC₂</text>
  <polyline points="204,-30 240,34 300,98 348,130 420,162 540,194" stroke="#b6862c" stroke-width="2.5" fill="none"/>
  <text x="528" y="188" font-size="13" fill="#b6862c" font-weight="700">IC₃</text>
  <text x="120" y="40" font-size="11" fill="#1a4731" text-anchor="middle">Higher IC (further from origin)</text>
  <text x="120" y="54" font-size="11" fill="#1a4731" text-anchor="middle">= higher satisfaction</text>
  <!-- Sample points on IC1 -->
  <circle cx="156" cy="98" r="4" fill="#5a6e63"/><text x="146" y="88" font-size="11" fill="#5a6e63">A</text>
  <circle cx="252" cy="194" r="4" fill="#5a6e63"/><text x="258" y="208" font-size="11" fill="#5a6e63">B</text>
  <circle cx="348" cy="226" r="4" fill="#5a6e63"/><text x="354" y="240" font-size="11" fill="#5a6e63">C</text>
</svg><div class="dcap">Points A, B, and C all lie on IC₁ — the consumer is equally satisfied with any of these bundles. IC₂ and IC₃ represent progressively higher levels of satisfaction (further from the origin = more of both goods = higher utility).</div></div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Properties of Indifference Curves</h3>
              <ul>
                <li><strong>Downward sloping (negative slope)</strong> — To keep satisfaction constant, more of Good X must be compensated by less of Good Y.</li>
                <li><strong>Convex to the origin</strong> — Reflects the principle of diminishing Marginal Rate of Substitution (MRS).</li>
                <li><strong>Higher IC = higher satisfaction</strong> — Curves further from the origin represent higher utility levels.</li>
                <li><strong>Do not intersect</strong> — Two ICs crossing would imply contradictory rankings of the same bundle.</li>
                <li><strong>Never touch the axes</strong> — Assumes the consumer always wants some of both goods.</li>
              </ul>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Marginal Rate of Substitution (MRS)</h3>
              <p><strong>MRS</strong> is the rate at which a consumer is willing to give up Good Y to gain one more unit of Good X, while staying on the same indifference curve.</p>
              <div style="text-align:center;background:var(--green-soft);border-radius:10px;padding:12px;margin:10px 0">
                <span style="font-size:14px;font-weight:700;font-family:IBM Plex Mono,monospace;color:var(--green-deep)">MRSxy = −ΔY/ΔX (slope of the IC)</span>
              </div>
              <p>MRS <strong>diminishes</strong> as we move along the IC — having more X and less Y makes the consumer increasingly reluctant to give up further units of Y (each remaining unit of Y becomes more precious). This is why ICs are convex to the origin.</p>
              <div class="example"><div class="lbl">Worked example from the table above</div>
                <p>Moving A→B: ΔX=+2, ΔY=−3 → MRS=3/2=1.5 (give up 1.5 units of Y per extra X)</p>
                <p>Moving B→C: ΔX=+2, ΔY=−1 → MRS=1/2=0.5 (now willing to give up only 0.5 units of Y)</p>
                <p>MRS falls from 1.5 to 0.5 — diminishing MRS confirmed.</p>
              </div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">The Budget Line (Price Line)</h3>
              <p>The <strong>Budget Line</strong> shows all combinations of two goods that a consumer can purchase by spending their <em>entire</em> income, given the prices of the goods.</p>
              <div style="text-align:center;background:var(--green-soft);border-radius:10px;padding:12px;margin:10px 0">
                <span style="font-size:14px;font-weight:700;font-family:IBM Plex Mono,monospace;color:var(--green-deep)">Px · X + Py · Y = M  (M = Income)</span>
              </div>
              <div class="diagram"><svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="330" fill="#f9f6f0" rx="8"/>
  <line x1="60" y1="20" x2="60" y2="290" stroke="#5a6e63" stroke-width="2"/>
  <line x1="60" y1="290" x2="490" y2="290" stroke="#5a6e63" stroke-width="2"/>
  <text x="22" y="155" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,22,155)">Good Y (units)</text>
  <text x="275" y="312" font-size="12" fill="#5a6e63" text-anchor="middle">Good X (units)</text>
  <!-- Budget line: X-int=8, Y-int=4 -->
  <line x1="60" y1="162" x2="444" y2="290" stroke="#e05a2b" stroke-width="3"/>
  <text x="68" y="154" font-size="12" fill="#e05a2b" font-weight="700">M/Py = 4</text>
  <text x="414" y="310" font-size="12" fill="#e05a2b" font-weight="700">M/Px = 8</text>
  <text x="280" y="50" font-size="11" fill="#e05a2b" text-anchor="middle">Budget Line: Px·X + Py·Y = M</text>
  <text x="280" y="64" font-size="11" fill="#e05a2b" text-anchor="middle">Slope = −Px/Py</text>
  <!-- Shaded affordable area -->
  <polygon points="60,290 60,162 444,290" fill="#1a4731" opacity="0.06"/>
  <text x="160" y="220" font-size="10" fill="#1a4731">Affordable bundles</text>
</svg><div class="dcap">With income M=₹80, Px=₹10, Py=₹20: if all income spent on X, the consumer can buy 8 units (M/Px); if all spent on Y, 4 units (M/Py). The shaded triangle shows all affordable bundles; the line itself shows bundles that use the entire budget. The slope of the budget line = −Px/Py = −10/20 = −0.5.</div></div>
              <p><strong>Shifts in the Budget Line:</strong> A rise in income shifts the line outward (parallel); a fall in income shifts it inward. A change in the price of X or Y rotates the line (changes its slope) around the unchanged intercept.</p>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Consumer Equilibrium</h3>
              <p>A rational consumer maximises satisfaction by choosing the bundle where the <strong>budget line is tangent to the highest attainable indifference curve</strong>. At this point of tangency:</p>
              <div style="text-align:center;background:var(--green-soft);border-radius:10px;padding:12px;margin:10px 0">
                <span style="font-size:14px;font-weight:700;font-family:IBM Plex Mono,monospace;color:var(--green-deep)">MRSxy = Px/Py  (slope of IC = slope of Budget Line)</span>
              </div>
              <div class="diagram"><svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="330" fill="#f9f6f0" rx="8"/>
  <line x1="60" y1="20" x2="60" y2="290" stroke="#5a6e63" stroke-width="2"/>
  <line x1="60" y1="290" x2="490" y2="290" stroke="#5a6e63" stroke-width="2"/>
  <text x="22" y="155" font-size="12" fill="#5a6e63" text-anchor="middle" transform="rotate(-90,22,155)">Good Y (units)</text>
  <text x="275" y="312" font-size="12" fill="#5a6e63" text-anchor="middle">Good X (units)</text>
  <!-- Multiple IC curves -->
  <polyline points="156,98 175,130 204,162 252,194 290,210 348,226" stroke="#9eaaa5" stroke-width="2" fill="none"/>
  <text x="354" y="230" font-size="11" fill="#9eaaa5" font-weight="700">IC₁</text>
  <polyline points="156,-30 180,34 220,98 252,130 300,162 380,194 444,210" stroke="#1a4731" stroke-width="3" fill="none"/>
  <text x="450" y="214" font-size="13" fill="#1a4731" font-weight="700">IC₂</text>
  <polyline points="204,-30 240,34 300,98 348,130 420,162 540,194" stroke="#9eaaa5" stroke-width="2" fill="none"/>
  <text x="528" y="188" font-size="11" fill="#9eaaa5" font-weight="700">IC₃</text>
  <!-- Budget line tangent to IC2 at (4,5) approx -->
  <line x1="60" y1="162" x2="444" y2="290" stroke="#e05a2b" stroke-width="3"/>
  <text x="68" y="154" font-size="11" fill="#e05a2b" font-weight="700">Budget Line</text>
  <!-- Tangency point E on IC2, approx (4,5) -->
  <circle cx="252" cy="130" r="6" fill="#e05a2b"/>
  <text x="262" y="122" font-size="13" fill="#e05a2b" font-weight="700">E (Equilibrium)</text>
    <line x1="60" y1="130" x2="252" y2="130" stroke="#9eaaa5" stroke-width="1.5" stroke-dasharray="5,4"/>
    <line x1="252" y1="290" x2="252" y2="130" stroke="#9eaaa5" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="120" y="50" font-size="10" fill="#1a4731">IC₃ unreachable (beyond budget)</text>
  <text x="350" y="250" font-size="10" fill="#9eaaa5">IC₁ — affordable but lower satisfaction</text>
</svg><div class="dcap">The consumer's budget line is tangent to IC₂ at point E. IC₃ would give higher satisfaction but lies beyond the budget (unaffordable). IC₁ is affordable but gives lower satisfaction than E. So E is the unique equilibrium — the highest satisfaction the consumer can reach given their income.</div></div>

              <h3 style="color:var(--green-deep);margin:22px 0 10px;padding-top:16px;border-top:1px solid var(--line)">Conditions for Consumer Equilibrium</h3>
              <ol>
                <li><strong>First-order condition:</strong> MRSxy = Px/Py (tangency — slopes are equal).</li>
                <li><strong>Second-order condition:</strong> The indifference curve must be convex to the origin at the point of tangency (i.e., MRS is diminishing), ensuring it is a maximum, not a minimum, of satisfaction.</li>
              </ol>

              <div class="casebox"><div class="lbl">Case in point — Choosing a Thali</div>
                <p>Suppose a student has ₹100/day to spend on tea (₹10/cup) and samosas (₹20/piece). The indifference curve approach explains how she picks her daily combination: she keeps comparing the rate at which she's willing to trade tea for samosas (MRS) against the actual market trade-off (Px/Py = 10/20 = 0.5). If she's willing to give up more tea for a samosa than the market requires, she buys more samosas — and vice versa — until MRS = Px/Py, at her personal equilibrium point.</p>
              </div>
            `}
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
            {topicStart:"eco-u3-production", title:"Production Function — Short Run and Long Run", icon:"",
             desc:"What a production function is; short-run vs long-run; total product, average product and marginal product; and the Law of Variable Proportions with its three stages."},
            {h:"Production Function and Law of Variable Proportions", kicker:"Unit 3 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: The Production Function (Q = f(L, K)); Short Run vs Long Run; Total Product (TP), Average Product (AP), Marginal Product (MP) with graphs; Law of Variable Proportions — three stages with TP, AP, MP curves on the same graph, explaining WHY AP and MP first rise then fall.</p></div>`},
            {topicStart:"eco-u3-returns", title:"Returns to Scale and Economies of Scale", icon:"",
             desc:"What happens when ALL inputs are increased proportionally — increasing, constant and decreasing returns to scale; and why large firms often have lower costs per unit."},
            {h:"Returns to Scale and Economies of Scale", kicker:"Unit 3 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Returns to Scale — Increasing, Constant, Decreasing (IRS, CRS, DRS) with PPC-style graphs; Economies of Scale — why larger firms have lower average costs; Types: internal vs external economies; Diseconomies of Scale — when firms become too large. Real Indian examples (Reliance Industries, AMUL).</p></div>`},
            {topicStart:"eco-u3-cost", title:"Concepts of Cost — STC, SAC, SMC, LTC, LAC, LMC", icon:"",
             desc:"Fixed vs variable costs; how short-run and long-run average cost curves behave; the U-shape of SAC and the L-shape of LAC; and what opportunity cost and implicit cost really mean."},
            {h:"Concepts of Cost", kicker:"Unit 3 · Topic 3", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: TFC, TVC, STC; AFC, AVC, SAC, SMC — with graphs showing their shapes and relationships; WHY SAC is U-shaped (LAC of Variable Proportions); LTC, LAC, LMC — the Long-Run Envelope Curve; Opportunity Cost (economic cost vs accounting cost); Implicit Costs (owner's own inputs).</p></div>`},
            {topicStart:"eco-u3-revenue", title:"Revenue and Profit — TR, AR, MR and the Profit Motive", icon:"",
             desc:"Total Revenue, Average Revenue and Marginal Revenue; how they relate to price and elasticity; the concept of profit; normal profit vs supernormal profit."},
            {h:"Revenue and Profit", kicker:"Unit 3 · Topic 4", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: TR, AR, MR — definitions and relationships; AR = Price (under perfect competition); MR curve lies below AR curve (with graph) under monopoly; The AR-MR relationship and elasticity; Gross Profit and Net Profit; Normal Profit vs Supernormal Profit; Profit as the return to entrepreneurship.</p></div>`}
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
            {topicStart:"eco-u4-stats", title:"Meaning, Scope and Importance of Statistics", icon:"",
             desc:"What Statistics means in Economics; why data is the foundation of economic analysis; and how statistical tools help answer economic questions."},
            {h:"Meaning, Scope and Importance of Statistics", kicker:"Unit 4 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Dual meaning of Statistics (plural data vs singular method); Scope in Economics and Commerce; Importance — how GDP growth rates, inflation, unemployment figures are all statistical outputs; Limitations of Statistics (averages hide inequality, data can be manipulated).</p></div>`},
            {topicStart:"eco-u4-types", title:"Types of Data and Data Collection Methods", icon:"",
             desc:"Primary vs secondary data; time series vs cross-section data; qualitative vs quantitative; and how to design a good questionnaire."},
            {h:"Types of Data and Collection Methods", kicker:"Unit 4 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Primary Data (original, collected first-hand) vs Secondary Data (already collected by others); Time Series data (same variable across time — India's GDP from 2000-2024) vs Cross-Section data (same time, different units — GDP of 10 states in 2023); Qualitative vs Quantitative; Features of a Good Questionnaire; Data Sources for Indian Economy (NSO, RBI, PLFS, Census).</p></div>`}
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
            {topicStart:"eco-u5-classify", title:"Classification of Data and Frequency Distributions", icon:"",
             desc:"Discrete vs continuous variables; how to organise raw data into frequency distributions; class intervals, class boundaries and class midpoints."},
            {h:"Classification and Frequency Distribution", kicker:"Unit 5 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Discrete Variables (countable — number of children) vs Continuous Variables (measurable — height, weight, income); Frequency Distribution Tables for both; Class Width, Class Midpoint, Class Boundaries; Relative and Cumulative Frequency; how to construct a good frequency table from raw data.</p></div>`},
            {topicStart:"eco-u5-tabular", title:"Textual and Tabular Presentation of Data", icon:"",
             desc:"Presenting data in words and in well-structured tables; the components of a good statistical table; and why tabular form is more efficient than textual description."},
            {h:"Textual and Tabular Presentation", kicker:"Unit 5 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Textual Presentation (data described in words — limitations); Tabular Presentation — parts of a table (title, stub, caption, body, footnote); Attributes of a Good Table; Constructing frequency tables; Bivariate frequency tables.</p></div>`},
            {topicStart:"eco-u5-graphs", title:"Bar Charts, Histograms and Frequency Polygon", icon:"",
             desc:"How to construct and read bar charts, histograms and frequency polygons — and the crucial difference between a bar chart and a histogram."},
            {h:"Bar Charts, Histograms and Frequency Polygon", kicker:"Unit 5 · Topic 3", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Simple, Multiple and Subdivided Bar Charts (with fully labelled SVG examples); Histogram — why bars touch (continuous data); Frequency Polygon — connecting midpoints; Frequency Bar Diagram; The KEY difference: Bar Chart is for discrete/categorical data; Histogram is for continuous data grouped in class intervals.</p></div>`},
            {topicStart:"eco-u5-piechart", title:"Pie Charts, Ogive and Line Graphs", icon:"",
             desc:"Circular representation of parts; the cumulative frequency curve and how to use it to find median and quartiles graphically; and arithmetic line graphs for time series."},
            {h:"Pie Charts, Ogive and Arithmetic Line Graph", kicker:"Unit 5 · Topic 4", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Pie Chart construction (degrees = percentage × 3.6); Ogive — Less-than and More-than Ogive curves; reading Median, Q1, Q3 graphically from the Ogive; Arithmetic Line Graph (time series — India's GDP growth over years); Multiple Line Graphs; Frequency Curve (smoothed histogram).</p></div>`}
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
            {topicStart:"eco-u6-mean", title:"Arithmetic Mean — Calculation and Properties", icon:"",
             desc:"The most widely used average — three methods for calculating AM for individual, discrete and continuous frequency series; properties and merits/demerits."},
            {h:"Arithmetic Mean", kicker:"Unit 6 · Topic 1", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: AM for Individual Series (direct method); AM for Discrete Frequency Series; AM for Continuous Frequency Series — Direct, Short-Cut (Assumed Mean) and Step-Deviation methods (with worked examples); Properties of AM; Merits and Demerits; Combined Mean formula.</p></div>`},
            {topicStart:"eco-u6-geometric", title:"Geometric Mean — Calculation and Uses", icon:"",
             desc:"When to use geometric mean instead of arithmetic mean — particularly for growth rates, index numbers and ratios."},
            {h:"Geometric Mean", kicker:"Unit 6 · Topic 2", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: GM definition and calculation (nth root of product of n values); Log method for calculation; GM for grouped data; Uses of GM — average growth rates, index numbers; Merits and demerits; Real example: average annual GDP growth rate calculation using GM vs AM.</p></div>`},
            {topicStart:"eco-u6-median", title:"Median, Quartiles, Deciles and Percentiles", icon:"",
             desc:"The positional average; calculating median for all three series types; partition values; and how to find them graphically using the Ogive."},
            {h:"Median, Quartiles, Deciles and Percentiles", kicker:"Unit 6 · Topic 3", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Median — the middle value concept; formula for Individual, Discrete and Continuous series; Interpolation formula for continuous series; Quartiles Q1 and Q3; Deciles and Percentiles (definition and formula only); Graphical determination using Ogive; Merits and demerits of Median vs Mean.</p></div>`},
            {topicStart:"eco-u6-mode", title:"Mode and Comparison of Averages", icon:"",
             desc:"The most frequently occurring value; modal class and interpolation; empirical relationship between Mean, Median and Mode; when to use which average."},
            {h:"Mode and Comparison of Averages", kicker:"Unit 6 · Topic 4", html:`<div style="background:#f8f0db;border-left:4px solid #b6862c;padding:16px;border-radius:8px"><p style="margin:0;color:#8a6420;font-weight:600">Full content page coming soon</p><p style="margin:8px 0 0;color:#3c4742">This page will cover: Mode — most frequently occurring value; Modal class identification; Interpolation formula for continuous series; Mode for Individual and Discrete series; Empirical Relationship: Mode = 3 Median − 2 Mean; Comparison of AM, GM, Median, Mode — when to use each; Advantages and Disadvantages of Mode.</p></div>`}
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

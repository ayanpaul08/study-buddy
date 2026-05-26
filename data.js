/* ============================================================================
   data.js — All content lives here. index.html never needs to change.
   ============================================================================

   HOW TO ADD CONTENT
   ------------------
   Each unit's topics array contains one object with two arrays:
     learn[]     → teaching cards (prose, diagram, example, caseStudy)
     questions[] → MCQs with per-option explanations

   LEARN BLOCK types:
     {h:"Heading", kicker:"LABEL", html:"<p>...</p>"}
     {diagram:"<svg>...</svg>", cap:"caption"}
     {example:"plain text"}
     {caseStudy:"plain text"}

   QUESTION fields:
     type        : "standard" | "assertion" | "matching" | "case"
     q           : question text
     options     : array of 4 option strings
     answer      : index of correct option (0–3)
     explain     : overall explanation shown in the result banner
     optionExplains : array of 4 strings — why each option is right or wrong
                      (shown beneath each option after answering)

   For "assertion" type add: assertion, reason  (instead of q)
   For "matching"  type add: columnA[], columnB[]  (instead of q)
   For "case"      type add: passage  (in addition to q)
   ============================================================================ */

const DATA = {

  /* ══════════════════════════════════════════════════════════════════════════
     ACCOUNTANCY
     Semester I: Unit 1 (12m) · Unit 2 (16m) · Unit 3 (6m) · Unit 4 (6m)
     ══════════════════════════════════════════════════════════════════════════ */
  accountancy:{
    name:"Accountancy", code:"ACC", accent:"ready",
    units:[
      {
        id:"acc-u1",
        title:"Introduction & Theory Base of Accounting",
        marks:12,
        topics:[{
          learn:[
            {h:"What is Accounting?", kicker:"Unit 1 · Foundation", html:`
              <p><strong>Accounting</strong> is the process of <strong>identifying, recording, classifying, summarising, analysing and communicating</strong> financial transactions of a business to interested users.</p>
              <p>Three related terms are often confused:</p>
              <ul>
                <li><b>Book-keeping</b> — the routine <i>recording</i> of transactions. It is the narrow, clerical first stage.</li>
                <li><b>Accounting</b> — recording <i>plus</i> classifying, summarising, analysing and interpreting. Broader than book-keeping.</li>
                <li><b>Accountancy</b> — the whole body of knowledge, rules and principles that govern accounting. The widest term.</li>
              </ul>
              <p><strong>Objectives:</strong> maintaining systematic records, ascertaining profit or loss, showing the financial position, and providing information for decisions.</p>`},

            {diagram:`<svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace">
              ${['Identify','Record','Classify','Summarise','Analyse','Communicate'].map((t,i)=>{
                const x=10+i*112;return `<g>
                  <rect x="${x}" y="38" width="98" height="44" rx="9" fill="#e3eee6" stroke="#2f6b4f" stroke-width="1.5"/>
                  <text x="${x+49}" y="64" text-anchor="middle" font-size="13" font-weight="600" fill="#234f3b">${t}</text>
                  ${i<5?`<path d="M${x+98} 60 L${x+112} 60" stroke="#b6862c" stroke-width="2"/><path d="M${x+108} 56 L${x+113} 60 L${x+108} 64" fill="#b6862c"/>`:''}
                </g>`}).join('')}
              <text x="340" y="22" text-anchor="middle" font-size="12" fill="#3c4742" font-style="italic" font-family="Fraunces">The accounting process, stage by stage</text>
            </svg>`, cap:"From a raw transaction to information a user can act on."},

            {example:"A trader buys goods worth ₹50,000 on credit. Book-keeping merely records the entry. Accounting goes further — it tells the owner this increased both stock and creditors, and later helps judge whether buying on credit was wise."},

            {h:"Users of Accounting Information", kicker:"Who reads the accounts?", html:`
              <p>Users fall into two groups depending on whether they are <i>inside</i> or <i>outside</i> the business.</p>`},

            {diagram:`<svg viewBox="0 0 660 230" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Sans, sans-serif">
              <rect x="250" y="10" width="160" height="40" rx="10" fill="#234f3b"/>
              <text x="330" y="35" text-anchor="middle" font-size="14" font-weight="600" fill="#f4efe3">Accounting Information</text>
              <line x1="160" y1="50" x2="160" y2="78" stroke="#b6862c" stroke-width="2"/>
              <line x1="500" y1="50" x2="500" y2="78" stroke="#b6862c" stroke-width="2"/>
              <line x1="160" y1="50" x2="500" y2="50" stroke="#b6862c" stroke-width="2"/>
              <rect x="60" y="78" width="200" height="34" rx="8" fill="#e3eee6" stroke="#2f6b4f"/>
              <text x="160" y="100" text-anchor="middle" font-size="13" font-weight="600" fill="#234f3b">INTERNAL users</text>
              <rect x="400" y="78" width="200" height="34" rx="8" fill="#f8f0db" stroke="#b6862c"/>
              <text x="500" y="100" text-anchor="middle" font-size="13" font-weight="600" fill="#8a6420">EXTERNAL users</text>
              ${['Owners','Management','Employees'].map((t,i)=>`<text x="160" y="${135+i*26}" text-anchor="middle" font-size="12.5" fill="#3c4742">• ${t}</text>`).join('')}
              ${['Investors / lenders','Creditors &amp; suppliers','Government &amp; tax','Customers, public, researchers'].map((t,i)=>`<text x="500" y="${135+i*23}" text-anchor="middle" font-size="12" fill="#3c4742">• ${t}</text>`).join('')}
            </svg>`, cap:"Internal users run the business; external users deal with it from outside."},

            {h:"Sub-fields of Accounting", kicker:"Branches", html:`
              <p>The same raw data is processed differently for different purposes:</p>
              <table class="cmp">
                <tr><th>Branch</th><th>Main purpose</th><th>Focus</th></tr>
                <tr><td><b>Financial Accounting</b></td><td>Record past transactions; prepare final accounts</td><td>The whole business, historically</td></tr>
                <tr><td><b>Cost Accounting</b></td><td>Ascertain and control the cost of products/services</td><td>Costs, in detail</td></tr>
                <tr><td><b>Management Accounting</b></td><td>Provide information for planning &amp; decisions</td><td>The future, for managers</td></tr>
              </table>`},

            {h:"Basic Accounting Terms", kicker:"The vocabulary", html:`
              <ul>
                <li><b>Assets</b> — resources owned (e.g. cash, machinery, debtors). <i>Fixed</i> assets are held long-term; <i>current</i> assets convert to cash within a year.</li>
                <li><b>Liabilities</b> — amounts owed to outsiders (e.g. creditors, loans).</li>
                <li><b>Capital</b> — the owner's claim on the business: Capital = Assets − Liabilities.</li>
                <li><b>Drawings</b> — cash or goods withdrawn by the owner for personal use.</li>
                <li><b>Revenue / Income</b> — amount earned from sales and other operations.</li>
                <li><b>Expense</b> — cost incurred to earn revenue.</li>
                <li><b>Debtors</b> owe the business; the business owes its <b>Creditors</b>.</li>
              </ul>`},

            {example:"Ramesh starts a business with ₹2,00,000 cash and takes a ₹50,000 loan. Assets = ₹2,50,000, Liabilities = ₹50,000, so Capital = ₹2,00,000 — exactly what he put in."},

            {h:"Accounting Concepts & Principles (GAAP)", kicker:"The rules behind the rules", html:`
              <p>These agreed assumptions make accounts comparable and reliable:</p>
              <ul>
                <li><b>Business Entity</b> — the business is separate from its owner. This is why drawings are recorded.</li>
                <li><b>Money Measurement</b> — only things expressible in money are recorded.</li>
                <li><b>Going Concern</b> — assume the business will continue for the foreseeable future.</li>
                <li><b>Accounting Period</b> — results are measured for fixed periods (usually a year).</li>
                <li><b>Cost Concept</b> — assets are recorded at acquisition cost, not market value.</li>
                <li><b>Dual Aspect</b> — every transaction has two effects: Assets = Liabilities + Capital.</li>
                <li><b>Matching</b> — match expenses against the revenues they helped earn.</li>
                <li><b>Conservatism / Prudence</b> — anticipate no profit, but provide for all possible losses.</li>
                <li><b>Consistency</b> — use the same methods year after year so figures compare.</li>
              </ul>`},

            {caseStudy:"A firm values closing stock at cost ₹80,000 though its market value is ₹95,000. Why the lower figure? The Prudence concept — do not record an unrealised gain, but always provide for possible loss. Stock is valued at cost or market price, whichever is lower."},

            {h:"Overview of GST", kicker:"Modern context", html:`
              <p><strong>GST (Goods and Services Tax)</strong> is a single indirect tax on the supply of goods and services, charged at each stage with credit for tax already paid (<b>Input Tax Credit</b>).</p>
              <ul>
                <li><b>CGST</b> — collected by the Centre on intra-state supply.</li>
                <li><b>SGST</b> — collected by the State on intra-state supply.</li>
                <li><b>IGST</b> — collected by the Centre on inter-state supply.</li>
              </ul>
              <p>Intra-state sale → CGST + SGST. &nbsp; Inter-state sale → IGST.</p>`},

            {example:"A Kolkata shop sells to a Kolkata customer (intra-state) → CGST + SGST. The same shop sells to a Mumbai customer (inter-state) → IGST only."}
          ],

          questions:[
            {
              type:"standard",
              q:"Which of the following is the widest term?",
              options:["Book-keeping","Accounting","Accountancy","Journalising"],
              answer:2,
              explain:"Accountancy is the complete body of knowledge, rules and principles. Accounting applies those rules. Book-keeping is the narrow recording stage within accounting.",
              optionExplains:[
                "Book-keeping is only the first, clerical stage — recording transactions. It is contained within accounting, making it the narrowest of the three terms.",
                "Accounting is broader than book-keeping (it includes classifying, summarising and interpreting), but it is itself a part of accountancy, not the widest term.",
                "Correct. Accountancy encompasses the entire body of knowledge — the principles, rules, and practices that govern accounting and book-keeping.",
                "Journalising is a specific technique within book-keeping (recording transactions in the journal). It is the narrowest of all the options listed."
              ]
            },
            {
              type:"standard",
              q:"Recording, classifying and summarising transactions is the function of:",
              options:["Auditing","Accounting","Costing","Taxation"],
              answer:1,
              explain:"These three steps — record, classify, summarise — are the core stages of the accounting process.",
              optionExplains:[
                "Auditing is the independent examination of financial records to verify their accuracy. It does not record or classify transactions — it checks what has already been done.",
                "Correct. Recording, classifying and summarising are the three foundational stages of accounting.",
                "Costing ascertains the cost of producing goods or services. It uses accounting data but is focused on cost analysis, not the basic recording process.",
                "Taxation is the calculation and compliance of tax obligations. It relies on accounting information but is not itself the function of recording transactions."
              ]
            },
            {
              type:"assertion",
              assertion:"Drawings are deducted from the owner's capital.",
              reason:"According to the Business Entity concept, the business and its owner are treated as separate.",
              options:[
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is NOT the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"
              ],
              answer:0,
              explain:"Because the business is separate from its owner (entity concept), money withdrawn for personal use (drawings) reduces the owner's claim on the business — i.e. capital. R correctly explains A.",
              optionExplains:[
                "Correct. A is true: drawings reduce capital. R is also true: the entity concept treats owner and business as separate. And R directly causes A — because they are separate, personal withdrawals affect the owner's capital account.",
                "This would apply if both statements were true but unrelated. Here they are directly connected — the entity concept is precisely why drawings affect capital, not something else.",
                "R is not false. The Business Entity concept is a well-established GAAP principle stating that the business and the owner are separate legal/accounting entities.",
                "A is not false. Drawings definitely reduce capital — this is a fundamental accounting treatment. Capital = Opening Capital + Profit − Drawings."
              ]
            },
            {
              type:"standard",
              q:"Capital = Assets − Liabilities is a direct result of which concept?",
              options:["Going Concern","Matching","Dual Aspect","Conservatism"],
              answer:2,
              explain:"The Dual Aspect concept states every transaction has two equal effects, giving the equation Assets = Liabilities + Capital, which rearranges to Capital = Assets − Liabilities.",
              optionExplains:[
                "Going Concern assumes the business will continue operating indefinitely. It influences how assets are valued (e.g. at cost rather than liquidation value) but does not generate the Capital equation.",
                "The Matching concept matches revenues with the expenses incurred to earn them. It determines how profit is calculated — it does not define the relationship between assets, liabilities and capital.",
                "Correct. Dual Aspect: every debit has an equal credit. This gives Assets = Liabilities + Capital, which directly produces Capital = Assets − Liabilities.",
                "Conservatism (Prudence) says anticipate losses but not gains. It affects asset/liability valuation (e.g. stock at lower of cost or market) but does not derive the capital equation."
              ]
            },
            {
              type:"matching",
              q:"Match the concept in Column A with its core idea in Column B:",
              columnA:["(i) Going Concern","(ii) Prudence","(iii) Cost Concept","(iv) Money Measurement"],
              columnB:["(a) Record assets at purchase price","(b) Business will continue operating","(c) Only money-measurable items recorded","(d) Provide for losses, not unrealised gains"],
              options:["i-b, ii-d, iii-a, iv-c","i-a, ii-b, iii-c, iv-d","i-c, ii-a, iii-d, iv-b","i-d, ii-c, iii-b, iv-a"],
              answer:0,
              explain:"Going Concern = business continues (b). Prudence = provide for losses not unrealised gains (d). Cost Concept = record at purchase price (a). Money Measurement = only monetary items (c).",
              optionExplains:[
                "Correct. i-b: Going Concern assumes continuity. ii-d: Prudence anticipates losses not profits. iii-a: Cost Concept records at original purchase price. iv-c: Money Measurement restricts accounting to monetary items.",
                "Incorrect pairing. Going Concern does not mean recording at purchase price (that is the Cost Concept). Prudence does not mean the business continues (that is Going Concern).",
                "Incorrect pairing. Going Concern is not about recording only monetary items. Prudence does not mean recording at purchase price. The columns are mismatched throughout.",
                "Incorrect pairing. Going Concern is not about providing for losses (that is Prudence). Money Measurement does not mean the business continues (that is Going Concern)."
              ]
            },
            {
              type:"standard",
              q:"Closing stock is valued at cost or market price, whichever is lower. This follows the concept of:",
              options:["Consistency","Conservatism (Prudence)","Materiality","Accrual"],
              answer:1,
              explain:"Prudence says: do not anticipate profits but provide for all possible losses. Valuing stock at the lower of cost or market value avoids recording an unrealised gain.",
              optionExplains:[
                "Consistency means using the same accounting methods from year to year so figures remain comparable. It does not determine how stock is valued — it says whatever method is chosen should be applied consistently.",
                "Correct. Conservatism / Prudence: anticipate no profit, provide for all losses. If market price has fallen below cost, the loss is recognised immediately; if market price is higher, the gain is ignored until realised.",
                "Materiality means only items significant enough to influence decisions need full disclosure. It is about the threshold for recording detail, not the basis of stock valuation.",
                "The Accrual concept records income when earned and expenses when incurred, regardless of cash flow. It determines the timing of recognition, not the basis of valuing assets like stock."
              ]
            },
            {
              type:"case",
              passage:"Mr. Sen runs a stationery shop in Kolkata. During the year he withdrew ₹40,000 for household expenses, valued his delivery van at its original purchase price of ₹3,00,000 (current market value ₹2,10,000), and prepared his accounts assuming the shop will continue operating next year.",
              q:"Recording the van at ₹3,00,000 rather than ₹2,10,000 reflects which concept?",
              options:["Going Concern","Cost Concept","Business Entity","Matching"],
              answer:1,
              explain:"The Cost Concept requires fixed assets to be recorded at their original acquisition (historical) cost, not at fluctuating market values.",
              optionExplains:[
                "Going Concern explains why Mr. Sen prepares accounts assuming continuity — but it does not determine the value at which the van is recorded. Going Concern affects which valuation basis is appropriate, but the specific rule is the Cost Concept.",
                "Correct. Cost Concept: assets are entered in the books at their purchase price and remain there (subject to depreciation). Current market value is irrelevant to the recording.",
                "Business Entity explains why Mr. Sen's personal withdrawals (drawings) are treated separately from the business. It does not determine the valuation basis of a business asset.",
                "The Matching concept matches expenses with revenues. Depreciation links to it, but the initial recording of the van at purchase price is governed by the Cost Concept, not Matching."
              ]
            },
            {
              type:"case",
              passage:"Mr. Sen runs a stationery shop in Kolkata. During the year he withdrew ₹40,000 for household expenses, valued his delivery van at its original purchase price of ₹3,00,000, and prepared his accounts assuming the shop will continue operating next year.",
              q:"His assumption that the shop will keep operating next year is the:",
              options:["Accounting Period concept","Going Concern concept","Prudence concept","Dual Aspect concept"],
              answer:1,
              explain:"Assuming the business will continue for the foreseeable future — and therefore not liquidating assets — is the Going Concern concept.",
              optionExplains:[
                "The Accounting Period concept divides the life of a business into fixed intervals (e.g. a year) for reporting. It does not address the assumption that the business will continue — that is Going Concern.",
                "Correct. Going Concern: the business is assumed to be a continuing enterprise. This is why assets are valued at cost rather than forced-sale (liquidation) value.",
                "Prudence means providing for losses and not anticipating gains. It does not address the assumption of business continuity.",
                "Dual Aspect states that every transaction has equal and opposite effects (debit = credit). It has no relation to the assumption of business continuity."
              ]
            },
            {
              type:"standard",
              q:"A sale within the same state attracts which combination of GST?",
              options:["IGST only","CGST + SGST","SGST only","CGST + IGST"],
              answer:1,
              explain:"Intra-state supply is taxed jointly by Centre (CGST) and State (SGST). Inter-state supply attracts only IGST, collected by the Centre.",
              optionExplains:[
                "IGST (Integrated GST) applies to inter-state supply — transactions crossing a state border. A sale within the same state does not attract IGST.",
                "Correct. For intra-state transactions, GST is split equally between Centre and State: CGST + SGST. Both are charged at the applicable rate, e.g. 9% CGST + 9% SGST = 18% total.",
                "SGST alone cannot apply. The Centre always levies CGST alongside SGST on intra-state supply. SGST collected alone is not a valid GST scenario.",
                "CGST + IGST is not a valid combination. CGST applies to intra-state sales while IGST applies to inter-state sales — these are mutually exclusive scenarios and cannot apply simultaneously."
              ]
            },
            {
              type:"standard",
              q:"Which user of accounting information is an INTERNAL user?",
              options:["Income Tax Department","A bank considering a loan","Management","Trade creditors"],
              answer:2,
              explain:"Management is inside the business and uses accounts for planning, control and decision-making. All other options are external parties.",
              optionExplains:[
                "The Income Tax Department is a government body — an external user. It uses accounting information to assess tax liability but has no role inside the business.",
                "A bank evaluating a loan application is an external user. It examines accounts to judge creditworthiness and repayment capacity, but it is not part of the business.",
                "Correct. Management (directors, managers) are internal users. They need detailed, timely accounting information to plan operations, control costs and make decisions.",
                "Trade creditors supply goods or services on credit. They are external to the business and use accounts to assess whether the business can pay its dues on time."
              ]
            },
            {
              type:"assertion",
              assertion:"Cost Accounting is a sub-field of accounting.",
              reason:"Its purpose is to record only the past transactions of the whole business for outsiders.",
              options:[
                "Both A and R are true, and R is the correct explanation of A",
                "Both A and R are true, but R is NOT the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"
              ],
              answer:2,
              explain:"A is true — Cost Accounting is a branch of accounting. R is false — recording past transactions for outsiders is the purpose of Financial Accounting, not Cost Accounting. Cost Accounting ascertains and controls costs, primarily for internal management.",
              optionExplains:[
                "R is factually wrong, so this option cannot apply. Recording past transactions of the whole business for outsiders describes Financial Accounting, not Cost Accounting.",
                "This would require R to be true but unrelated to A. R is not true — Cost Accounting does not exist to record past transactions for outsiders. So this option is also incorrect.",
                "Correct. A is true: Cost Accounting is indeed a sub-field of accounting. R is false: its purpose is internal — ascertaining, analysing and controlling costs — not recording general transactions for external users.",
                "A is not false. Cost Accounting is a well-recognised sub-field alongside Financial Accounting and Management Accounting. Only R is false."
              ]
            },
            {
              type:"standard",
              q:"Amounts owed BY the business to outsiders are called:",
              options:["Assets","Debtors","Liabilities","Capital"],
              answer:2,
              explain:"Liabilities are obligations — amounts the business owes to external parties such as creditors, lenders and banks.",
              optionExplains:[
                "Assets are resources owned or controlled by the business (cash, machinery, debtors). They represent what the business has, not what it owes.",
                "Debtors are persons or entities who owe money to the business — the opposite direction. They are an asset (receivable) of the business, not an amount the business owes.",
                "Correct. Liabilities are the financial obligations of the business — amounts owed to outsiders. Examples: trade creditors, bank loans, outstanding expenses.",
                "Capital is the owner's investment in the business — their equity claim. It is not an external obligation; it represents the owner's stake, not a third-party debt."
              ]
            }
          ]
        }]
      },
      {
        id:"acc-u2",
        title:"Fundamental Accounting Process – I",
        marks:16,
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
        id:"acc-u3",
        title:"Reserves & Provisions",
        marks:6,
        syllabus:[
          "Provisions and Reserves — meaning and need",
          "Difference between Provisions and Reserves",
          "Types of Reserves (General, Specific, Capital, Revenue, Secret)"
        ],
        topics:[]
      },
      {
        id:"acc-u4",
        title:"Bills of Exchange",
        marks:6,
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
     Semester I: Unit 1 (Intro) · Unit 2 (Cost Classification & Cost Sheet)
                 Unit 3 (Taxation Intro & Income Tax) · Unit 4 (Residential Status)
     ══════════════════════════════════════════════════════════════════════════ */
  costing:{
    name:"Costing & Taxation", code:"C&T", accent:"soon",
    units:[
      {
        id:"ct-u1",
        title:"Introduction to Cost Accounting",
        marks:0,
        syllabus:[
          "Meaning, objectives and importance of Cost Accounting",
          "Difference between Financial Accounting and Cost Accounting",
          "Cost concepts — cost unit, cost centre"
        ],
        topics:[]
      },
      {
        id:"ct-u2",
        title:"Classification of Cost & Cost Sheet",
        marks:0,
        syllabus:[
          "Classification of Cost — by nature, function, behaviour and controllability",
          "Fixed, Variable and Semi-variable costs",
          "Preparation of Cost Sheet — format and components",
          "Prime Cost, Works Cost, Cost of Production, Cost of Goods Sold, Total Cost"
        ],
        topics:[]
      },
      {
        id:"ct-u3",
        title:"Introduction to Taxation & Income Tax Basics",
        marks:0,
        syllabus:[
          "Introduction — meaning and types of taxes (direct and indirect)",
          "Basic concepts and definitions under the Income Tax Act",
          "Previous Year and Assessment Year",
          "Gross Total Income and Total Income",
          "Incomes which do not form part of Total Income (exempted incomes)"
        ],
        topics:[]
      },
      {
        id:"ct-u4",
        title:"Residential Status and Incidence of Tax",
        marks:0,
        syllabus:[
          "Determination of Residential Status — Resident, Non-Resident, Not Ordinarily Resident",
          "Rules for Individual, HUF, Company",
          "Incidence of Tax based on Residential Status",
          "Scope of Total Income for different residential statuses"
        ],
        topics:[]
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     ECONOMICS (with Statistics)
     Semester I: Units 1–3 Microeconomics · Units 4–6 Statistics
     ══════════════════════════════════════════════════════════════════════════ */
  economics:{
    name:"Economics (with Statistics)", code:"ECO", accent:"soon",
    units:[
      {
        id:"eco-u1",
        title:"Introduction to Microeconomics",
        marks:0,
        syllabus:[
          "Meaning and scope of Economics",
          "Difference between Microeconomics and Macroeconomics",
          "Basic economic problems — what, how, for whom to produce",
          "Central problems of an economy",
          "Production Possibility Curve (PPC)"
        ],
        topics:[]
      },
      {
        id:"eco-u2",
        title:"Demand, Supply and Equilibrium Price",
        marks:0,
        syllabus:[
          "Meaning of Demand — individual and market demand",
          "Law of Demand — assumptions, exceptions",
          "Determinants of Demand; shifts in demand curve",
          "Meaning of Supply — individual and market supply",
          "Law of Supply — assumptions",
          "Determinants of Supply; shifts in supply curve",
          "Market Equilibrium — determination of equilibrium price and quantity",
          "Effects of shifts in demand and supply on equilibrium"
        ],
        topics:[]
      },
      {
        id:"eco-u3",
        title:"Elasticity of Demand & Supply · Consumer & Production Theory",
        marks:0,
        syllabus:[
          "Price Elasticity of Demand — meaning, types, measurement (percentage method)",
          "Factors affecting Elasticity of Demand",
          "Price Elasticity of Supply — meaning and measurement",
          "Theory of Consumer Behaviour — utility, total utility, marginal utility, Law of DMU",
          "Indifference Curve approach — budget line, consumer equilibrium",
          "Theory of Production — meaning of production function",
          "Short-run and Long-run production; Law of Variable Proportions",
          "Returns to Scale",
          "Cost of Production — types of costs (TC, TFC, TVC, AC, MC)",
          "Revenue — TR, AR, MR; relationship between AR and MR",
          "Profit — normal profit and supernormal profit"
        ],
        topics:[]
      },
      {
        id:"eco-u4",
        title:"Introduction to Statistics & Data",
        marks:0,
        syllabus:[
          "Meaning, scope and importance of Statistics in Economics",
          "Types of data — primary and secondary data",
          "Methods of collecting primary data (questionnaire, interview, observation)",
          "Sources of secondary data",
          "Sampling methods — random and non-random"
        ],
        topics:[]
      },
      {
        id:"eco-u5",
        title:"Representation of Data",
        marks:0,
        syllabus:[
          "Classification and tabulation of data",
          "Frequency distribution — discrete and continuous",
          "Diagrammatic representation — bar diagrams, pie charts",
          "Graphic representation — histogram, frequency polygon, ogive (cumulative frequency curve)"
        ],
        topics:[]
      },
      {
        id:"eco-u6",
        title:"Measures of Central Tendency",
        marks:0,
        syllabus:[
          "Arithmetic Mean — simple and weighted; direct, short-cut and step-deviation methods",
          "Median — individual, discrete and continuous series; graphical determination",
          "Mode — individual and discrete series; grouping method for continuous series",
          "Relationship between Mean, Median and Mode"
        ],
        topics:[]
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     BUSINESS MATHEMATICS & STATISTICS
     Semester I: Unit 1 (Algebra) · Unit 2 (Statistics) · Unit 3 (Sets) · Unit 4 (Trigonometry)
     ══════════════════════════════════════════════════════════════════════════ */
  bmaths:{
    name:"Business Maths & Statistics", code:"BMS", accent:"soon",
    units:[
      {
        id:"bm-u1",
        title:"Algebra",
        marks:0,
        syllabus:[
          "Theory of Quadratic Equations — roots, nature of roots, discriminant, sum and product of roots",
          "Compound Interest — formula, effective rate of interest, present value",
          "Taxes — types of taxes, calculation of tax, GST computation basics"
        ],
        topics:[]
      },
      {
        id:"bm-u2",
        title:"Statistics",
        marks:0,
        syllabus:[
          "Arithmetic Mean for Discrete Data — direct and short-cut methods",
          "Arithmetic Mean for Grouped (Continuous) Data — direct, short-cut, step-deviation methods",
          "Mode for Discrete Data — inspection and grouping method",
          "Median for Discrete Data — cumulative frequency method"
        ],
        topics:[]
      },
      {
        id:"bm-u3",
        title:"Theory of Sets",
        marks:0,
        syllabus:[
          "Meaning and types of sets — empty, finite, infinite, equal, equivalent",
          "Subset, Universal Set, Power Set",
          "Operations on Sets — union, intersection, difference, complement",
          "Venn Diagrams — representation and application to problems",
          "De Morgan's Laws"
        ],
        topics:[]
      },
      {
        id:"bm-u4",
        title:"Trigonometry",
        marks:0,
        syllabus:[
          "Trigonometrical Ratios — sin, cos, tan, cosec, sec, cot",
          "Ratios of standard angles (0°, 30°, 45°, 60°, 90°)",
          "Trigonometric identities",
          "Application problems using trigonometrical ratios"
        ],
        topics:[]
      }
    ]
  }

}; // ← end of DATA

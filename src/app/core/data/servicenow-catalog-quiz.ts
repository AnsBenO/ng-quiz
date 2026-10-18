import { Quiz } from "../models/quiz.models";

export const SERVICENOW_CATALOG_QUIZ: Quiz = {
      id: 'servicenow-service-catalog-lab',
      title: 'ServiceNow Service Catalog: Variable Sets, Order Guides & Record Producers',
      description:
            'Practice the concepts from the onboarding lab: variable sets, catalog items, order guides, record producers, and the REQ / RITM / SCTASK lifecycle.',
      subject: 'ServiceNow',
      category: 'Service Catalog',
      difficulty: 'intermediate',
      language: 'en',
      passingScore: 70,
      questions: [
            // ───────────── Step 1: Variable Sets & Catalog Variables ─────────────
            {
                  id: 'q1',
                  type: 'single_choice',
                  question: 'What is a Variable Set in the Service Catalog?',
                  options: [
                        { id: 'a', text: 'A single question displayed on one catalog form only' },
                        { id: 'b', text: 'A reusable collection of catalog variables that can be attached to supported catalog forms' },
                        { id: 'c', text: 'A script that sets field values on the Incident table' },
                        { id: 'd', text: 'A list of rules that decides which items appear in an order guide' }
                  ],
                  correctAnswers: ['b'],
                  hint: 'Think "define once, reuse everywhere".',
                  explanation:
                        'A Variable Set groups catalog variables so you can define the questions once and reuse them across multiple items and order guides.',
                  tags: ['variable-set', 'definitions']
            },
            {
                  id: 'q2',
                  type: 'single_choice',
                  question:
                        'Which type of variable set did you create to hold the employee first and last names in the lab?',
                  options: [
                        { id: 'a', text: 'Multi-Row Variable Set (MRVS)' },
                        { id: 'b', text: 'Record Variable Set' },
                        { id: 'c', text: 'Single-Row Variable Set' },
                        { id: 'd', text: 'Script Variable Set' }
                  ],
                  correctAnswers: ['c'],
                  hint: 'There is one set of fields, and one employee per order.',
                  explanation:
                        'A Single-Row Variable Set groups related variables into a single set of fields, which is what you need for one employee\'s first and last name.',
                  tags: ['variable-set', 'single-row']
            },
            {
                  id: 'q3',
                  type: 'true_false',
                  question:
                        'A Multi-Row Variable Set (MRVS) lets users enter multiple rows of related data, such as several devices or several employees.',
                  options: [
                        { id: 'true', text: 'True' },
                        { id: 'false', text: 'False' }
                  ],
                  correctAnswers: ['true'],
                  explanation:
                        'That is exactly the purpose of an MRVS, as opposed to a Single-Row Variable Set, which holds just one set of values.',
                  tags: ['variable-set', 'mrvs']
            },
            {
                  id: 'q4',
                  type: 'multiple_choice',
                  question: 'Which are benefits of using a Variable Set? (Select all that apply)',
                  options: [
                        { id: 'a', text: 'Questions are defined once and managed centrally' },
                        { id: 'b', text: 'The same set can be attached to multiple catalog items' },
                        { id: 'c', text: 'It automatically creates a Catalog Task for every item' },
                        { id: 'd', text: 'It can also be attached to an order guide' }
                  ],
                  correctAnswers: ['a', 'b', 'd'],
                  explanation:
                        'Variable sets provide reuse and central management. They have nothing to do with creating Catalog Tasks, which depend on fulfillment configuration.',
                  tags: ['variable-set', 'reuse']
            },
            {
                  id: 'q5',
                  type: 'single_choice',
                  question: 'Which navigation path leads to the list of Variable Sets?',
                  options: [
                        { id: 'a', text: 'All → Service Catalog → Catalog Definition → Maintain Items' },
                        { id: 'b', text: 'All → Service Catalog → Catalog Variables → Variable Sets' },
                        { id: 'c', text: 'All → Service Catalog → Catalog Definition → My Order Guides' },
                        { id: 'd', text: 'All → Incident → Variable Sets' }
                  ],
                  correctAnswers: ['b'],
                  explanation:
                        'Variable Sets live under Service Catalog → Catalog Variables. "Maintain Items" and "My Order Guides" are under Catalog Definition.',
                  tags: ['navigation', 'variable-set']
            },
            {
                  id: 'q6',
                  type: 'single_choice',
                  question: 'What is a Catalog Variable?',
                  options: [
                        { id: 'a', text: 'A question or input field on a catalog form that captures information from the requester' },
                        { id: 'b', text: 'A global system property that controls the catalog' },
                        { id: 'c', text: 'A task created to fulfill a Requested Item' },
                        { id: 'd', text: 'A table that stores all Requests' }
                  ],
                  correctAnswers: ['a'],
                  explanation:
                        'A Catalog Variable captures information such as a name, date, choice, or description from the requester.',
                  tags: ['catalog-variable', 'definitions']
            },
            {
                  id: 'q7',
                  type: 'multiple_choice',
                  question:
                        'Which variables were created in the "New Hire Information" variable set? (Select all that apply)',
                  options: [
                        { id: 'a', text: 'emp_first_name (Single Line Text)' },
                        { id: 'b', text: 'outage_summary (Single Line Text)' },
                        { id: 'c', text: 'emp_last_name (Single Line Text)' },
                        { id: 'd', text: 'emp_email (Email)' }
                  ],
                  correctAnswers: ['a', 'c'],
                  explanation:
                        'The set contains emp_first_name and emp_last_name. outage_summary belongs to the Record Producer, and emp_email was not part of the lab.',
                  tags: ['variable-set', 'lab']
            },
            {
                  id: 'q8',
                  type: 'single_choice',
                  question: 'In the variable set, the variables have Order values of 100 and 200. What does the Order field control?',
                  options: [
                        { id: 'a', text: 'The sequence in which the variables are displayed on the form' },
                        { id: 'b', text: 'The priority of the resulting Request' },
                        { id: 'c', text: 'The number of times a variable may be submitted' },
                        { id: 'd', text: 'Whether the variable is mandatory' }
                  ],
                  correctAnswers: ['a'],
                  hint: 'Leaving gaps (100, 200, 300…) makes it easy to insert variables later.',
                  explanation:
                        'The Order value determines the display sequence of variables. Spacing the values out leaves room to insert new variables in between.',
                  tags: ['catalog-variable', 'order']
            },
            {
                  id: 'q9',
                  type: 'true_false',
                  question: 'Marking a catalog variable as Mandatory means the requester must fill it in before the form can be submitted.',
                  options: [
                        { id: 'true', text: 'True' },
                        { id: 'false', text: 'False' }
                  ],
                  correctAnswers: ['true'],
                  explanation: 'Mandatory variables must have a value before the catalog form can be submitted.',
                  tags: ['catalog-variable', 'mandatory']
            },
            {
                  id: 'q10',
                  type: 'single_choice',
                  question: 'Where do you add individual variables to a variable set?',
                  options: [
                        { id: 'a', text: 'In the Rule Base related list' },
                        { id: 'b', text: 'In the Variables related list of the variable set' },
                        { id: 'c', text: 'In the Script field of the variable set' },
                        { id: 'd', text: 'In the Catalog Tasks related list' }
                  ],
                  correctAnswers: ['b'],
                  explanation: 'After saving the variable set, use the Variables related list and click New to create each variable.',
                  tags: ['variable-set', 'catalog-variable']
            },

            // ───────────── Step 2: Catalog Items ─────────────
            {
                  id: 'q11',
                  type: 'single_choice',
                  question: 'What does ordering a standard Catalog Item normally create?',
                  options: [
                        { id: 'a', text: 'An Incident (incident)' },
                        { id: 'b', text: 'Only a Catalog Task (SCTASK)' },
                        { id: 'c', text: 'A Request (REQ) and a Requested Item (RITM)' },
                        { id: 'd', text: 'A new Variable Set' }
                  ],
                  correctAnswers: ['c'],
                  explanation: 'Ordering a catalog item normally creates a Request (REQ) and a Requested Item (RITM).',
                  tags: ['catalog-item', 'req-ritm']
            },
            {
                  id: 'q12',
                  type: 'single_choice',
                  question: 'Which navigation path is used to create catalog items in the lab?',
                  options: [
                        { id: 'a', text: 'All → Service Catalog → Catalog Definition → Maintain Items' },
                        { id: 'b', text: 'All → Service Catalog → Catalog Variables → Variable Sets' },
                        { id: 'c', text: 'All → Service Catalog → Catalog Definition → Record Producers' },
                        { id: 'd', text: 'All → Service Catalog → Catalog Definition → My Order Guides' }
                  ],
                  correctAnswers: ['a'],
                  explanation: 'Catalog items are managed under Service Catalog → Catalog Definition → Maintain Items.',
                  tags: ['navigation', 'catalog-item']
            },
            {
                  id: 'q13',
                  type: 'multiple_choice',
                  question:
                        'Which fields did you configure when creating the "Standard Laptop Request" catalog item? (Select all that apply)',
                  options: [
                        { id: 'a', text: 'Name' },
                        { id: 'b', text: 'Catalog' },
                        { id: 'c', text: 'Table name' },
                        { id: 'd', text: 'Category' },
                        { id: 'e', text: 'Short description' }
                  ],
                  correctAnswers: ['a', 'b', 'd', 'e'],
                  explanation:
                        'Name, Catalog, Category, and Short description were set. "Table name" is a Record Producer setting, not a catalog item setting in this lab.',
                  tags: ['catalog-item', 'lab']
            },
            {
                  id: 'q14',
                  type: 'single_choice',
                  question: 'How do you attach the "New Hire Information" variable set to a catalog item?',
                  options: [
                        { id: 'a', text: 'Add a rule to the item\'s Rule Base' },
                        { id: 'b', text: 'Paste the variable names into the item\'s short description' },
                        { id: 'c', text: 'Create a Record Producer for the item' },
                        { id: 'd', text: 'Open the item\'s Variable Sets related list, click Edit, add the set, and save' }
                  ],
                  correctAnswers: ['d'],
                  explanation: 'The Variable Sets related list on the catalog item is used to attach existing variable sets.',
                  tags: ['catalog-item', 'variable-set']
            },
            {
                  id: 'q15',
                  type: 'true_false',
                  question:
                        'If a catalog item is not visible in the catalog, you should check its availability settings and its catalog/category configuration.',
                  options: [
                        { id: 'true', text: 'True' },
                        { id: 'false', text: 'False' }
                  ],
                  correctAnswers: ['true'],
                  explanation:
                        'Visibility problems usually come from availability settings or a missing/incorrect catalog or category assignment.',
                  tags: ['catalog-item', 'troubleshooting']
            },

            // ───────────── Step 3: Order Guides ─────────────
            {
                  id: 'q16',
                  type: 'single_choice',
                  question: 'What is an Order Guide?',
                  options: [
                        { id: 'a', text: 'A form that creates a record directly in a specified table' },
                        { id: 'b', text: 'A guided process for ordering multiple related catalog items together' },
                        { id: 'c', text: 'A workflow that closes Catalog Tasks automatically' },
                        { id: 'd', text: 'A report listing all Requested Items' }
                  ],
                  correctAnswers: ['b'],
                  explanation:
                        'An Order Guide walks users through ordering several related items (for example laptop, phone, and accounts for a new hire) in one process.',
                  tags: ['order-guide', 'definitions']
            },
            {
                  id: 'q17',
                  type: 'single_choice',
                  question: 'Which navigation path is used to create an order guide?',
                  options: [
                        { id: 'a', text: 'All → Service Catalog → Catalog Variables → Variable Sets' },
                        { id: 'b', text: 'All → Service Catalog → Catalog Definition → Maintain Items' },
                        { id: 'c', text: 'All → Service Catalog → Catalog Definition → My Order Guides' },
                        { id: 'd', text: 'All → Incident → Create New' }
                  ],
                  correctAnswers: ['c'],
                  explanation: 'Order guides are found under Service Catalog → Catalog Definition → My Order Guides.',
                  tags: ['navigation', 'order-guide']
            },
            {
                  id: 'q18',
                  type: 'single_choice',
                  question: 'What does the Rule Base of an order guide contain?',
                  options: [
                        { id: 'a', text: 'The Single Line Text variables shown to the requester' },
                        { id: 'b', text: 'The list of Incidents created by the guide' },
                        { id: 'c', text: 'The fulfillment tasks for each RITM' },
                        { id: 'd', text: 'The rules that determine which catalog items are included in the guide' }
                  ],
                  correctAnswers: ['d'],
                  explanation:
                        'Rule Base rules control item inclusion or selection based on the guide\'s configuration and the user\'s answers.',
                  tags: ['order-guide', 'rule-base']
            },
            {
                  id: 'q19',
                  type: 'single_choice',
                  question: 'What does "Cascade variables" do on an order guide?',
                  options: [
                        { id: 'a', text: 'It deletes duplicate variables from child items' },
                        { id: 'b', text: 'It passes values entered on the order guide to matching variables on the included catalog items' },
                        { id: 'c', text: 'It converts a Single-Row Variable Set into an MRVS' },
                        { id: 'd', text: 'It automatically closes the RITMs when the REQ is closed' }
                  ],
                  correctAnswers: ['b'],
                  explanation:
                        'Cascading lets the employee details entered once on the order guide populate the matching variables on each child item.',
                  tags: ['order-guide', 'cascade']
            },
            {
                  id: 'q20',
                  type: 'true_false',
                  question:
                        'Cascading works for any variable automatically, even if the variables on the child items are completely different and no configuration is done.',
                  options: [
                        { id: 'true', text: 'True' },
                        { id: 'false', text: 'False' }
                  ],
                  correctAnswers: ['false'],
                  hint: 'Read the definition: "when the variables and configuration support cascading".',
                  explanation:
                        'Cascading only works when the variables match and the configuration supports it, which is why the same variable set is attached to the guide and to the child items.',
                  tags: ['order-guide', 'cascade']
            },
            {
                  id: 'q21',
                  type: 'multiple_choice',
                  question:
                        'After completing the New Employee Onboarding order guide, what should you verify? (Select all that apply)',
                  options: [
                        { id: 'a', text: 'A Request (REQ) was created' },
                        { id: 'b', text: 'The expected Requested Items (RITMs) were created' },
                        { id: 'c', text: 'A new Incident was created with category "network"' },
                        { id: 'd', text: 'The employee details are populated on the child items' }
                  ],
                  correctAnswers: ['a', 'b', 'd'],
                  explanation:
                        'An order guide of catalog items produces a REQ with RITMs, and cascaded employee details should appear on the children. An Incident comes from the Record Producer step.',
                  tags: ['order-guide', 'verification']
            },
            {
                  id: 'q22',
                  type: 'multiple_choice',
                  question:
                        'Where should the "New Hire Information" variable set be attached for cascading to work as designed? (Select all that apply)',
                  options: [
                        { id: 'a', text: 'The New Employee Onboarding order guide' },
                        { id: 'b', text: 'Standard Laptop Request' },
                        { id: 'c', text: 'Desk Phone Setup' },
                        { id: 'd', text: 'The Report Network Outage record producer' }
                  ],
                  correctAnswers: ['a', 'b', 'c'],
                  explanation:
                        'The set is attached to the order guide and both child items (where supported) so the values can be passed along.',
                  tags: ['order-guide', 'variable-set', 'cascade']
            },

            // ───────────── Step 4: Record Producers ─────────────
            {
                  id: 'q23',
                  type: 'single_choice',
                  question: 'What is a Record Producer?',
                  options: [
                        { id: 'a', text: 'A catalog form that creates a record directly in a specified table, such as Incident' },
                        { id: 'b', text: 'A tool that bundles several catalog items into one order' },
                        { id: 'c', text: 'A task that tracks fulfillment work for a RITM' },
                        { id: 'd', text: 'A reusable collection of catalog variables' }
                  ],
                  correctAnswers: ['a'],
                  explanation:
                        'A Record Producer creates a record directly in a target table instead of following the normal Request / Requested Item process.',
                  tags: ['record-producer', 'definitions']
            },
            {
                  id: 'q24',
                  type: 'true_false',
                  question: 'A Record Producer normally generates a REQ and a RITM when submitted.',
                  options: [
                        { id: 'true', text: 'True' },
                        { id: 'false', text: 'False' }
                  ],
                  correctAnswers: ['false'],
                  explanation:
                        'A Record Producer creates the target record (for example an Incident) directly and does not normally generate a REQ or RITM.',
                  tags: ['record-producer', 'req-ritm']
            },
            {
                  id: 'q25',
                  type: 'single_choice',
                  question: 'Which table did the "Report Network Outage" record producer target?',
                  options: [
                        { id: 'a', text: 'sc_request' },
                        { id: 'b', text: 'incident' },
                        { id: 'c', text: 'sc_req_item' },
                        { id: 'd', text: 'sc_task' }
                  ],
                  correctAnswers: ['b'],
                  explanation: 'The Table name was set to Incident (incident), so each submission creates an Incident record.',
                  tags: ['record-producer', 'lab']
            },
            {
                  id: 'q26',
                  type: 'single_choice',
                  question: 'In a record producer script, what does the `current` object represent?',
                  options: [
                        { id: 'a', text: 'The logged-in user' },
                        { id: 'b', text: 'The variables submitted through the form' },
                        { id: 'c', text: 'The target record being created (here, the new Incident)' },
                        { id: 'd', text: 'The parent Request' }
                  ],
                  correctAnswers: ['c'],
                  explanation: '`current` is the record being created in the target table, so `current.urgency = 1` sets the Incident\'s urgency.',
                  tags: ['record-producer', 'scripting']
            },
            {
                  id: 'q27',
                  type: 'single_choice',
                  question: 'In a record producer script, what does `producer.outage_summary` return?',
                  options: [
                        { id: 'a', text: 'The value the user entered in the "outage_summary" variable' },
                        { id: 'b', text: 'The Incident number' },
                        { id: 'c', text: 'The short description of the record producer itself' },
                        { id: 'd', text: 'The state of the Catalog Task' }
                  ],
                  correctAnswers: ['a'],
                  explanation: '`producer` gives access to the variables submitted through the record producer.',
                  tags: ['record-producer', 'scripting']
            },
            {
                  id: 'q28',
                  type: 'multiple_choice',
                  question:
                        'Given the record producer script, which statements are true? (Select all that apply)\n\ncurrent.short_description = producer.outage_summary;\ncurrent.category = \'network\';\ncurrent.urgency = 1;\ncurrent.impact = 1;',
                  options: [
                        { id: 'a', text: 'The Incident short description comes from what the user typed' },
                        { id: 'b', text: 'The Incident category is set to the internal value "network"' },
                        { id: 'c', text: 'The script creates a Catalog Task for the network team' },
                        { id: 'd', text: 'Urgency and impact are set to the highest level in a standard configuration' }
                  ],
                  correctAnswers: ['a', 'b', 'd'],
                  explanation:
                        'The script copies the user\'s text into short_description and sets category, urgency, and impact. It does not create any Catalog Task.',
                  tags: ['record-producer', 'scripting']
            },
            {
                  id: 'q29',
                  type: 'single_choice',
                  question:
                        'Why must the value assigned to `current.category` match the internal choice value configured for the Incident table?',
                  options: [
                        { id: 'a', text: 'Because category is a reference to the sc_cat_item table' },
                        { id: 'b', text: 'Because the script would fail to compile otherwise' },
                        { id: 'c', text: 'Because a mismatched value may not map to a valid choice, so the category would not be set as intended' },
                        { id: 'd', text: 'Because choice values are always identical to the displayed labels' }
                  ],
                  correctAnswers: ['c'],
                  hint: 'Label (what you see) and value (what is stored) are not always the same.',
                  explanation:
                        'Choice fields store an internal value, which can differ from the label shown in the UI. Use the value configured on your instance.',
                  tags: ['record-producer', 'choice-values']
            },
            {
                  id: 'q30',
                  type: 'true_false',
                  question: 'In a standard configuration, urgency and impact use numeric choice values, where 1 is the highest.',
                  options: [
                        { id: 'true', text: 'True' },
                        { id: 'false', text: 'False' }
                  ],
                  correctAnswers: ['true'],
                  explanation: 'In the standard configuration, 1 represents the highest urgency and impact.',
                  tags: ['record-producer', 'choice-values']
            },
            {
                  id: 'q31',
                  type: 'single_choice',
                  question: 'How do you verify that the "Report Network Outage" record producer works?',
                  options: [
                        { id: 'a', text: 'Open My Requests and look for a new REQ' },
                        { id: 'b', text: 'Open the Incident list and confirm a new Incident with the expected short description, category, urgency, and impact' },
                        { id: 'c', text: 'Check the Catalog Tasks related list on the RITM' },
                        { id: 'd', text: 'Open the order guide\'s Rule Base' }
                  ],
                  correctAnswers: ['b'],
                  explanation: 'The result of a record producer is a record in the target table, here an Incident.',
                  tags: ['record-producer', 'verification']
            },

            // ───────────── Step 5: Request Fulfillment ─────────────
            {
                  id: 'q32',
                  type: 'single_choice',
                  question: 'Which option correctly describes the REQ → RITM → SCTASK hierarchy?',
                  options: [
                        { id: 'a', text: 'A REQ contains RITMs; each RITM can have Catalog Tasks (SCTASKs)' },
                        { id: 'b', text: 'An SCTASK contains RITMs; each RITM can have several REQs' },
                        { id: 'c', text: 'A RITM contains REQs; each REQ can have SCTASKs' },
                        { id: 'd', text: 'They are unrelated and independent records' }
                  ],
                  correctAnswers: ['a'],
                  explanation:
                        'The REQ is the overall request, each RITM is an individual requested item within it, and SCTASKs carry out the fulfillment work for a RITM.',
                  tags: ['req-ritm-sctask', 'fulfillment']
            },
            {
                  id: 'q33',
                  type: 'multiple_choice',
                  question: 'Match the descriptions: which statements are correct? (Select all that apply)',
                  options: [
                        { id: 'a', text: 'REQ is the overall request submitted by a user' },
                        { id: 'b', text: 'RITM is an individual catalog item requested within a REQ' },
                        { id: 'c', text: 'SCTASK is the overall request submitted by a user' },
                        { id: 'd', text: 'SCTASK is a task used to carry out fulfillment work, such as preparing a laptop' }
                  ],
                  correctAnswers: ['a', 'b', 'd'],
                  explanation: 'REQ = whole request, RITM = one requested item, SCTASK = a fulfillment task. SCTASK is not the overall request.',
                  tags: ['req-ritm-sctask', 'definitions']
            },
            {
                  id: 'q34',
                  type: 'true_false',
                  question: 'A Catalog Task (SCTASK) is always created automatically for every Requested Item.',
                  options: [
                        { id: 'true', text: 'True' },
                        { id: 'false', text: 'False' }
                  ],
                  correctAnswers: ['false'],
                  explanation:
                        'A Catalog Task is created only when the item\'s fulfillment process (for example a workflow or Flow Designer flow) is configured to create one.',
                  tags: ['sctask', 'fulfillment']
            },
            {
                  id: 'q35',
                  type: 'single_choice',
                  question: 'The Catalog Tasks related list on your RITM is empty. What should you inspect first?',
                  options: [
                        { id: 'a', text: 'The variable set\'s Order values' },
                        { id: 'b', text: 'The record producer script' },
                        { id: 'c', text: 'The Incident category choice list' },
                        { id: 'd', text: 'The catalog item\'s fulfillment configuration (workflow or Flow Designer flow)' }
                  ],
                  correctAnswers: ['d'],
                  explanation:
                        'Tasks are generated by the fulfillment process. If none exist, the item probably has no workflow or flow that creates them.',
                  tags: ['sctask', 'troubleshooting']
            },
            {
                  id: 'q36',
                  type: 'true_false',
                  question: 'Closing a Catalog Task guarantees that the Requested Item will close automatically.',
                  options: [
                        { id: 'true', text: 'True' },
                        { id: 'false', text: 'False' }
                  ],
                  correctAnswers: ['false'],
                  hint: 'Who defines how task completion affects the RITM?',
                  explanation:
                        'The workflow or flow must define how task completion affects the RITM\'s state, so you should never assume it closes automatically.',
                  tags: ['sctask', 'state-propagation']
            },
            {
                  id: 'q37',
                  type: 'multiple_choice',
                  question: 'Which states are given as examples when moving a Catalog Task through its lifecycle? (Select all that apply)',
                  options: [
                        { id: 'a', text: 'Work in Progress' },
                        { id: 'b', text: 'Closed Complete' },
                        { id: 'c', text: 'Published' },
                        { id: 'd', text: 'Cascaded' }
                  ],
                  correctAnswers: ['a', 'b'],
                  explanation:
                        'You might set a task to Work in Progress and later Closed Complete, provided those states are available on your instance.',
                  tags: ['sctask', 'states']
            },

            // ───────────── Scenario questions ─────────────
            {
                  id: 'q38',
                  type: 'single_choice',
                  question:
                        'Scenario: Users should be able to quickly report an office network outage, and it must land directly as an Incident with no Request/RITM. What do you build?',
                  options: [
                        { id: 'a', text: 'A Standard catalog item with a Single-Row Variable Set' },
                        { id: 'b', text: 'An Order Guide with a Rule Base' },
                        { id: 'c', text: 'A Multi-Row Variable Set' },
                        { id: 'd', text: 'A Record Producer targeting the incident table' }
                  ],
                  correctAnswers: ['d'],
                  explanation: 'A Record Producer creates the target record directly, which is exactly this use case.',
                  tags: ['scenario', 'record-producer']
            },
            {
                  id: 'q39',
                  type: 'single_choice',
                  question:
                        'Scenario: Onboarding a new hire requires a laptop, a phone, and account access, ordered together in one flow. What do you build?',
                  options: [
                        { id: 'a', text: 'An Order Guide' },
                        { id: 'b', text: 'A Record Producer' },
                        { id: 'c', text: 'A Catalog Task' },
                        { id: 'd', text: 'A Single-Row Variable Set only' }
                  ],
                  correctAnswers: ['a'],
                  explanation: 'An Order Guide is designed to order multiple related items in one process.',
                  tags: ['scenario', 'order-guide']
            },
            {
                  id: 'q40',
                  type: 'single_choice',
                  question:
                        'Scenario: Ten catalog items all ask for "Employee First Name" and "Employee Last Name". What is the best way to manage these questions?',
                  options: [
                        { id: 'a', text: 'Recreate the two variables manually on each of the ten items' },
                        { id: 'b', text: 'Create a Single-Row Variable Set and attach it to all ten items' },
                        { id: 'c', text: 'Create ten Record Producers' },
                        { id: 'd', text: 'Put the names in each item\'s short description' }
                  ],
                  correctAnswers: ['b'],
                  explanation: 'A shared variable set lets you manage the questions centrally and change them in one place.',
                  tags: ['scenario', 'variable-set']
            }
      ]
};
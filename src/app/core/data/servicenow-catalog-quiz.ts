import { Quiz } from "../models/quiz.models";

export const SERVICENOW_CATALOG_QUIZ: Quiz = {
  id: 'servicenow-service-catalog-advanced',
  title: 'ServiceNow Service Catalog: Design, Trade-offs & Troubleshooting',
  description:
    'Advanced, scenario-driven questions on variable sets, catalog items, order guides, record producers and request fulfillment. Focuses on choosing the right construct, predicting behavior and diagnosing problems.',
  subject: 'ServiceNow',
  category: 'Service Catalog',
  difficulty: 'advanced',
  language: 'en',
  passingScore: 75,
  questions: [
    {
      id: 'q1',
      type: 'single_choice',
      question:
        'To ship quickly, a team builds a "request new software" form as a record producer that writes into a custom table. Three months later, management wants standard request metrics and task-based fulfillment for it. What is the core problem?',
      options: [
        { id: 'a', text: 'Record producers cannot contain variables, so the form cannot capture the software name' },
        { id: 'b', text: 'Custom tables cannot receive records created from catalog forms' },
        { id: 'c', text: 'A record producer creates only the target record, so the REQ / RITM lifecycle and catalog fulfillment tasks are not part of it unless it is rebuilt as a catalog item' },
        { id: 'd', text: 'The record producer must be wrapped in an order guide before it can be reported on' }
      ],
      correctAnswers: ['c'],
      hint: 'Ask what a record producer actually produces.',
      explanation:
        'A record producer creates a record directly in a table and normally bypasses the Request / Requested Item process. If the business needs request-style tracking and fulfillment tasks, the right construct is a catalog item.',
      tags: ['record-producer', 'catalog-item', 'design', 'trade-offs']
    },
    {
      id: 'q2',
      type: 'single_choice',
      question:
        'A shared variable set is used on many items. One item needs a slightly different version of one question than all the others. What is the soundest approach?',
      options: [
        { id: 'a', text: 'Edit the shared set so it satisfies the exception, since all items will adapt' },
        { id: 'b', text: 'Duplicate the whole set for every item so each can diverge freely' },
        { id: 'c', text: 'Convert the shared set into a Multi-Row Variable Set' },
        { id: 'd', text: 'Keep what is genuinely common in the shared set and define the divergent question on that item (or in a separate set)' }
      ],
      correctAnswers: ['d'],
      explanation:
        'Changes to a shared set affect every form that uses it, so the set should hold only what is truly common. Duplicating everything throws away the maintainability benefit; an MRVS solves a different problem entirely.',
      tags: ['variable-set', 'design', 'maintainability']
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question:
        'A developer changes the Name (not the Question text) of an existing catalog variable. Which of the following can break or change as a result? (Select all that apply)',
      options: [
        { id: 'a', text: 'Scripts that read the variable by its name' },
        { id: 'b', text: 'Matching of the variable with same-named variables on other forms, such as when values are cascaded' },
        { id: 'c', text: 'The label the requester sees on the form' },
        { id: 'd', text: 'The Order in which the variable is displayed' }
      ],
      correctAnswers: ['a', 'b'],
      explanation:
        'Name is the internal identifier used by scripts and matching logic. The Question text controls the label, and the Order value controls the display sequence, so neither is affected by a Name change.',
      tags: ['catalog-variable', 'name-vs-question', 'scripting', 'cascade']
    },
    {
      id: 'q4',
      type: 'single_choice',
      question:
        'An order guide cascades values into its child items. Two child items each have a variable named "cost_center", but on one item it means the requester\'s cost center and on the other it means the vendor\'s. What is the key risk?',
      options: [
        { id: 'a', text: 'The guide will refuse to submit' },
        { id: 'b', text: 'A value entered on the guide may flow into a matching variable whose meaning is different from what the requester intended' },
        { id: 'c', text: 'Both items will be merged into one Requested Item' },
        { id: 'd', text: 'The variables will automatically be renamed' }
      ],
      correctAnswers: ['b'],
      hint: 'Cascading works by matching variables.',
      explanation:
        'Cascading passes values to matching variables when the configuration supports it. Matching is mechanical, not semantic, so identical names with different meanings can silently receive the wrong data.',
      tags: ['order-guide', 'cascade', 'design', 'risk']
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question:
        'Which pairings of mechanism and responsibility are correct? (Select all that apply)',
      options: [
        { id: 'a', text: 'Rule Base: decides which catalog items an order guide includes, based on the guide\'s setup and the user\'s answers' },
        { id: 'b', text: 'Cascade variables: decides which catalog items an order guide includes' },
        { id: 'c', text: 'Variable set: lets common questions be defined once and reused on multiple forms' },
        { id: 'd', text: 'Fulfillment workflow or flow: determines whether Catalog Tasks are created for a Requested Item' }
      ],
      correctAnswers: ['a', 'c', 'd'],
      explanation:
        'Cascading only passes values into matching variables; inclusion of items is the job of the Rule Base. Variable sets provide reuse, and fulfillment logic decides whether tasks exist.',
      tags: ['synthesis', 'rule-base', 'cascade', 'variable-set', 'fulfillment']
    },
    {
      id: 'q6',
      type: 'single_choice',
      question:
        'When a requester orders an item directly, the employee details they type appear on the Requested Item. When ordering the same item through an order guide, the details are blank. Where should the investigation focus?',
      options: [
        { id: 'a', text: 'The way values pass from the guide to the item: whether cascading is enabled and whether matching variables exist on both sides' },
        { id: 'b', text: 'The item\'s short description' },
        { id: 'c', text: 'The state values available on Catalog Tasks' },
        { id: 'd', text: 'The Incident choice lists' }
      ],
      correctAnswers: ['a'],
      explanation:
        'The item works when ordered directly, so its own variables are fine. The difference is the guide-to-item hand-off, which depends on cascading configuration and matching variables.',
      tags: ['order-guide', 'cascade', 'troubleshooting']
    },
    {
      id: 'q7',
      type: 'single_choice',
      question:
        'A form uses a Multi-Row Variable Set so a manager can list several devices on one order. Each device must be procured and tracked independently by different people. Which statement best captures the design concern?',
      options: [
        { id: 'a', text: 'An MRVS automatically creates one Requested Item per row, so there is no concern' },
        { id: 'b', text: 'An MRVS cannot hold more than one row of data' },
        { id: 'c', text: 'The rows live as data on a single Requested Item, so independent tracking per device needs separate RITMs or custom fulfillment handling' },
        { id: 'd', text: 'An MRVS can only be used on order guides' }
      ],
      correctAnswers: ['c'],
      explanation:
        'An MRVS captures repeating data, but by itself it does not turn each row into its own fulfillment record. If every row needs independent tracking, model it as separate items/RITMs or design the fulfillment logic accordingly.',
      tags: ['variable-set', 'mrvs', 'fulfillment', 'design']
    },
    {
      id: 'q8',
      type: 'single_choice',
      question:
        'A record producer lets users choose a severity from a drop-down and the script sets the Incident\'s urgency from it. Which implementation is the most robust?',
      options: [
        { id: 'a', text: 'Assign the variable\'s displayed text directly to the urgency field' },
        { id: 'b', text: 'Explicitly map each allowed choice to the target field\'s internal value in the script, with a sensible default for anything unexpected' },
        { id: 'c', text: 'Leave urgency empty and rely on users to correct it later' },
        { id: 'd', text: 'Hard-code the highest urgency for every submission' }
      ],
      correctAnswers: ['b'],
      explanation:
        'Choice fields store internal values that can differ from labels, so an explicit mapping with a default is predictable and safe. Assigning labels directly can fail, and hard-coding the highest value makes every report look critical.',
      tags: ['record-producer', 'scripting', 'choice-values', 'design']
    },
    {
      id: 'q9',
      type: 'single_choice',
      question:
        'A record producer script works in the development instance but sets the wrong category in production. The script assigns a hard-coded internal choice value. What is the most likely underlying issue?',
      options: [
        { id: 'a', text: 'Scripts cannot run in production instances' },
        { id: 'b', text: 'The `producer` object is unavailable in production' },
        { id: 'c', text: 'The script depends on the choice list being configured with the same internal values in both instances, and the lists differ' },
        { id: 'd', text: 'Production automatically converts the category into a string label' }
      ],
      correctAnswers: ['c'],
      explanation:
        'Hard-coded choice values couple the script to how the field\'s choices are configured. Verify the actual internal values in each instance before relying on them.',
      tags: ['record-producer', 'choice-values', 'troubleshooting']
    },
    {
      id: 'q10',
      type: 'multiple_choice',
      question:
        'Which of the following can a record producer script legitimately do? (Select all that apply)',
      options: [
        { id: 'a', text: 'Set a target field to a constant that the user never entered' },
        { id: 'b', text: 'Copy a submitted variable into a field of the new record' },
        { id: 'c', text: 'Combine several submitted variables into one field, such as a description' },
        { id: 'd', text: 'Convert the new record into a Requested Item with Catalog Tasks by assigning to `producer`' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation:
        '`current` is the record being created and `producer` exposes the submitted variables, so a script can set constants, copy variables or combine them. Producing REQ/RITM/SCTASK records is not what a record producer does.',
      tags: ['record-producer', 'scripting', 'current-producer']
    },
    {
      id: 'q11',
      type: 'single_choice',
      question:
        'Two catalog items sit in the same category and share the same variable set. Ordering item A produces Catalog Tasks, but ordering item B produces none. What explains this?',
      options: [
        { id: 'a', text: 'Sharing a variable set forces tasks to be created only for the first item' },
        { id: 'b', text: 'Whether tasks are created depends on each item\'s fulfillment configuration, not on its variables or category' },
        { id: 'c', text: 'Items in the same category share one task list' },
        { id: 'd', text: 'Catalog Tasks are only created for the first RITM in a Request' }
      ],
      correctAnswers: ['b'],
      hint: 'What actually creates a Catalog Task?',
      explanation:
        'Catalog Tasks are created by the item\'s fulfillment process (for example a workflow or flow). Variables, variable sets and categories do not create tasks.',
      tags: ['sctask', 'fulfillment', 'troubleshooting']
    },
    {
      id: 'q12',
      type: 'single_choice',
      question:
        'A colleague proposes using an order guide so employees can report a localized outage that should land directly as an Incident. What is the best response?',
      options: [
        { id: 'a', text: 'Agree: order guides create the target record directly in any table' },
        { id: 'b', text: 'Agree, but only if the guide is also given a Multi-Row Variable Set' },
        { id: 'c', text: 'Disagree: an order guide orchestrates ordering catalog items and results in a REQ with RITMs, whereas a record producer creates the Incident directly' },
        { id: 'd', text: 'Disagree: Incidents can only be created from the Incident form' }
      ],
      correctAnswers: ['c'],
      explanation:
        'Order guides bundle catalog items into one ordering experience, producing a Request with Requested Items. Creating a record directly in a table is the purpose of a record producer.',
      tags: ['order-guide', 'record-producer', 'design']
    },
    {
      id: 'q13',
      type: 'single_choice',
      question:
        'A requester submits one order guide containing three items. Two are fulfilled quickly, the third is delayed. Where is the most precise per-item status visible?',
      options: [
        { id: 'a', text: 'On the order guide record, which tracks each item' },
        { id: 'b', text: 'On the Requested Item (RITM) for each item, since each item is a separate fulfillment record under the one Request' },
        { id: 'c', text: 'Only on the Request, which merges all items into a single state' },
        { id: 'd', text: 'On the variable set, which stores item progress' }
      ],
      correctAnswers: ['b'],
      explanation:
        'The order guide itself is not a fulfillment record. Each included item gets its own RITM beneath the single REQ, and that is where per-item progress lives.',
      tags: ['order-guide', 'req-ritm', 'fulfillment']
    },
    {
      id: 'q14',
      type: 'single_choice',
      question:
        'A record producer creates an Incident, but the short description is always empty. The script contains `current.short_description = producer.outage_sumary;` while the variable\'s Name is `outage_summary`. What is the root cause?',
      options: [
        { id: 'a', text: 'The Question text on the variable is too long' },
        { id: 'b', text: 'The variable is mandatory' },
        { id: 'c', text: 'The Incident table does not have a short description field' },
        { id: 'd', text: 'The script references a variable name that does not match the variable\'s actual Name, so no value is read' }
      ],
      correctAnswers: ['d'],
      explanation:
        'Scripts reference the variable\'s Name. A typo yields an undefined value rather than the submitted text. The Question text is only a display label.',
      tags: ['record-producer', 'scripting', 'troubleshooting']
    },
    {
      id: 'q15',
      type: 'single_choice',
      question:
        'An organization needs: (1) a way to report broken equipment so support can triage it, (2) a standard equipment bundle where requester details are typed once and each item is fulfilled separately, and (3) a form where a manager orders accessories for a variable number of named employees. Which mapping of construct to need is best?',
      options: [
        { id: 'a', text: '(1) catalog item, (2) record producer, (3) order guide' },
        { id: 'b', text: '(1) record producer, (2) order guide with a shared variable set and cascading, (3) item using a Multi-Row Variable Set' },
        { id: 'c', text: '(1) order guide, (2) Multi-Row Variable Set, (3) record producer' },
        { id: 'd', text: '(1) Single-Row Variable Set, (2) record producer, (3) order guide' }
      ],
      correctAnswers: ['b'],
      explanation:
        'Direct record creation (Incident) fits a record producer; multiple items fulfilled separately with data entered once fits an order guide with a shared set and cascading; a variable number of rows fits an MRVS.',
      tags: ['synthesis', 'design', 'order-guide', 'record-producer', 'mrvs']
    },
    {
      id: 'q16',
      type: 'multiple_choice',
      question:
        'Which statements about Catalog Tasks (SCTASK) are accurate? (Select all that apply)',
      options: [
        { id: 'a', text: 'Their existence depends on the configured fulfillment logic' },
        { id: 'b', text: 'A Requested Item can legitimately exist without any Catalog Tasks' },
        { id: 'c', text: 'Closing every Catalog Task is guaranteed to complete the Requested Item' },
        { id: 'd', text: 'Creating a variable set automatically adds tasks to the items that use it' }
      ],
      correctAnswers: ['a', 'b'],
      explanation:
        'Tasks come from the fulfillment process, so some items have none. How task completion affects the RITM is also defined by that process, and variable sets have no relationship to task creation.',
      tags: ['sctask', 'fulfillment', 'state-propagation']
    },
    {
      id: 'q17',
      type: 'single_choice',
      question:
        'A team numbers the variables in a heavily shared variable set 1, 2, 3, 4. They now need a new variable between the first and second. What is the practical downside of their numbering scheme?',
      options: [
        { id: 'a', text: 'The new variable cannot be created at all' },
        { id: 'b', text: 'The set would become a Multi-Row Variable Set' },
        { id: 'c', text: 'Inserting between consecutive numbers means renumbering others; leaving gaps (such as 100, 200, 300) avoids this' },
        { id: 'd', text: 'Order values are ignored for variables in shared sets' }
      ],
      correctAnswers: ['c'],
      explanation:
        'The Order value controls display sequence. Leaving gaps between values makes later insertions cheap, which matters most for variables that appear on many forms.',
      tags: ['catalog-variable', 'order', 'maintainability']
    },
    {
      id: 'q18',
      type: 'single_choice',
      question:
        'After building an order guide, which verification best proves the design works end to end?',
      options: [
        { id: 'a', text: 'Confirm each catalog item saves without errors' },
        { id: 'b', text: 'Order through the catalog interface, then check that the REQ has the expected RITMs and that values from the guide appear on the child items' },
        { id: 'c', text: 'Check that the Rule Base related list is not empty' },
        { id: 'd', text: 'Confirm the variable set has at least two variables' }
      ],
      correctAnswers: ['b'],
      explanation:
        'Configuration screens show intent, not behavior. Only an actual order demonstrates which records are produced and whether cascading and rules behave as designed.',
      tags: ['order-guide', 'verification', 'testing']
    },
    {
      id: 'q19',
      type: 'true_false',
      question:
        'Using an order guide changes the shape of the fulfillment records: each included catalog item still gets its own Requested Item under a single Request.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['true'],
      explanation:
        'The guide orchestrates the ordering experience, but fulfillment still happens per item through RITMs.',
      tags: ['order-guide', 'req-ritm']
    },
    {
      id: 'q20',
      type: 'true_false',
      question:
        'A Multi-Row Variable Set, by itself, creates one Requested Item per row entered.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['false'],
      explanation:
        'An MRVS captures repeating data on the form of the item it is attached to. It does not by itself multiply the fulfillment records.',
      tags: ['mrvs', 'req-ritm']
    },
    {
      id: 'q21',
      type: 'true_false',
      question:
        'Adding a new variable to a shared variable set requires you to reconfigure every item that already uses the set.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['false'],
      explanation:
        'The point of a shared set is that the change is made once and is reflected wherever the set is attached.',
      tags: ['variable-set', 'reuse']
    },
    {
      id: 'q22',
      type: 'true_false',
      question:
        'Attaching the same variable set to two catalog items guarantees that the two items will behave identically during fulfillment.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['false'],
      hint: 'A variable set affects the form, not the process behind it.',
      explanation:
        'A variable set shapes the questions on the form. Fulfillment behavior, such as task creation and state handling, is defined separately for each item.',
      tags: ['variable-set', 'fulfillment']
    },
    {
      id: 'q23',
      type: 'true_false',
      question:
        'Changing a variable\'s Question text does not break scripts that reference the variable by its Name.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['true'],
      explanation:
        'Question is a display label. Scripts depend on the Name.',
      tags: ['catalog-variable', 'name-vs-question']
    },
    {
      id: 'q24',
      type: 'true_false',
      question:
        'Because a catalog task is closed as complete, the parent Requested Item must be in a closed state; if it is not, the platform is malfunctioning.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['false'],
      explanation:
        'How task completion affects the RITM is defined by the workflow or flow. A RITM staying open may be intended (for example, other steps remain) or a gap in the flow\'s logic that needs inspecting.',
      tags: ['sctask', 'state-propagation', 'troubleshooting']
    },
    {
      id: 'q25',
      type: 'true_false',
      question:
        'A catalog item that is correctly configured and has valid variables can still be unavailable to users because of its availability, catalog or category configuration.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['true'],
      explanation:
        'Visibility is controlled by where the item is placed and who it is made available to, independent of its variables.',
      tags: ['catalog-item', 'troubleshooting']
    }
  ]
};
import { Quiz } from "../models/quiz.models";

export const SERVICENOW_CSA_QUIZ: Quiz = {
      id: 'servicenow-csa-01',
      title: 'ServiceNow CSA Practice Quiz',
      description:
            'Practice questions covering key ServiceNow Certified System Administrator topics, including navigation, tables, security, scripting, client-side configuration, imports, update sets, Service Catalog, and Flow Designer.',
      subject: 'ServiceNow',
      category: 'ServiceNow Certified System Administrator',
      difficulty: 'medium',
      language: 'en',
      questions: [
            {
                  id: 'q1',
                  type: 'single_choice',
                  question: 'Which field at the top of the Application Navigator allows users to filter applications and modules?',
                  options: [
                        { id: 'A', text: 'Global Search', explanation: 'Global Search is used to search across ServiceNow records and content.' },
                        { id: 'B', text: 'Filter Navigator', explanation: 'The Filter Navigator filters applications and modules as the user types.' },
                        { id: 'C', text: 'Contextual Sidebar', explanation: 'The contextual sidebar provides contextual information and tools.' },
                        { id: 'D', text: 'List Breadcrumb', explanation: 'Breadcrumbs indicate the navigation path within a list or module.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Think about the field used to quickly find applications and modules.',
                  tags: ['application-navigator', 'navigation', 'user-interface']
            },
            {
                  id: 'q2',
                  type: 'single_choice',
                  question: 'Where is the Application Navigator located in the standard ServiceNow interface?',
                  options: [
                        { id: 'A', text: 'At the bottom of the main content area', explanation: 'The Application Navigator is not located at the bottom of the content area.' },
                        { id: 'B', text: 'At the top of the right-hand sidebar', explanation: 'The Application Navigator is located on the left side of the interface.' },
                        { id: 'C', text: 'At the top of the standard left-hand navigation pane', explanation: 'The Application Navigator is the standard navigation area on the left side of the interface.' },
                        { id: 'D', text: 'Inside the System Properties page', explanation: 'System Properties is an administration area and does not contain the Application Navigator.' }
                  ],
                  correctAnswers: ['C'],
                  hint: 'Think about the standard navigation area used to access applications and modules.',
                  tags: ['application-navigator', 'navigation', 'user-interface']
            },
            {
                  id: 'q3',
                  type: 'single_choice',
                  question: "When a custom table extends an existing parent table in ServiceNow, what happens to the parent table's fields?",
                  options: [
                        { id: 'A', text: 'The fields are copied as independent duplicate fields', explanation: 'Table extension uses inheritance rather than creating independent duplicate fields.' },
                        { id: 'B', text: "The child table automatically inherits the parent table's fields and functionality", explanation: 'Table extension establishes inheritance between the child and parent tables.' },
                        { id: 'C', text: 'The child table can only read the parent fields', explanation: 'The child table inherits fields and can use them according to their configuration.' },
                        { id: 'D', text: 'All parent fields must be manually recreated', explanation: 'Manual recreation is not required when extending a table.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Table extension is based on an object-oriented concept.',
                  tags: ['tables', 'table-extension', 'inheritance', 'data-schema']
            },
            {
                  id: 'q4',
                  type: 'single_choice',
                  question: 'What is the core relationship created when one ServiceNow table extends another table?',
                  options: [
                        { id: 'A', text: 'Aggregation', explanation: 'Aggregation is not the core relationship created by table extension.' },
                        { id: 'B', text: 'Inheritance', explanation: 'The child table inherits fields and attributes from the parent table.' },
                        { id: 'C', text: 'Replication', explanation: 'Table extension does not replicate the parent table.' },
                        { id: 'D', text: 'Synchronization', explanation: 'Synchronization is not the relationship established by table extension.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Think of parent and child classes in object-oriented programming.',
                  tags: ['tables', 'table-extension', 'inheritance']
            },
            {
                  id: 'q5',
                  type: 'single_choice',
                  question: 'Which ServiceNow tool can graphically display table extensions and relationships between tables?',
                  options: [
                        { id: 'A', text: 'Schema Map', explanation: 'Schema Map provides a graphical representation of tables and their relationships.' },
                        { id: 'B', text: 'Update Set', explanation: 'Update Sets capture configuration changes rather than graphically displaying schema relationships.' },
                        { id: 'C', text: 'Flow Designer', explanation: 'Flow Designer is used for process automation.' },
                        { id: 'D', text: 'Application Navigator', explanation: 'The Application Navigator is used to navigate applications and modules.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Look for the tool whose name refers to the database schema.',
                  tags: ['schema-map', 'tables', 'data-schema']
            },
            {
                  id: 'q6',
                  type: 'single_choice',
                  question: 'What is the recommended way to assign the same set of roles to many users who share the same job function?',
                  options: [
                        { id: 'A', text: 'Assign each role individually to every user', explanation: 'Individual role assignments create unnecessary administrative overhead.' },
                        { id: 'B', text: 'Assign the roles to a Group and add users to that Group', explanation: 'Group-based role assignment simplifies administration and maintenance.' },
                        { id: 'C', text: 'Store the roles in an Update Set', explanation: 'Update Sets are used to move configuration changes, not to assign roles to users.' },
                        { id: 'D', text: 'Modify the system properties file', explanation: 'System properties are not the standard mechanism for assigning roles to groups of users.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Think about managing roles for an entire team rather than individual users.',
                  tags: ['roles', 'groups', 'user-administration']
            },
            {
                  id: 'q7',
                  type: 'single_choice',
                  question: 'Which approach is considered an anti-pattern when managing roles for many users?',
                  options: [
                        { id: 'A', text: 'Assigning roles to groups', explanation: 'Group-based role assignment is generally easier to maintain.' },
                        { id: 'B', text: 'Adding users to appropriate groups', explanation: 'Adding users to groups supports centralized role management.' },
                        { id: 'C', text: 'Assigning roles directly to individual user profiles when group-based assignment is appropriate', explanation: 'Individual assignments increase administrative effort and make changes harder to maintain.' },
                        { id: 'D', text: 'Managing group membership', explanation: 'Managing group membership is a standard approach to role administration.' }
                  ],
                  correctAnswers: ['C'],
                  hint: 'Consider which approach creates the most repetitive administration.',
                  tags: ['roles', 'groups', 'user-administration', 'best-practices']
            },
            {
                  id: 'q8',
                  type: 'single_choice',
                  question: 'When multiple Access Control Lists match a specific object and operation, what is the general ACL evaluation order?',
                  options: [
                        { id: 'A', text: 'Most specific to most general', explanation: 'ServiceNow evaluates the most specific applicable ACL first.' },
                        { id: 'B', text: 'Most general to most specific', explanation: 'Wildcard ACLs are not evaluated before more specific ACLs.' },
                        { id: 'C', text: 'Random order based on creation date', explanation: 'ACL evaluation is not based on random order or creation date.' },
                        { id: 'D', text: 'Global ACLs always execute first', explanation: 'ACL evaluation is based on specificity rather than simply global scope.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think table.field before broader wildcard rules.',
                  tags: ['acl', 'security', 'access-control']
            },
            {
                  id: 'q9',
                  type: 'single_choice',
                  question: 'For a field-level ACL, which order represents the evaluation from most specific to most general?',
                  options: [
                        { id: 'A', text: '*.field, table.*, table.field', explanation: 'This reverses the specificity order.' },
                        { id: 'B', text: 'table.field, table.*, *.*', explanation: 'A field-specific ACL is more specific than a table-level or wildcard ACL.' },
                        { id: 'C', text: '*.*, table.*, table.field', explanation: 'This starts with the least specific ACL.' },
                        { id: 'D', text: 'table.*, *.*, table.field', explanation: 'The field-specific ACL should be considered before broader ACLs.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Start with the ACL that identifies both the table and the field.',
                  tags: ['acl', 'security', 'field-security']
            },
            {
                  id: 'q10',
                  type: 'single_choice',
                  question: 'When an administrator impersonates another user in ServiceNow, how is the activity represented in the audit trail?',
                  options: [
                        { id: 'A', text: 'All actions are completely anonymous', explanation: 'Impersonation does not make the activity completely anonymous.' },
                        { id: 'B', text: 'Audit information is disabled during impersonation', explanation: 'Impersonation does not disable audit information.' },
                        { id: 'C', text: "Actions are recorded in the impersonated user's context while the impersonation is traceable to the administrator", explanation: 'ServiceNow maintains audit information about activity performed during impersonation and the administrator who initiated it.' },
                        { id: 'D', text: 'The system prevents all database changes', explanation: "Impersonation is specifically intended to allow administrators to work in another user's context." }
                  ],
                  correctAnswers: ['C'],
                  hint: 'Impersonation changes the user context but does not eliminate auditability.',
                  tags: ['impersonation', 'audit', 'security']
            },
            {
                  id: 'q11',
                  type: 'single_choice',
                  question: 'What does the Activity Stream on a ServiceNow record primarily track?',
                  options: [
                        { id: 'A', text: 'Only database indexes', explanation: 'Database indexes are unrelated to the Activity Stream.' },
                        { id: 'B', text: 'Updates, work notes, and comments made on a record', explanation: 'The Activity Stream provides a chronological history of activity associated with a record.' },
                        { id: 'C', text: 'Only user login history', explanation: 'Login history is not the primary purpose of the Activity Stream.' },
                        { id: 'D', text: 'Only system configuration changes', explanation: 'The Activity Stream focuses on record activity rather than all configuration changes.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Think about the conversation and activity history attached to a record.',
                  tags: ['activity-stream', 'records', 'user-interface']
            },
            {
                  id: 'q12',
                  type: 'single_choice',
                  question: 'How is the Activity Stream generally presented on a ServiceNow record?',
                  options: [
                        { id: 'A', text: 'As a chronological timeline or feed', explanation: 'The Activity Stream displays record activity chronologically.' },
                        { id: 'B', text: 'As a database schema diagram', explanation: 'Schema diagrams are provided by tools such as Schema Map.' },
                        { id: 'C', text: 'As a system property', explanation: 'The Activity Stream is not a system property.' },
                        { id: 'D', text: 'As an application module list', explanation: 'Application module lists belong to navigation.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think of a timeline showing what happened to a record.',
                  tags: ['activity-stream', 'records', 'user-interface']
            },
            {
                  id: 'q13',
                  type: 'single_choice',
                  question: 'Why is calling current.update() generally inappropriate inside a Before Business Rule that modifies the current record?',
                  options: [
                        { id: 'A', text: 'Before Business Rules cannot modify records', explanation: 'Before Business Rules can modify field values before the record is saved.' },
                        { id: 'B', text: 'current.update() only works on the client', explanation: 'current.update() is a server-side GlideRecord operation.' },
                        { id: 'C', text: 'The original database operation will save the modified record, while current.update() can trigger another update', explanation: 'Calling current.update() from a Before Business Rule can cause another database operation and potentially recursive Business Rule execution.' },
                        { id: 'D', text: 'current.update() deletes the current record', explanation: 'current.update() does not delete the record.' }
                  ],
                  correctAnswers: ['C'],
                  hint: 'The original insert or update is already in progress.',
                  tags: ['business-rules', 'scripting', 'current-update']
            },
            {
                  id: 'q14',
                  type: 'single_choice',
                  question: "Which type of script runs in the user's web browser and is used to control interactive form behavior?",
                  options: [
                        { id: 'A', text: 'Business Rule', explanation: 'Business Rules execute on the server.' },
                        { id: 'B', text: 'Client Script', explanation: "Client Scripts execute in the user's browser and control client-side form behavior." },
                        { id: 'C', text: 'Scheduled Job', explanation: 'Scheduled Jobs execute on the server according to a schedule.' },
                        { id: 'D', text: 'Script Include', explanation: 'Script Includes are server-side reusable scripts.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'The name of the script type indicates where it executes.',
                  tags: ['client-scripts', 'scripting', 'client-side']
            },
            {
                  id: 'q15',
                  type: 'single_choice',
                  question: 'Where do Business Rules execute?',
                  options: [
                        { id: 'A', text: "Only in the user's web browser", explanation: 'Business Rules execute on the ServiceNow server.' },
                        { id: 'B', text: 'On the ServiceNow application server', explanation: 'Business Rules are server-side scripts.' },
                        { id: 'C', text: 'Only inside the database engine', explanation: 'Business Rules are executed by the ServiceNow application server.' },
                        { id: 'D', text: "Inside the user's email client", explanation: 'Email clients are not the execution environment for Business Rules.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Contrast Business Rules with Client Scripts.',
                  tags: ['business-rules', 'server-side', 'scripting']
            },
            {
                  id: 'q16',
                  type: 'single_choice',
                  question: 'Which database operations can be used to trigger a Business Rule, depending on its configuration?',
                  options: [
                        { id: 'A', text: 'Insert, update, delete, or query', explanation: 'Business Rules can be configured for these operations.' },
                        { id: 'B', text: 'Only insert', explanation: 'Business Rules are not limited to inserts.' },
                        { id: 'C', text: 'Only update', explanation: 'Business Rules can also run for inserts, deletes, or display/query operations depending on configuration.' },
                        { id: 'D', text: 'Only delete', explanation: 'Business Rules can run for several database operations.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think about the different When settings available for Business Rules.',
                  tags: ['business-rules', 'triggers', 'scripting']
            },
            {
                  id: 'q17',
                  type: 'single_choice',
                  question: 'Which type of Business Rule executes before the database operation is completed?',
                  options: [
                        { id: 'A', text: 'After', explanation: 'After Business Rules execute after the database operation.' },
                        { id: 'B', text: 'Async', explanation: 'Async Business Rules run asynchronously after the database operation.' },
                        { id: 'C', text: 'Before', explanation: 'Before Business Rules run before the database operation is completed.' },
                        { id: 'D', text: 'Display', explanation: 'Display Business Rules run when a record is requested.' }
                  ],
                  correctAnswers: ['C'],
                  hint: 'The type name describes when the rule runs.',
                  tags: ['business-rules', 'before', 'scripting']
            },
            {
                  id: 'q18',
                  type: 'single_choice',
                  question: 'Which type of Business Rule executes after the database operation is completed?',
                  options: [
                        { id: 'A', text: 'Before', explanation: 'Before Business Rules run before the database operation.' },
                        { id: 'B', text: 'After', explanation: 'After Business Rules execute after the database operation has completed.' },
                        { id: 'C', text: 'Display', explanation: 'Display Business Rules execute when a record is requested.' },
                        { id: 'D', text: 'onLoad', explanation: 'onLoad is a Client Script type, not a Business Rule type.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'This rule runs after the database operation.',
                  tags: ['business-rules', 'after', 'scripting']
            },
            {
                  id: 'q19',
                  type: 'single_choice',
                  question: 'Which type of Business Rule runs asynchronously after the database operation?',
                  options: [
                        { id: 'A', text: 'Before', explanation: 'Before Business Rules execute before the database operation.' },
                        { id: 'B', text: 'After', explanation: 'After Business Rules execute after the database operation but are not specifically asynchronous.' },
                        { id: 'C', text: 'Async', explanation: 'Async Business Rules run asynchronously after the database operation.' },
                        { id: 'D', text: 'Display', explanation: 'Display Business Rules run when a record is requested.' }
                  ],
                  correctAnswers: ['C'],
                  hint: 'Look for the Business Rule type designed for background execution.',
                  tags: ['business-rules', 'async', 'scripting']
            },
            {
                  id: 'q20',
                  type: 'single_choice',
                  question: 'Which type of Business Rule runs when a record is requested and can make server-side data available to client-side scripts?',
                  options: [
                        { id: 'A', text: 'Before', explanation: 'Before Business Rules run before database operations.' },
                        { id: 'B', text: 'After', explanation: 'After Business Rules run after database operations.' },
                        { id: 'C', text: 'Async', explanation: 'Async Business Rules run asynchronously after database operations.' },
                        { id: 'D', text: 'Display', explanation: 'Display Business Rules run when a record is requested and can use g_scratchpad to make server-side information available to client-side scripts.' }
                  ],
                  correctAnswers: ['D'],
                  hint: 'This Business Rule type is associated with loading a record for display.',
                  tags: ['business-rules', 'display', 'g-scratchpad', 'scripting']
            },
            {
                  id: 'q21',
                  type: 'single_choice',
                  question: 'Which Client Script type executes when a form is first loaded?',
                  options: [
                        { id: 'A', text: 'onChange', explanation: 'onChange executes when a field value changes.' },
                        { id: 'B', text: 'onLoad', explanation: 'onLoad executes when the form is loaded.' },
                        { id: 'C', text: 'onSubmit', explanation: 'onSubmit executes when the user submits the form.' },
                        { id: 'D', text: 'onQuery', explanation: 'onQuery is not a standard Client Script type.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Which type corresponds to the initial loading of a form?',
                  tags: ['client-scripts', 'onload', 'client-side']
            },
            {
                  id: 'q22',
                  type: 'single_choice',
                  question: 'Which Client Script type executes when the value of a specific field changes?',
                  options: [
                        { id: 'A', text: 'onLoad', explanation: 'onLoad runs when the form loads.' },
                        { id: 'B', text: 'onChange', explanation: 'onChange runs when the specified field value changes.' },
                        { id: 'C', text: 'onSubmit', explanation: 'onSubmit runs when the form is submitted.' },
                        { id: 'D', text: 'onInsert', explanation: 'onInsert is not a standard Client Script type.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Think about the event generated by changing a field.',
                  tags: ['client-scripts', 'onchange', 'client-side']
            },
            {
                  id: 'q23',
                  type: 'single_choice',
                  question: 'Which Client Script type executes when a user submits a form?',
                  options: [
                        { id: 'A', text: 'onLoad', explanation: 'onLoad executes when the form loads.' },
                        { id: 'B', text: 'onChange', explanation: 'onChange executes when a field value changes.' },
                        { id: 'C', text: 'onSubmit', explanation: 'onSubmit executes when the user submits the form.' },
                        { id: 'D', text: 'onDisplay', explanation: 'onDisplay is not a standard Client Script type.' }
                  ],
                  correctAnswers: ['C'],
                  hint: 'Think about the event that occurs when the user saves or submits a form.',
                  tags: ['client-scripts', 'onsubmit', 'client-side']
            },
            {
                  id: 'q24',
                  type: 'single_choice',
                  question: 'Which Client Script type would be most appropriate for hiding a field when a form initially loads?',
                  options: [
                        { id: 'A', text: 'onLoad', explanation: 'An onLoad Client Script can modify field visibility when the form loads.' },
                        { id: 'B', text: 'onChange', explanation: 'onChange is triggered by a field value change.' },
                        { id: 'C', text: 'onSubmit', explanation: 'onSubmit runs when the form is submitted.' },
                        { id: 'D', text: 'Business Rule', explanation: 'Business Rules execute server-side rather than controlling the browser form directly.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'The field needs to be hidden when the form first appears.',
                  tags: ['client-scripts', 'onload', 'form-behavior']
            },
            {
                  id: 'q25',
                  type: 'single_choice',
                  question: 'What is the primary purpose of a UI Policy?',
                  options: [
                        { id: 'A', text: 'To dynamically control form fields based on conditions', explanation: 'UI Policies provide declarative control over form field behavior.' },
                        { id: 'B', text: 'To migrate configuration between instances', explanation: 'Update Sets are used to migrate configuration changes.' },
                        { id: 'C', text: 'To execute scheduled server-side jobs', explanation: 'Scheduled Jobs are used for scheduled server-side execution.' },
                        { id: 'D', text: 'To create database tables', explanation: 'Table configuration is managed through table administration rather than UI Policies.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'UI Policies are concerned with behavior of fields on forms.',
                  tags: ['ui-policies', 'client-side', 'form-configuration']
            },
            {
                  id: 'q26',
                  type: 'single_choice',
                  question: 'Which field properties can a UI Policy commonly control without scripting?',
                  options: [
                        { id: 'A', text: 'Mandatory, visible, and read-only', explanation: 'UI Policy Actions can control these common field properties.' },
                        { id: 'B', text: 'Database indexes only', explanation: 'Database indexes are not controlled through UI Policy Actions.' },
                        { id: 'C', text: 'User passwords', explanation: 'UI Policies do not manage user passwords.' },
                        { id: 'D', text: 'Table inheritance', explanation: 'Table inheritance is a data schema configuration.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think about the basic properties users see and interact with on a form.',
                  tags: ['ui-policies', 'form-fields', 'client-side']
            },
            {
                  id: 'q27',
                  type: 'single_choice',
                  question: 'What is a key difference between a UI Policy and a Client Script?',
                  options: [
                        { id: 'A', text: 'UI Policies are declarative, while Client Scripts use JavaScript for client-side behavior', explanation: 'UI Policies handle common field behavior declaratively, while Client Scripts provide scripted client-side control.' },
                        { id: 'B', text: 'UI Policies execute only in the database', explanation: 'UI Policies affect client-side form behavior.' },
                        { id: 'C', text: 'Client Scripts execute only on the server', explanation: "Client Scripts execute in the user's browser." },
                        { id: 'D', text: 'They are exactly the same feature', explanation: 'Although both affect client-side behavior, they serve different purposes.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'One feature commonly handles field properties without JavaScript.',
                  tags: ['ui-policies', 'client-scripts', 'client-side']
            },
            {
                  id: 'q28',
                  type: 'single_choice',
                  question: 'What is the primary function of a Transform Map?',
                  options: [
                        { id: 'A', text: 'To define how Import Set fields map to fields in a target table', explanation: 'Transform Maps define the relationship between staging/import fields and target table fields.' },
                        { id: 'B', text: 'To create user roles', explanation: 'Roles are managed through user and group administration.' },
                        { id: 'C', text: 'To control form field visibility', explanation: 'UI Policies and Client Scripts control form behavior.' },
                        { id: 'D', text: 'To display table relationships graphically', explanation: 'Schema Map provides graphical schema visualization.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think about the relationship between an Import Set table and its destination.',
                  tags: ['transform-map', 'import-sets', 'data-import']
            },
            {
                  id: 'q29',
                  type: 'single_choice',
                  question: 'During which process is a Transform Map used?',
                  options: [
                        { id: 'A', text: 'Transforming imported staging data into records in a target table', explanation: 'Transform Maps are used during the transformation phase of data imports.' },
                        { id: 'B', text: 'Assigning roles to users', explanation: 'Role assignment is handled through users and groups.' },
                        { id: 'C', text: 'Creating client-side form scripts', explanation: 'Client Scripts handle client-side form behavior.' },
                        { id: 'D', text: 'Designing application navigation', explanation: 'Application Navigator configuration is unrelated to Transform Maps.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think about data migration from a staging table to a target table.',
                  tags: ['transform-map', 'import-sets', 'data-migration']
            },
            {
                  id: 'q30',
                  type: 'single_choice',
                  question: 'What is the primary purpose of checking the Coalesce option on a Transform Map field mapping?',
                  options: [
                        { id: 'A', text: 'To encrypt the imported value', explanation: 'Coalesce is not an encryption feature.' },
                        { id: 'B', text: 'To use the field as a matching key for identifying existing records', explanation: 'Coalesce tells ServiceNow to use the field value when looking for an existing target record.' },
                        { id: 'C', text: 'To delete matching records', explanation: 'Coalesce does not delete matching records.' },
                        { id: 'D', text: 'To convert every field into a date', explanation: 'Coalesce does not perform field type conversion.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Coalesce is about deciding whether an imported record already exists.',
                  tags: ['transform-map', 'coalesce', 'import-sets']
            },
            {
                  id: 'q31',
                  type: 'single_choice',
                  question: 'What happens when a coalesced value matches an existing target record?',
                  options: [
                        { id: 'A', text: 'The existing target record is updated', explanation: 'A matching coalesced value identifies the existing record for update.' },
                        { id: 'B', text: 'The existing record is deleted', explanation: 'Coalesce does not delete records.' },
                        { id: 'C', text: 'The import is automatically canceled', explanation: 'A match normally causes an update rather than canceling the import.' },
                        { id: 'D', text: 'A duplicate record is always inserted', explanation: 'The purpose of coalesce is to avoid inserting a duplicate when a match is found.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Coalesce helps ServiceNow determine whether to update or insert.',
                  tags: ['transform-map', 'coalesce', 'data-import']
            },
            {
                  id: 'q32',
                  type: 'single_choice',
                  question: 'What happens when no matching target record is found for a coalesced value?',
                  options: [
                        { id: 'A', text: 'A new target record is inserted', explanation: 'If no matching record is found, the transformed data is inserted as a new record.' },
                        { id: 'B', text: 'The target table is deleted', explanation: 'Coalesce does not delete target tables.' },
                        { id: 'C', text: 'The source data is automatically encrypted', explanation: 'Coalesce is unrelated to encryption.' },
                        { id: 'D', text: 'The Import Set is permanently disabled', explanation: 'A missing match does not disable the Import Set.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think about the insert-or-update behavior of coalesce.',
                  tags: ['transform-map', 'coalesce', 'data-import']
            },
            {
                  id: 'q33',
                  type: 'single_choice',
                  question: 'What is the primary purpose of an Update Set?',
                  options: [
                        { id: 'A', text: 'To capture and move configuration changes between ServiceNow instances', explanation: 'Update Sets capture configuration and customization changes for migration between instances.' },
                        { id: 'B', text: 'To store all Incident records', explanation: 'Incident records are application data, not the primary purpose of Update Sets.' },
                        { id: 'C', text: 'To create database backups', explanation: 'Update Sets are not database backup mechanisms.' },
                        { id: 'D', text: 'To manage user passwords', explanation: 'Password management is separate from Update Sets.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think configuration migration between development and other instances.',
                  tags: ['update-sets', 'configuration', 'administration']
            },
            {
                  id: 'q34',
                  type: 'single_choice',
                  question: 'Which of the following is generally captured by an Update Set?',
                  options: [
                        { id: 'A', text: 'Individual Incident records', explanation: 'Transactional Incident data is not normally captured by standard Update Sets.' },
                        { id: 'B', text: 'Business Rules', explanation: 'Business Rules are configuration records that can be captured in Update Sets.' },
                        { id: 'C', text: 'Individual Problem records', explanation: 'Problem records are transactional/application data.' },
                        { id: 'D', text: 'User-submitted attachments', explanation: 'Attachments are not ordinary configuration captured by Update Sets.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Which option represents configuration rather than transactional data?',
                  tags: ['update-sets', 'business-rules', 'configuration']
            },
            {
                  id: 'q35',
                  type: 'single_choice',
                  question: 'Which of the following is generally not captured in a standard Update Set?',
                  options: [
                        { id: 'A', text: 'Client Scripts', explanation: 'Client Scripts are configuration records that can be captured.' },
                        { id: 'B', text: 'Business Rules', explanation: 'Business Rules are configuration records that can be captured.' },
                        { id: 'C', text: 'Transactional Incident records', explanation: 'Ordinary Incident records are application data rather than configuration.' },
                        { id: 'D', text: 'Form configurations', explanation: 'Form configuration changes can be captured in Update Sets.' }
                  ],
                  correctAnswers: ['C'],
                  hint: 'Distinguish configuration from application data.',
                  tags: ['update-sets', 'configuration', 'incident']
            },
            {
                  id: 'q36',
                  type: 'single_choice',
                  question: 'Which Service Catalog component allows users to order multiple related catalog items together as part of one coordinated request?',
                  options: [
                        { id: 'A', text: 'Record Producer', explanation: 'A Record Producer is used to create a record in a target table.' },
                        { id: 'B', text: 'Order Guide', explanation: 'Order Guides allow users to request multiple related catalog items together.' },
                        { id: 'C', text: 'Catalog UI Policy', explanation: 'Catalog UI Policies control catalog item variables and behavior.' },
                        { id: 'D', text: 'Content Item', explanation: 'A Content Item provides informational content rather than bundling multiple catalog items.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Think about a feature designed to bundle several catalog requests.',
                  tags: ['service-catalog', 'order-guide', 'catalog']
            },
            {
                  id: 'q37',
                  type: 'single_choice',
                  question: 'What does an Order Guide allow a user to do?',
                  options: [
                        { id: 'A', text: 'Create a database table', explanation: 'Order Guides do not create database tables.' },
                        { id: 'B', text: 'Order multiple related catalog items as part of one coordinated request', explanation: 'Order Guides collect initial information and use it to determine the catalog items to request.' },
                        { id: 'C', text: 'Create a Business Rule', explanation: 'Business Rules are configuration records and are unrelated to Order Guides.' },
                        { id: 'D', text: 'Manage ACLs', explanation: 'ACL management is part of security administration.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'The key concept is bundling multiple catalog items into one request.',
                  tags: ['service-catalog', 'order-guide']
            },
            {
                  id: 'q38',
                  type: 'single_choice',
                  question: 'Which Service Catalog component provides a catalog interface for creating a record in a target table?',
                  options: [
                        { id: 'A', text: 'Order Guide', explanation: 'Order Guides bundle multiple catalog items.' },
                        { id: 'B', text: 'Record Producer', explanation: 'Record Producers provide a catalog-based way to create records in a target table.' },
                        { id: 'C', text: 'Catalog UI Policy', explanation: 'Catalog UI Policies control catalog item variables and behavior.' },
                        { id: 'D', text: 'Content Item', explanation: 'Content Items provide content rather than creating records.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'Think about producing a record from the Service Catalog.',
                  tags: ['service-catalog', 'record-producer']
            },
            {
                  id: 'q39',
                  type: 'single_choice',
                  question: 'What is the primary function of Flow Designer?',
                  options: [
                        { id: 'A', text: 'Build, run, and manage automated business processes', explanation: 'Flow Designer provides graphical tools for creating and managing process automation.' },
                        { id: 'B', text: 'Replace all database tables', explanation: 'Flow Designer does not replace database tables.' },
                        { id: 'C', text: 'Manage user passwords', explanation: 'Password management is not the primary function of Flow Designer.' },
                        { id: 'D', text: 'Display database schema diagrams', explanation: 'Schema Map is used to visualize database relationships.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think about automation and business processes.',
                  tags: ['flow-designer', 'automation', 'workflow']
            },
            {
                  id: 'q40',
                  type: 'single_choice',
                  question: 'What type of interface does Flow Designer provide?',
                  options: [
                        { id: 'A', text: 'Graphical low-code/no-code interface', explanation: 'Flow Designer provides a graphical environment for building automated processes.' },
                        { id: 'B', text: 'Command-line-only interface', explanation: 'Flow Designer is primarily a graphical interface.' },
                        { id: 'C', text: 'Database query console', explanation: 'Flow Designer is not a database query console.' },
                        { id: 'D', text: 'Source control command line', explanation: 'Flow Designer is an automation design interface rather than a source control console.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Flow Designer is designed to allow process automation with minimal coding.',
                  tags: ['flow-designer', 'low-code', 'no-code']
            },
            {
                  id: 'q41',
                  type: 'single_choice',
                  question: 'What are the main building blocks of a Flow Designer flow?',
                  options: [
                        { id: 'A', text: 'Triggers, actions, and flow logic', explanation: 'Flows use triggers to start execution and actions and logic to perform the process.' },
                        { id: 'B', text: 'Tables, indexes, and schemas', explanation: 'These are database concepts rather than the main Flow Designer building blocks.' },
                        { id: 'C', text: 'Users, groups, and roles', explanation: 'These are administration concepts rather than flow building blocks.' },
                        { id: 'D', text: 'ACLs, roles, and credentials', explanation: 'These are security concepts rather than the primary flow components.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'A flow needs something to start it and things to execute.',
                  tags: ['flow-designer', 'triggers', 'actions', 'automation']
            },
            {
                  id: 'q42',
                  type: 'single_choice',
                  question: 'What is Flow Designer commonly used for?',
                  options: [
                        { id: 'A', text: 'Automating business processes', explanation: 'Flow Designer is designed for process automation.' },
                        { id: 'B', text: 'Replacing all ACLs', explanation: 'ACLs remain a security mechanism independent of Flow Designer.' },
                        { id: 'C', text: 'Creating browser cookies', explanation: 'Browser cookies are not the purpose of Flow Designer.' },
                        { id: 'D', text: 'Managing database indexes', explanation: 'Database index management is unrelated to Flow Designer.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think about automated processes triggered by events.',
                  tags: ['flow-designer', 'automation', 'business-process']
            },
            {
                  id: 'q43',
                  type: 'single_choice',
                  question: 'How does Flow Designer relate to legacy Workflow?',
                  options: [
                        { id: 'A', text: 'Flow Designer is a modern automation capability used for many scenarios previously handled by legacy Workflow', explanation: 'Flow Designer provides a modern graphical approach to process automation.' },
                        { id: 'B', text: 'Flow Designer is a database table', explanation: 'Flow Designer is an automation capability.' },
                        { id: 'C', text: 'Flow Designer is a replacement for the Application Navigator', explanation: 'The Application Navigator remains the navigation mechanism.' },
                        { id: 'D', text: 'Flow Designer is an ACL type', explanation: 'ACLs are security rules and are unrelated to Flow Designer.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think of Flow Designer as the modern process automation experience.',
                  tags: ['flow-designer', 'workflow', 'automation']
            },
            {
                  id: 'q44',
                  type: 'single_choice',
                  question: 'Which Client Script type should be used when behavior needs to react to a change in a specific field?',
                  options: [
                        { id: 'A', text: 'onLoad', explanation: 'onLoad runs when the form loads.' },
                        { id: 'B', text: 'onChange', explanation: "onChange reacts to changes in a specific field's value." },
                        { id: 'C', text: 'onSubmit', explanation: 'onSubmit runs when the form is submitted.' },
                        { id: 'D', text: 'Display Business Rule', explanation: 'Display Business Rules execute server-side when a record is requested.' }
                  ],
                  correctAnswers: ['B'],
                  hint: 'The event is triggered by changing a field.',
                  tags: ['client-scripts', 'onchange', 'form-behavior']
            },
            {
                  id: 'q45',
                  type: 'single_choice',
                  question: 'Which Client Script type is appropriate for validating or changing behavior immediately before a form is submitted?',
                  options: [
                        { id: 'A', text: 'onLoad', explanation: 'onLoad runs when the form is initially loaded.' },
                        { id: 'B', text: 'onChange', explanation: 'onChange runs when a field value changes.' },
                        { id: 'C', text: 'onSubmit', explanation: 'onSubmit runs when the user attempts to submit the form and can prevent submission when validation fails.' },
                        { id: 'D', text: 'Async Business Rule', explanation: 'Async Business Rules execute server-side after a database operation.' }
                  ],
                  correctAnswers: ['C'],
                  hint: 'Which event happens immediately when the user submits the form?',
                  tags: ['client-scripts', 'onsubmit', 'validation']
            },
            {
                  id: 'q46',
                  type: 'single_choice',
                  question: 'Which of the following best distinguishes Client Scripts from Business Rules?',
                  options: [
                        { id: 'A', text: 'Client Scripts run in the browser, while Business Rules run on the server', explanation: 'This is the fundamental execution-environment distinction.' },
                        { id: 'B', text: 'Both always run in the browser', explanation: 'Business Rules run server-side.' },
                        { id: 'C', text: 'Both always run on the server', explanation: "Client Scripts run in the user's browser." },
                        { id: 'D', text: 'Client Scripts only run during imports', explanation: 'Client Scripts control client-side form behavior and are not limited to imports.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Focus on where each script executes.',
                  tags: ['client-scripts', 'business-rules', 'scripting']
            },
            {
                  id: 'q47',
                  type: 'single_choice',
                  question: 'Which feature is best suited for declaratively making a field mandatory, read-only, or hidden based on a condition?',
                  options: [
                        { id: 'A', text: 'UI Policy', explanation: 'UI Policies can declaratively control common field properties.' },
                        { id: 'B', text: 'Transform Map', explanation: 'Transform Maps handle data transformation during imports.' },
                        { id: 'C', text: 'Update Set', explanation: 'Update Sets transport configuration changes.' },
                        { id: 'D', text: 'Order Guide', explanation: 'Order Guides bundle catalog items.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Look for the declarative client-side configuration feature.',
                  tags: ['ui-policies', 'form-configuration', 'client-side']
            },
            {
                  id: 'q48',
                  type: 'single_choice',
                  question: 'Which statement correctly describes the relationship between an Import Set and a Transform Map?',
                  options: [
                        { id: 'A', text: 'The Import Set stores imported staging data and the Transform Map defines how that data is transformed into the target table', explanation: 'Import Sets provide staging tables, while Transform Maps define how staging data is mapped to target records.' },
                        { id: 'B', text: 'The Transform Map stores user passwords and the Import Set assigns roles', explanation: 'Neither component performs these functions.' },
                        { id: 'C', text: 'Both are used exclusively for ACL evaluation', explanation: 'ACLs are security rules and are unrelated to the primary purpose of Import Sets and Transform Maps.' },
                        { id: 'D', text: 'The Import Set replaces the target table', explanation: 'The Import Set is a staging mechanism and does not replace the target table.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think staging first, transformation second.',
                  tags: ['import-sets', 'transform-map', 'data-import']
            },
            {
                  id: 'q49',
                  type: 'single_choice',
                  question: 'Which statement best describes what an Update Set is intended to transport?',
                  options: [
                        { id: 'A', text: 'Configuration and customization changes', explanation: 'Update Sets are designed to capture configuration changes for migration.' },
                        { id: 'B', text: 'All Incident records', explanation: 'Transactional application data is not the normal purpose of Update Sets.' },
                        { id: 'C', text: 'All user-generated attachments', explanation: 'Attachments are not generally transported as ordinary Update Set configuration.' },
                        { id: 'D', text: 'All production transaction history', explanation: 'Update Sets are not intended to migrate transactional history.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Think customization rather than application data.',
                  tags: ['update-sets', 'configuration', 'administration']
            },
            {
                  id: 'q50',
                  type: 'single_choice',
                  question: 'Which combination correctly matches each ServiceNow feature with its primary purpose?',
                  options: [
                        { id: 'A', text: 'Order Guide → bundle multiple catalog items; Transform Map → map imported data; Flow Designer → automate processes', explanation: 'These are the correct primary purposes of the three features.' },
                        { id: 'B', text: 'Order Guide → manage ACLs; Transform Map → assign roles; Flow Designer → create tables', explanation: 'These functions belong to other ServiceNow areas.' },
                        { id: 'C', text: 'Order Guide → create Business Rules; Transform Map → manage groups; Flow Designer → display schema', explanation: 'These are not the primary purposes of the features.' },
                        { id: 'D', text: 'Order Guide → create indexes; Transform Map → manage passwords; Flow Designer → filter navigation', explanation: 'These functions do not correspond to the listed features.' }
                  ],
                  correctAnswers: ['A'],
                  hint: 'Match each feature to its main functional area.',
                  tags: ['service-catalog', 'transform-map', 'flow-designer', 'concepts']
            }
      ]
};

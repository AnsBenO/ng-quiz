import { Quiz } from "../models/quiz.models";

export const SERVICENOW_IMPORT_SETS_QUIZ: Quiz = {
  id: 'servicenow-import-sets-advanced',
  title: 'ServiceNow Data Management: Import Sets, Transform Maps & Coalesce (Advanced)',
  description:
    'Advanced, scenario-driven questions on staging data, transform maps, mapping strategies, coalesce behavior and data source selection. Focuses on reasoning, design decisions and troubleshooting rather than recall.',
  subject: 'ServiceNow',
  category: 'Data Management',
  difficulty: 'advanced',
  language: 'en',
  passingScore: 75,
  questions: [
    // ───────────── Staging & process ─────────────
    {
      id: 'q1',
      type: 'single_choice',
      question:
        'A CSV file loads successfully into an Import Set table, but the target table shows no new records. What is the correct interpretation?',
      options: [
        { id: 'a', text: 'The load failed silently and must be repeated' },
        { id: 'b', text: 'This is expected: loading only fills the staging table, and the target table changes only when a transform runs' },
        { id: 'c', text: 'The target table must be emptied before records can appear' },
        { id: 'd', text: 'The coalesce fields blocked the load' }
      ],
      correctAnswers: ['b'],
      hint: 'Which step is the first to touch the target table?',
      explanation:
        'Import Sets are a staging area. Loading puts raw data in the Import Set table; moving data into the target table is the job of the transform, which uses the Transform Map.',
      tags: ['import-set', 'process', 'staging']
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question:
        'Which problems does the staging-area design help solve? (Select all that apply)',
      options: [
        { id: 'a', text: 'Raw external data is kept separate from production tables until it is transformed' },
        { id: 'b', text: 'You can inspect what was loaded before it affects the target table' },
        { id: 'c', text: 'Mapping or script errors can be fixed and the transform re-run without reloading from the external source' },
        { id: 'd', text: 'Bad source data is guaranteed never to reach the target table' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation:
        'Staging decouples loading from transforming, which gives separation, inspectability and re-runnability. It does not by itself validate data: bad values can still reach the target if the map and scripts allow it.',
      tags: ['import-set', 'staging', 'design']
    },
    {
      id: 'q3',
      type: 'single_choice',
      question:
        'Why must the clean-up step come after the transform step, rather than before it?',
      options: [
        { id: 'a', text: 'Clean-up creates the field maps that the transform needs' },
        { id: 'b', text: 'Clean-up removes processed data from the Import Set table, so doing it first would delete data that has not yet been moved to the target' },
        { id: 'c', text: 'Clean-up loads the data from the external source' },
        { id: 'd', text: 'The transform cannot run on an empty target table' }
      ],
      correctAnswers: ['b'],
      explanation:
        'The sequence Load → Map → Transform → Clean follows data dependencies. Clean-up removes staged data that has already been processed, so it only makes sense once the transform has finished.',
      tags: ['process', 'cleanup']
    },
    {
      id: 'q4',
      type: 'single_choice',
      question:
        'A team cleans up the Import Set table immediately after every transform to save space. Later they discover a mapping mistake that corrupted a field in thousands of target records. What trade-off did they overlook?',
      options: [
        { id: 'a', text: 'Clean-up makes the Transform Map unusable' },
        { id: 'b', text: 'Clean-up deletes the target records too' },
        { id: 'c', text: 'Removing staged data too early also removes the raw source data that would help diagnose the problem and re-run a corrected transform' },
        { id: 'd', text: 'Clean-up forces all future imports to ignore coalesce fields' }
      ],
      correctAnswers: ['c'],
      explanation:
        'Clean-up controls the growth of the staging table, but staged rows are also a record of what was loaded. Keeping them for an appropriate period supports troubleshooting and re-processing.',
      tags: ['cleanup', 'trade-offs', 'troubleshooting']
    },
    {
      id: 'q5',
      type: 'single_choice',
      question:
        'Whether the data came from a spreadsheet, a JDBC connection or a directory, it follows the same Import Set pattern. What is the main implication?',
      options: [
        { id: 'a', text: 'Each source type needs its own incompatible kind of Transform Map' },
        { id: 'b', text: 'Only file sources can use coalesce fields' },
        { id: 'c', text: 'Directory sources bypass the staging table entirely' },
        { id: 'd', text: 'Once data is in the staging table, the same concepts apply regardless of origin: field maps, transform scripts and coalesce' }
      ],
      correctAnswers: ['d'],
      explanation:
        'The data source only determines how data is loaded. After that, the staging table, transform map, mappings and coalesce behavior work the same way.',
      tags: ['data-sources', 'import-set', 'concepts']
    },

    // ───────────── Transform maps & mapping ─────────────
    {
      id: 'q6',
      type: 'multiple_choice',
      question:
        'Which are key components of a Transform Map? (Select all that apply)',
      options: [
        { id: 'a', text: 'A source table (the Import Set table)' },
        { id: 'b', text: 'A target table (the destination)' },
        { id: 'c', text: 'Field maps from source fields to target fields' },
        { id: 'd', text: 'The external system\'s own database schema' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation:
        'A Transform Map connects the staging table to a target table through field maps, optionally with transform scripts. The external schema is a property of the source system, not a component of the map.',
      tags: ['transform-map', 'components']
    },
    {
      id: 'q7',
      type: 'single_choice',
      question:
        'Source columns are named "emp_mail" and "emp_dept", while the target fields are "email" and "department". Which statement is correct?',
      options: [
        { id: 'a', text: 'Automatic mapping will handle both, because the names are similar' },
        { id: 'b', text: 'Automatic mapping applies only when names match exactly, so you need suggestions from Mapping Assist or manual mapping' },
        { id: 'c', text: 'Mapping is impossible unless the source file is renamed' },
        { id: 'd', text: 'Only a transform script can map fields with different names' }
      ],
      correctAnswers: ['b'],
      explanation:
        'Automatic mapping requires exact name matches. When names differ, Mapping Assist can suggest candidates or you can map manually.',
      tags: ['transform-map', 'mapping']
    },
    {
      id: 'q8',
      type: 'single_choice',
      question:
        'The source provides a person\'s name in a single column formatted as "Last, First", but the target table has separate first and last name fields. What is the right tool?',
      options: [
        { id: 'a', text: 'A coalesce field on the name column' },
        { id: 'b', text: 'Automatic mapping, since both fields contain names' },
        { id: 'c', text: 'A transform script that manipulates the value and populates both target fields' },
        { id: 'd', text: 'A clean-up job that splits the column after the transform' }
      ],
      correctAnswers: ['c'],
      hint: 'A straight field-to-field copy cannot split a value.',
      explanation:
        'Transform scripts exist for data manipulation. A plain field map copies one source value into one target field; splitting or reformatting requires logic.',
      tags: ['transform-map', 'transform-script', 'application']
    },
    {
      id: 'q9',
      type: 'multiple_choice',
      question:
        'In which situations is a simple one-to-one field map NOT enough, so some form of transform script logic is needed? (Select all that apply)',
      options: [
        { id: 'a', text: 'Combining two source columns into one target field' },
        { id: 'b', text: 'Converting source codes such as "A" and "I" into the target\'s expected values' },
        { id: 'c', text: 'Copying a source "email" column into a target "email" field unchanged' },
        { id: 'd', text: 'Applying conditional logic, such as skipping or altering a row depending on its content' }
      ],
      correctAnswers: ['a', 'b', 'd'],
      explanation:
        'Direct copies are what field maps are for. Combining, translating and conditional behavior require data manipulation logic.',
      tags: ['transform-script', 'mapping', 'application']
    },
    {
      id: 'q10',
      type: 'single_choice',
      question:
        'A team receives the same monthly file layout from a partner every month. What is the most sensible use of Transform Maps?',
      options: [
        { id: 'a', text: 'Create a new Transform Map every month so history is preserved' },
        { id: 'b', text: 'Reuse the same Transform Map for each import, since the layout does not change' },
        { id: 'c', text: 'Skip the Transform Map and write directly to the target table' },
        { id: 'd', text: 'Use only automatic mapping and delete the Transform Map after each run' }
      ],
      correctAnswers: ['b'],
      explanation:
        'A Transform Map is reusable. As long as the source layout stays the same, the same map can process each new load.',
      tags: ['transform-map', 'reusability']
    },
    {
      id: 'q11',
      type: 'single_choice',
      question:
        'A partner changes the column names in their monthly file. The existing Transform Map is reused unchanged. What is the most likely outcome?',
      options: [
        { id: 'a', text: 'Field maps pointing to the old column names no longer find their source values, so data is not mapped as intended' },
        { id: 'b', text: 'The platform automatically rewrites the field maps' },
        { id: 'c', text: 'The target table\'s fields are renamed to match' },
        { id: 'd', text: 'Nothing: field maps are independent of source column names' }
      ],
      correctAnswers: ['a'],
      explanation:
        'Field maps link specific source fields to specific target fields. When the source layout changes, the map must be updated (or a new one created).',
      tags: ['transform-map', 'reusability', 'troubleshooting']
    },

    // ───────────── Coalesce ─────────────
    {
      id: 'q12',
      type: 'single_choice',
      question:
        'An import runs twice against the same file, and there are no coalesce fields on the Transform Map. What happens on the second run?',
      options: [
        { id: 'a', text: 'Existing records are updated because the data is identical' },
        { id: 'b', text: 'The second run is rejected as a duplicate load' },
        { id: 'c', text: 'Every row is treated as new again, producing duplicate records in the target table' },
        { id: 'd', text: 'Only rows with changes are inserted' }
      ],
      correctAnswers: ['c'],
      explanation:
        'Without coalesce fields there is nothing to identify existing records, so every row is treated as new.',
      tags: ['coalesce', 'duplicates', 'behavior']
    },
    {
      id: 'q13',
      type: 'single_choice',
      question:
        'Users are imported using their email address as the coalesce field. A person changes their name and the HR system issues them a new email. The next import creates a second user record for them. Why?',
      options: [
        { id: 'a', text: 'The new email did not match any existing record, so no match was found and a new record was created' },
        { id: 'b', text: 'Coalesce fields are only checked for the first row of the import' },
        { id: 'c', text: 'Email fields cannot be used for coalescing' },
        { id: 'd', text: 'The staging table automatically duplicates changed rows' }
      ],
      correctAnswers: ['a'],
      hint: 'Coalesce decides update vs create based on whether a match is found.',
      explanation:
        'No match means create. This is why the best coalesce field is a stable unique identifier, such as an employee ID, rather than an attribute that can change.',
      tags: ['coalesce', 'design', 'stability']
    },
    {
      id: 'q14',
      type: 'single_choice',
      question:
        'A team chooses "department" as the coalesce field for a user import. What is the most serious problem with this choice?',
      options: [
        { id: 'a', text: 'Department values are too short to compare' },
        { id: 'b', text: 'It is not unique, so a source row can match many records or the wrong one, leading to incorrect updates' },
        { id: 'c', text: 'Coalesce fields must always be numeric' },
        { id: 'd', text: 'Coalesce can only be used on reference fields' }
      ],
      correctAnswers: ['b'],
      explanation:
        'Coalesce fields should identify one record. A non-unique field cannot do that reliably, so updates may be applied to unintended records.',
      tags: ['coalesce', 'design', 'uniqueness']
    },
    {
      id: 'q15',
      type: 'single_choice',
      question:
        'A source file contains two rows with the same value in the coalesce field, and no matching record exists in the target table yet. How is this typically resolved as rows are processed?',
      options: [
        { id: 'a', text: 'The first row creates a record, and the second row finds that record as a match and updates it' },
        { id: 'b', text: 'Both rows create separate records' },
        { id: 'c', text: 'Both rows are rejected' },
        { id: 'd', text: 'The second row is ignored without evaluation' }
      ],
      correctAnswers: ['a'],
      explanation:
        'Coalesce is evaluated against the target table as rows are processed, so a record created by an earlier row can be matched by a later row. This is why duplicates inside a file can collapse into one record whose final values come from the last matching row.',
      tags: ['coalesce', 'behavior', 'application']
    },
    {
      id: 'q16',
      type: 'single_choice',
      question:
        'After a transform, 1,000 rows were all created as new target records even though matching records existed, and no errors were reported. Which investigation is most useful?',
      options: [
        { id: 'a', text: 'Check whether coalesce fields are configured, and whether the source values actually match the stored values (for example formatting differences)' },
        { id: 'b', text: 'Check whether the data source is a file or a database' },
        { id: 'c', text: 'Run the clean-up step again' },
        { id: 'd', text: 'Rename the Import Set table' }
      ],
      correctAnswers: ['a'],
      explanation:
        'Creating records without errors points to "no match": either no coalesce fields are defined, or the values do not match exactly, for example due to different formatting or stray whitespace.',
      tags: ['coalesce', 'troubleshooting']
    },
    {
      id: 'q17',
      type: 'single_choice',
      question:
        'A transform map uses two coalesce fields. Under normal coalesce behavior, when is an incoming row considered a match for an existing record?',
      options: [
        { id: 'a', text: 'When either coalesce field matches' },
        { id: 'b', text: 'When both coalesce fields match the existing record' },
        { id: 'c', text: 'Only when the record was created during the same import' },
        { id: 'd', text: 'Never; only one coalesce field is allowed' }
      ],
      correctAnswers: ['b'],
      explanation:
        'With multiple coalesce fields, the combination is used to identify a record, so all of them must match. This is useful when no single field is unique but a combination is.',
      tags: ['coalesce', 'behavior']
    },
    {
      id: 'q18',
      type: 'single_choice',
      question:
        'HR provides an employee ID, an email address, a name and a department. Which design is best for a recurring import into a user table?',
      options: [
        { id: 'a', text: 'Coalesce on name; map the other fields manually' },
        { id: 'b', text: 'Coalesce on department; map the remaining fields automatically' },
        { id: 'c', text: 'No coalesce fields, because the import will be cleaned up afterwards' },
        { id: 'd', text: 'Coalesce on employee ID, map the other fields, and use transform logic to normalize formats where needed' }
      ],
      correctAnswers: ['d'],
      explanation:
        'A unique, stable identifier makes updates predictable. Field maps carry the other data, and transform logic cleans up inconsistent formats that could otherwise cause mismatches or poor data quality.',
      tags: ['synthesis', 'coalesce', 'design', 'transform-script']
    },
    {
      id: 'q19',
      type: 'multiple_choice',
      question:
        'Which statements describe coalesce behavior correctly? (Select all that apply)',
      options: [
        { id: 'a', text: 'A match found means the existing record is updated' },
        { id: 'b', text: 'No match found means a new record is created' },
        { id: 'c', text: 'No coalesce fields means every row is treated as new' },
        { id: 'd', text: 'A match found means a new duplicate record is created with a suffix' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation:
        'Coalesce is how the import decides between update and insert. A match never results in a duplicate being created.',
      tags: ['coalesce', 'behavior']
    },

    // ───────────── Data sources ─────────────
    {
      id: 'q20',
      type: 'single_choice',
      question:
        'A manager emails you a one-off spreadsheet of 300 assets to load. Which source type fits best?',
      options: [
        { id: 'a', text: 'A JDBC connection' },
        { id: 'b', text: 'An LDAP/Active Directory connection' },
        { id: 'c', text: 'A file source such as CSV or Excel' },
        { id: 'd', text: 'A SOAP web service' }
      ],
      correctAnswers: ['c'],
      explanation:
        'A one-off spreadsheet is a file source. The other options are meant for connecting to live systems.',
      tags: ['data-sources', 'file']
    },
    {
      id: 'q21',
      type: 'single_choice',
      question:
        'An HR team stores employee data in an external relational database that must be synchronized into ServiceNow on a schedule. Which data source type is the natural choice?',
      options: [
        { id: 'a', text: 'A CSV file emailed nightly' },
        { id: 'b', text: 'A JDBC database source' },
        { id: 'c', text: 'An LDAP directory source' },
        { id: 'd', text: 'Manual data entry' }
      ],
      correctAnswers: ['b'],
      explanation:
        'JDBC connects to external databases directly, avoiding manual file exports for recurring synchronization.',
      tags: ['data-sources', 'jdbc']
    },
    {
      id: 'q22',
      type: 'single_choice',
      question:
        'User accounts and group information are maintained in Active Directory and need to populate ServiceNow tables. Which source type is designed for this?',
      options: [
        { id: 'a', text: 'Directory source (LDAP)' },
        { id: 'b', text: 'File source (XML)' },
        { id: 'c', text: 'Database source (JDBC)' },
        { id: 'd', text: 'Web service (REST)' }
      ],
      correctAnswers: ['a'],
      explanation:
        'LDAP/Active Directory is the directory source type, designed for user and group information.',
      tags: ['data-sources', 'ldap']
    },
    {
      id: 'q23',
      type: 'single_choice',
      question:
        'A partner system offers no database access and no file exports, but exposes a REST API for its records. Which data source category fits?',
      options: [
        { id: 'a', text: 'File sources' },
        { id: 'b', text: 'Directory sources' },
        { id: 'c', text: 'Web services (REST/SOAP APIs)' },
        { id: 'd', text: 'None; such data cannot be imported' }
      ],
      correctAnswers: ['c'],
      explanation:
        'REST and SOAP APIs are web service sources and are suitable when the external system exposes its data through an API.',
      tags: ['data-sources', 'web-services']
    },

    // ───────────── True / False ─────────────
    {
      id: 'q24',
      type: 'true_false',
      question:
        'Loading data into an Import Set table writes records directly to the target table.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['false'],
      explanation:
        'Loading only populates the staging table. The transform moves data to the target.',
      tags: ['import-set', 'staging']
    },
    {
      id: 'q25',
      type: 'true_false',
      question:
        'A Transform Map\'s source table is the target table that receives the final records.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['false'],
      explanation:
        'The source table is the Import Set (staging) table; the target table is the destination.',
      tags: ['transform-map', 'components']
    },
    {
      id: 'q26',
      type: 'true_false',
      question:
        'Automatic mapping will map fields whose names are similar but not identical.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['false'],
      hint: 'Check the exact condition for automatic mapping.',
      explanation:
        'Automatic mapping applies when field names match exactly. For similar names, use Mapping Assist suggestions or manual mapping.',
      tags: ['transform-map', 'mapping']
    },
    {
      id: 'q27',
      type: 'true_false',
      question:
        'A single Transform Map can be reused for multiple imports of data with the same layout.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['true'],
      explanation:
        'Transform Maps are reusable, which is what makes recurring imports practical.',
      tags: ['transform-map', 'reusability']
    },
    {
      id: 'q28',
      type: 'true_false',
      question:
        'A fixed rule such as "Load, Map, Transform, Clean" means the staging table should be cleaned up as soon as loading finishes.',
      options: [
        { id: 'true', text: 'True' },
        { id: 'false', text: 'False' }
      ],
      correctAnswers: ['false'],
      explanation:
        'Clean-up comes last, after the transform has moved the data, and the timing should consider troubleshooting and re-processing needs.',
      tags: ['process', 'cleanup']
    }
  ]
};
export const fhirTableHeaders = [
  {
    id: "1",
    key: "name",
    header: "NAME",
    accessor: "name",
  },
  {
    id: "2",
    key: "url",
    header: "URL",
    accessor: "url",
  },
  {
    id: "3",
    key: "uuid",
    header: "UUID",
    accessor: "uuid",
  },
  {
    id: "4",
    key: "profileEnabled",
    header: "PROFILE ENABLED",
    accessor: "profileEnabled",
  },
  {
    id: "5",
    key: "actions",
    header: "ACTIONS",
    accessor: "actions",
  },
];

export const profileTransactionsHeaders = [
  {
    id: "1",
    key: "identifier",
    header: "IDENTIFIER",
    accessor: "identifier",
  },
  {
    id: "2",
    key: "name",
    header: "NAME",
    accessor: "name",
  },
  {
    id: "3",
    key: "status",
    header: "STATUS",
    accessor: "status",
  },
  {
    id: "4",
    key: "dateCreated",
    header: "DATE CREATED",
    accessor: "dateCreated",
  },
];

export const HIEProfiles = {
  alis: { name: "ALIS" },
  artAccess: { name: "ART Access" },
  cbs: { name: "CBS" },
  clientRegistry: { name: "Client Registry" },
  ecbs: { name: "eCBS" },
  ehmis: { name: "eHMIS Reporting" },
  facilitySHR: { name: "Facility SHR" },
  pirs: { name: "PIRS Reporting" },
  smsReminders: { name: "SMS Appointment Reminders" },
  viralLoad: { name: "VL" },
};

export const VL_INCOMING_SYNC_TASK_TYPE_UUID =
  "3396dcf0-2106-4e73-9b90-c63978c3a8b4";
export const VL_OUTGOING_SYNC_TASK_TYPE_UUID =
  "3551ca84-06c0-432b-9064-fcfeefd6f4ec";
export const ART_ACCESS_INCOMING_SYNC_TASK_TYPE_UUID =
  "4c4e9551-d9d6-4882-93bd-e61a42e2f755";
export const ART_ACCESS_OUTGOING_SYNC_FHIR_PROFILE_UUID =
  "0a7fff77-6ac7-416c-831e-4e3f1f2c853b";
export const CBS_OUTGOING_SYNC_FHIR_PROFILE_UUID =
  "6511be5a-72f2-4638-a60b-78e31c3e2b28";
export const ALIS_OUTGOING_SYNC_FHIR_PROFILE_UUID =
  "2f0ef683-c988-448b-b928-e3e2cf6657af";
export const ECBS_OUTGOING_SYNC_FHIR_PROFILE_UUID =
  "99c4d715-4fcf-4d95-a946-257c6de05cf7";
export const CLIENT_REGISTRY_OUTGOING_SYNC_FHIR_PROFILE_UUID =
  "84242661-aadf-42e4-9431-bf8afefb4433";
export const FACILITY_SHR_OUTGOING_SYNC_FHIR_PROFILE_UUID =
  "0b7eb397-4488-4a88-9967-a054b3c26d6f";
export const PIRS_REPORTING_OUTGOING_SYNC_TASK_TYPE_UUID =
  "6ebd85c8-127b-4c88-8a40-27defef367a9";
export const EHMIS_REPORTING_OUTGOING_SYNC_TASK_TYPE_UUID =
  "c5f00f18-c0f6-4917-b973-2b7c1d2d4a81";
export const SMS_APPOINTMENT_REMINDERS_OUTGOING_SYNC_TASK_TYPE_UUID =
  "08c5be38-1b79-4e27-b9ca-5da709aef5fe";

export const syncFhirProfileUuids = [
  ART_ACCESS_OUTGOING_SYNC_FHIR_PROFILE_UUID,
  CBS_OUTGOING_SYNC_FHIR_PROFILE_UUID,
  ALIS_OUTGOING_SYNC_FHIR_PROFILE_UUID,
  ECBS_OUTGOING_SYNC_FHIR_PROFILE_UUID,
  CLIENT_REGISTRY_OUTGOING_SYNC_FHIR_PROFILE_UUID,
  FACILITY_SHR_OUTGOING_SYNC_FHIR_PROFILE_UUID,
];

export const syncTaskTypeUuids = [
  VL_INCOMING_SYNC_TASK_TYPE_UUID,
  VL_OUTGOING_SYNC_TASK_TYPE_UUID,
  ART_ACCESS_INCOMING_SYNC_TASK_TYPE_UUID,
  PIRS_REPORTING_OUTGOING_SYNC_TASK_TYPE_UUID,
  EHMIS_REPORTING_OUTGOING_SYNC_TASK_TYPE_UUID,
  SMS_APPOINTMENT_REMINDERS_OUTGOING_SYNC_TASK_TYPE_UUID,
];

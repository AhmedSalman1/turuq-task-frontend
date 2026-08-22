/**
 * Personal records shown on the root page.
 *
 * The values below are placeholders — replace them with your real details
 * before submitting the assessment. Each entry renders as a ProfileCard.
 */

export type RecordIcon = 'user' | 'cake' | 'mail' | 'phone' | 'graduation';

export interface ProfileRecord {
  id: string;
  /** Short uppercase label, e.g. "Full name". */
  label: string;
  /** The main value rendered prominently on the card. */
  value: string;
  /** Optional secondary line, e.g. graduation year. */
  detail?: string;
  /** Warehouse-style bin code printed on the card tag. */
  code: string;
  /** Icon key, mapped to an icon component in the root page. */
  icon: RecordIcon;
}

export const PROFILE_RECORDS: ProfileRecord[] = [
  { id: 'name', label: 'Full name', value: 'Ahmed Salman', code: 'A-01', icon: 'user' },
  { id: 'age', label: 'Age', value: '23', code: 'A-02', icon: 'cake' },
  { id: 'email', label: 'Email address', value: 'a7medsalman6@gmail.com', code: 'A-03', icon: 'mail' },
  { id: 'phone', label: 'Phone number', value: '+20 109 955 0375', code: 'A-04', icon: 'phone' },
  {
    id: 'university',
    label: 'University',
    value: 'Mansoura University',
    detail: 'Graduated 2024',
    code: 'A-05',
    icon: 'graduation',
  },
];

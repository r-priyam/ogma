import { LogLevel } from '@ogma/common';

export interface OgmaLog {
  time: string;
  hostname: string;
  application?: string;
  context?: string;
  message?: string;
  level: keyof typeof LogLevel;
  pid: string | number;
  [key: string]: any;
}

import { InjectionToken } from '@angular/core';
import { LoggerSevice } from '../services/logger.service';

export const LOGGER_TOKEN = new InjectionToken<LoggerSevice>('LOGGER_TOKEN');

import {types} from 'mobx-state-tree';
import {isString} from 'lodash';
import moment, {Moment} from 'moment';

export const apiDate = types.snapshotProcessor(types.Date, {
  preProcessor(value: string | Moment | Date | number) {
    if (isString(value)) {
      return moment(value).toDate();
    } else if (moment.isMoment(value)) {
      return value.toDate();
    }
    return value;
  },
});

export const nullableDate = types.maybeNull(apiDate);
export const defDate = types.optional(apiDate, new Date(), [null, undefined]);
export const defBoolean = types.optional(types.boolean, false, [
  null,
  undefined,
]);
export const defString = types.optional(types.string, '', [null, undefined]);
export const defNumber = types.optional(types.number, 0, [null, undefined]);
export const defInt = types.optional(types.integer, 0, [null, undefined]);

export default {
  apiDate,
  nullableDate,
  defDate,
  defBoolean,
  defString,
  defNumber,
};

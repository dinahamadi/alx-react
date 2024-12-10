import { getFullYear, getFooterCopy, getLatestNotification } from '..utils/utils';

test('getFullYear returns the correct year',
    () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });
test('getFooterCopy returns the ALX if the argument is true', () => {
    expect(getFooterCopy(true)).toBe("ALX");
});
test('getFooterCopy returns the ALX if the argument is false', () => {
    expect(getFooterCopy(false)).toBe("ALX main dashboard");
});
test('getLatestNotification returns the right string', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
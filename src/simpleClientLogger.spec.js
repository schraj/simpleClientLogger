import SimpleClientLogger from './simpleClientLogger';

test('instantiates class', () => {
    const simpleClientLogger = new SimpleClientLogger({});
    expect(typeof simpleClientLogger).toBe('object');
});

test('errorCache property is initialized', () => {
    const simpleClientLogger = new SimpleClientLogger({});
    expect(Array.isArray(simpleClientLogger.errorCache)).toBeTruthy();
    expect(simpleClientLogger.errorCache.length).toBe(0);
});

test('options parameter is merged with default options', () => {
    const simpleClientLogger = new SimpleClientLogger({
        appName: 'test-app'
    });
    expect(typeof simpleClientLogger.options).toBe('object');
    expect(simpleClientLogger.options.appName).toBe('test-app');
    expect(simpleClientLogger.options.maxMessagesPerInterval).toBe(3);

});
test("Mock implementation of a basic function", () => {
    const mockCallback = jest.fn(x => 36 + x);
    expect(mockCallback(1)).toBe(37);
    expect(mockCallback).toHaveBeenCalledWith(1);
});
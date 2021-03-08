
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 200000,
    years: 30,
    rate: 4
  };
  expect(calculateMonthlyPayment(values)).toEqual('954.83');
});

it('should return a result with 2 decimal places', function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it('should calculate high interest', function () {
  const values = {
  amount: 1000,
  years: 1,
  rate: 100
};
  expect(calculateMonthlyPayment(values)).toEqual('135.00');
});

it('should calculate loan of 0', function () {
  const values = {
    amount: 0,
    years: 1,
    rate: 1
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});

it('should calculate interest of 0', function () {
  const values = {
    amount: 1200,
    years: 1,
    rate: 0
  };
  expect(calculateMonthlyPayment(values)).toEqual('100.00');
});
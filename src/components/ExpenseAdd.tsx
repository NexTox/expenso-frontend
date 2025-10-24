import { useForm } from 'react-hook-form';
import type { ExpenseWithoutId } from '../types/Expense';

interface ExpenseAddProps {
  addExpense: (expense: ExpenseWithoutId) => void | Promise<void>;
}

export default function ExpenseAdd({ addExpense }: ExpenseAddProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseWithoutId>();

  const onSubmit = (data: ExpenseWithoutId) => {
    addExpense(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Payer:
        <select {...register('payer', { required: true })}>
          <option value="">Select</option>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
        {errors.payer && <span>Payer is required</span>}
      </label>

      <label>
        Date:
        <input type="date" {...register('date', { required: true })} />
        {errors.date && <span>Date is required</span>}
      </label>

      <label>
        Description:
        <input type="text" {...register('description', { required: true })} placeholder="Enter description" />
        {errors.description && <span>Description is required</span>}
      </label>

      <label>
        Amount:
        <input type="number" step="0.01" {...register('amount', { required: true })} placeholder="Enter amount" />
        {errors.amount && <span>Amount is required</span>}
      </label>

      <button type="submit">Add Expense</button>
    </form>
  );
}

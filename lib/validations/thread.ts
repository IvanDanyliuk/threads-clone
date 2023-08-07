import * as zod from 'zod';

export const ThreadValidation = zod.object({
  thread: zod.string().nonempty().min(3, { message: 'Minimum 3 characters' }),
  accountId: zod.string()
});

export const CommentValidation = zod.object({
  thread: zod.string().nonempty().min(3, { message: 'Minimum 3 characters' }),
});
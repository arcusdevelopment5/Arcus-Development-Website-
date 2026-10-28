import {sqliteTable, text, integer} from 'drizzle-orm/sqlite-core';
export const inquiries=sqliteTable('inquiries',{
 id:text('id').primaryKey(), idempotency:text('idempotency').notNull().unique(), kind:text('kind').notNull(), intent:text('intent').notNull(), name:text('name').notNull(), phone:text('phone'), email:text('email'), area:text('area').notNull(), sqm:integer('sqm'), timeline:text('timeline'), description:text('description'), source:text('source').notNull(), status:text('status').notNull().default('new'), assignedTo:text('assigned_to'), createdAt:text('created_at').notNull(), updatedAt:text('updated_at').notNull(), crmStatus:text('crm_status').notNull().default('pending'), adminNotes:text('admin_notes')
});
export const inquiryFiles=sqliteTable('inquiry_files',{id:text('id').primaryKey(),inquiryId:text('inquiry_id').notNull().references(()=>inquiries.id),objectKey:text('object_key').notNull(),name:text('name').notNull(),type:text('type').notNull(),size:integer('size').notNull()});
export const submissionRates=sqliteTable('submission_rates',{key:text('key').primaryKey(),window:text('window').notNull(),count:integer('count').notNull().default(1)});

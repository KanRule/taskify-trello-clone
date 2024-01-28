'use client';

import { List } from '@prisma/client';

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, X } from 'lucide-react';
import { FormSubmit } from '@/components/form/FormSubmit';
import { Separator } from '@/components/ui/separator';

interface ListOptionsProps {
	data: List;
	onAddCard: () => void;
}

export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className='w-auto h-auto p-2'
					variant={'ghost'}
				>
					<MoreHorizontal className='w-4 h-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className='px-0 pt-3 pb-3'
				side='bottom'
				align='start'
			>
				<div className='text-sm font-medium text-center text-neutral-600 pb-4'>List Actions</div>
				<PopoverClose asChild>
					<Button
						className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
						variant={'ghost'}
					>
						<X className='w-4 h-4' />
					</Button>
				</PopoverClose>
				<Button
					onClick={onAddCard}
					className='rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm'
					variant={'ghost'}
				>
					Add card...
				</Button>
				<form className=''>
					<input
						hidden
						name='id'
						id='id'
						value={data.id}
					/>
					<input
						hidden
						name='boardId'
						id='boardId'
						value={data.boardId}
					/>
					<FormSubmit
						variant='ghost'
						className='rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm'
					>
						Copy list...
					</FormSubmit>
				</form>
				<Separator />
				<form>
					<input
						hidden
						name='id'
						id='id'
						value={data.id}
					/>
					<input
						hidden
						name='boardId'
						id='boardId'
						value={data.boardId}
					/>
					<FormSubmit
						variant='ghost'
						className='rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm'
					>
						Delete this list
					</FormSubmit>
				</form>
			</PopoverContent>
		</Popover>
	);
};
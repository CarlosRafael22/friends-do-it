'use client'

import { useState } from 'react'
import Modal from '../Modal/Modal'
import { CreatePlanBody } from '@/src/entities/models/plan';

type CreatePlanModalProps = {
    onSubmit: (params: CreatePlanBody) => void;
    onClose: () => void;
    errorMessage?: string;
};

const CreatePlanModal = ({ onSubmit, onClose, errorMessage }: CreatePlanModalProps) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
        onSubmit({
            title,
            date,
            time
        });
        onClose();
    }
  };

  return (
    <Modal title='Add new plan' submitText='Add plan' onSubmit={handleSubmit} onClose={onClose}>
        <div>
                {errorMessage && <div className='bg-red-100 p-2 rounded-lg border-l-4 border-l-red-400 my-4'>{errorMessage}</div>}
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                    Date (optional)
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
                    Time (optional)
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
{/*                 <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeAllUsers}
                      onChange={(e) => {
                        setIncludeAllUsers(e.target.checked)
                        if (e.target.checked) {
                          setSelectedUsers(groupUsers.map(user => user.id))
                        } else {
                          setSelectedUsers([])
                        }
                      }}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 text-sm">Include all users in this group</span>
                  </label>
                </div> */}
{/*                 <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select Users
                  </label>
                  <div className="max-h-40 overflow-y-auto border rounded p-2">
                    {groupUsers.map(user => (
                      <label key={user.id} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          checked={includeAllUsers || selectedUsers.includes(user.id)}
                          onChange={() => !includeAllUsers && toggleUser(user.id)}
                          disabled={includeAllUsers}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700 text-sm">{user.name}</span>
                      </label>
                    ))}
                  </div>
                </div> */}
        </div>
    </Modal>
  );
};

export default CreatePlanModal;
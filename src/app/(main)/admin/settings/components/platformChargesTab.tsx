import React from 'react';
import Input from '@/components/form/input/InputField';

const PlatformChargesTab = () => {
  return (
   <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Platform Charges
      </label>
      <Input
        type="number"
        placeholder="Enter Platform Charges"
        value={5.00}
        className="w-full px-4 py-1 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default PlatformChargesTab
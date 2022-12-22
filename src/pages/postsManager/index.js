import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table from '../../components/postsManager/Table'
import { Input } from 'antd'
function PostsManager() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(err => console.log(err))
  }, [])
  
  const onSearch = (value) => setData(data.filter(function(e) {
      if (e.title.includes(value.trim()) || e.userId.toString() === value.trim())
        return true;
      return false;
  }));
  return (
    <div>
      <div className='mb-6'>
        <Input.Search
          placeholder="Search by User ID or Title"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
      <Table data={data} />
    </div>
  )
}

export default PostsManager
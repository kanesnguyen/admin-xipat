import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios';
import Table from '../../components/postsManager/Table'
import { Input } from 'antd';

function PostsManager() {
  const [data, setData] = useState([])
  const dataAll = useRef([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        dataAll.current = response.data
      })
      .catch(err => console.log(err))
  }, [])
  
  const onSearch = (value) => setData(data.filter(function(e) {
      if (e.title.includes(value.trim()) || e.userId.toString() === value.trim())
        return true;
      return false;
  }));
  const onChange = (value) => {
    if(!value) {
      setData(dataAll.current)
    }
  };
  return (
    <div>
      <div className='mb-6'>
        <Input.Search
          placeholder="Search by User ID or Title"
          allowClear
          onChange={(e) => onChange(e.target.value)}
          onSearch={onSearch}
          onPressEnter={(e) => onSearch(e.target.value)}
          className='w-full md:w-[200px]'
        />
      </div>
      <Table data={data} />
    </div>
  )
}

export default PostsManager
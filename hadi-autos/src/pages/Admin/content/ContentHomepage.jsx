import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Save } from 'lucide-react'

const ContentHomepage = () => {
  const [content, setContent] = useState({
    heroTitle: 'Quality Vehicles from Canada to Ghana',
    heroSubtitle: 'Import reliable, inspected vehicles with transparent pricing.',
    aboutText: 'We are a trusted vehicle import company serving customers in Ghana.',
    stats1: '500+',
    stats2: '98%',
    stats3: '10+'
  })

  const handleSave = () => {
    console.log('Saving content:', content)
    alert('Content saved successfully!')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/admin/content" className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Edit Homepage</h1>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
          <input
            type="text"
            value={content.heroTitle}
            onChange={(e) => setContent({...content, heroTitle: e.target.value})}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
          <textarea
            rows="3"
            value={content.heroSubtitle}
            onChange={(e) => setContent({...content, heroSubtitle: e.target.value})}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">About Text</label>
          <textarea
            rows="4"
            value={content.aboutText}
            onChange={(e) => setContent({...content, aboutText: e.target.value})}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stat 1</label>
            <input
              type="text"
              value={content.stats1}
              onChange={(e) => setContent({...content, stats1: e.target.value})}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              placeholder="e.g., 500+"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stat 2</label>
            <input
              type="text"
              value={content.stats2}
              onChange={(e) => setContent({...content, stats2: e.target.value})}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              placeholder="e.g., 98%"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stat 3</label>
            <input
              type="text"
              value={content.stats3}
              onChange={(e) => setContent({...content, stats3: e.target.value})}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              placeholder="e.g., 10+"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentHomepage
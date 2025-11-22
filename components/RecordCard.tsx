import React from 'react';
import { RecordItem, LinkType, ReleaseType } from '../types';
import { Disc, Calendar, FileText, ExternalLink, Video, Music, Star, Headphones } from 'lucide-react';

interface RecordCardProps {
  record: RecordItem;
}

const RecordCard: React.FC<RecordCardProps> = ({ record }) => {
  // Generate a deterministic random-ish image URL based on ID for aesthetics
  const imageUrl = `https://picsum.photos/seed/${record.id}${record.artist.replace(' ', '')}/400/400`;

  const getLinkIcon = (type: LinkType) => {
    switch (type) {
      case LinkType.VIDEO:
        return <Video className="w-4 h-4" />;
      case LinkType.AUDIO:
        return <Headphones className="w-4 h-4" />;
      case LinkType.REVIEW:
        return <FileText className="w-4 h-4" />;
      case LinkType.SCORE:
        return <Star className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: ReleaseType) => {
    switch (type) {
      case ReleaseType.ALBUM:
        return 'bg-indigo-100 text-indigo-800';
      case ReleaseType.EP:
        return 'bg-purple-100 text-purple-800';
      case ReleaseType.REISSUE:
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row h-full">
      
      {/* Image Section */}
      <div className="relative md:w-48 md:shrink-0 h-48 md:h-auto overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${record.artist} cover`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 group-hover:bg-transparent transition-colors" />
        <div className="absolute top-3 left-3">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm ${getTypeColor(record.type)}`}>
                {record.type}
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
              {record.status}
            </span>
            <div className="flex items-center text-gray-400 text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                {record.date}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-1 group-hover:text-indigo-700 transition-colors">
            {record.artist}
          </h3>
          <h4 className="text-lg font-medium text-gray-600 mb-3">
            {record.title}
          </h4>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 md:line-clamp-none">
            {record.description}
          </p>
        </div>

        {/* Links Section */}
        <div className="pt-4 border-t border-gray-100 mt-auto">
            <div className="flex flex-wrap gap-3">
                {record.links.map((link, idx) => (
                    <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-indigo-50 text-xs font-medium text-gray-700 hover:text-indigo-600 transition-colors border border-gray-200 hover:border-indigo-200"
                    >
                        {getLinkIcon(link.type)}
                        <span className="truncate max-w-[150px]">{link.label}</span>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
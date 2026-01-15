import React, { useState } from 'react';
import { Video, Calendar, Users, Play, MessageCircle } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Tabs from '../../components/ui/Tabs';
import { mockLiveShows } from '../../data/mockData';
import { formatNumber } from '../../utils/helpers';

const LiveStream = () => {
    const [isLive, setIsLive] = useState(false);

    const tabs = [
        {
            label: 'Scheduled Shows',
            content: (
                <div className="space-y-4">
                    {mockLiveShows.filter(show => show.status === 'scheduled').map((show) => (
                        <Card key={show.id}>
                            <div className="flex gap-4">
                                <div className="w-32 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={show.thumbnail} alt={show.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-neutral-900 mb-1">{show.title}</h3>
                                    <div className="flex items-center text-sm text-neutral-600 space-x-4">
                                        <span className="flex items-center">
                                            <Calendar size={16} className="mr-1" />
                                            {show.scheduledDate} at {show.scheduledTime}
                                        </span>
                                        <Badge variant="info">{show.category}</Badge>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Button variant="primary" icon={Play}>
                                        Go Live
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                    <Button variant="outline" fullWidth icon={Calendar}>
                        Schedule New Show
                    </Button>
                </div>
            ),
        },
        {
            label: 'Past Shows',
            content: (
                <div className="space-y-4">
                    {mockLiveShows.filter(show => show.status === 'ended').map((show) => (
                        <Card key={show.id}>
                            <div className="flex gap-4">
                                <div className="w-32 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={show.thumbnail} alt={show.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-neutral-900 mb-1">{show.title}</h3>
                                    <div className="flex items-center text-sm text-neutral-600 space-x-4 mb-2">
                                        <span>{show.scheduledDate}</span>
                                        <Badge variant="default">{show.category}</Badge>
                                    </div>
                                    <div className="flex items-center text-sm space-x-4">
                                        <span className="flex items-center text-blue-600">
                                            <Users size={16} className="mr-1" />
                                            Peak: {formatNumber(show.peakViewers)} viewers
                                        </span>
                                        <span className="text-green-600 font-medium">
                                            ${formatNumber(show.totalSales)} in sales
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            ),
        },
        {
            label: 'Go Live',
            content: (
                <div className="space-y-6">
                    <Card>
                        <div className="aspect-video bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
                            <div className="text-center text-white">
                                <Video size={64} className="mx-auto mb-4 opacity-50" />
                                <p className="text-lg">Camera Preview</p>
                                <p className="text-sm text-neutral-400">Click "Start Stream" to go live</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button
                                variant={isLive ? "danger" : "primary"}
                                size="lg"
                                fullWidth
                                onClick={() => setIsLive(!isLive)}
                            >
                                {isLive ? "End Stream" : "Start Stream"}
                            </Button>
                        </div>
                    </Card>

                    {isLive && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card header={<h3 className="font-semibold">Live Stats</h3>}>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Current Viewers</span>
                                        <span className="font-bold text-2xl text-primary-600">127</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Peak Viewers</span>
                                        <span className="font-semibold">145</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Duration</span>
                                        <span className="font-semibold">15:42</span>
                                    </div>
                                </div>
                            </Card>

                            <Card header={<h3 className="font-semibold">Live Chat</h3>}>
                                <div className="space-y-2 h-48 overflow-y-auto">
                                    <div className="text-sm">
                                        <span className="font-semibold text-primary-600">Mike:</span>
                                        <span className="text-neutral-700"> Amazing collection!</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-semibold text-blue-600">Sarah:</span>
                                        <span className="text-neutral-700"> How much for the Jordan 1s?</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-semibold text-purple-600">Alex:</span>
                                        <span className="text-neutral-700"> 🔥🔥🔥</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            ),
        },
    ];

    return (
        <DashboardNav>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">Live Stream</h2>
                    <p className="text-neutral-600">Manage your live shows and go live</p>
                </div>

                <Tabs tabs={tabs} />
            </div>
        </DashboardNav>
    );
};

export default LiveStream;

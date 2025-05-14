#include "bits/stdc++.h"
#define int long long
#define uint unsigned long long
#define vi vector<int>
#define vvi vector<vi >
#define ll long long 
#define vb vector<bool>
#define vvb vector<vb >
#define fr(i,n) for(int i=0; i<(n); i++)
#define rep(i,a,n) for(int i=(a); i<=(n); i++)
#define nl cout<<"\n"
#define dbg(var) cout<<#var<<"="<<var<<" "
#define all(v) v.begin(),v.end()
#define sz(v) (int)(v.size())
#define srt(v)  sort(v.begin(),v.end())         // sort 
#define mxe(v)  *max_element(v.begin(),v.end())     // find max element in vector
#define mne(v)  *min_element(v.begin(),v.end())     // find min element in vector
#define unq(v)  v.resize(distance(v.begin(), unique(v.begin(), v.end())));
// make sure to sort before applying unique // else only consecutive duplicates would be removed 
#define bin(x,y)  bitset<y>(x) 
using namespace std;
int MOD=1e9+7;      // Hardcoded, directly change from here for functions!



void modadd(int &a , int b) {a=((a%MOD)+(b%MOD))%MOD;}
void modsub(int &a , int b) {a=((a%MOD)-(b%MOD)+MOD)%MOD;}
void modmul(int &a , int b) {a=((a%MOD)*(b%MOD))%MOD;}
// ================================== take ip/op like vector,pairs directly!==================================
template<typename typC,typename typD> istream &operator>>(istream &cin,pair<typC,typD> &a) { return cin>>a.first>>a.second; }
template<typename typC> istream &operator>>(istream &cin,vector<typC> &a) { for (auto &x:a) cin>>x; return cin; }
template<typename typC,typename typD> ostream &operator<<(ostream &cout,const pair<typC,typD> &a) { return cout<<a.first<<' '<<a.second; }
template<typename typC,typename typD> ostream &operator<<(ostream &cout,const vector<pair<typC,typD>> &a) { for (auto &x:a) cout<<x<<'\n'; return cout; }
template<typename typC> ostream &operator<<(ostream &cout,const vector<typC> &a) { int n=a.size(); if (!n) return cout; cout<<a[0]; for (int i=1; i<n; i++) cout<<' '<<a[i]; return cout; }
// ===================================END Of the input module ==========================================

int32_t main()
{
 
 ios_base::sync_with_stdio(false);
 cin.tie(NULL);

    int t;
    cin>>t;
    while(t--)
    {
        ll n;
        cin>>n;
        vi v(n);
        cin>>v;
        ll firstel=v[0];
        sort(v.begin(),v.end());
        ll median=n/2;
        if(n%2!=0)
        median++;
        if(v[median-1]==firstel)
        {
            cout<<"YES"<<endl;
        }
        else
        {
            ll ind;
            for(ll i=0;i<n;i++)
            {
                if(v[i]==firstel)
                {
                    ind=i;
                    break;
                }

            }
            ll count=ind;
            if(count>median-1)
            {
                ll i=0;
                while(count!=median-1&&i<ind)
                {
                    if((-1)*v[i]>=firstel)
                    {
                        count--;
                    }
                    i++;
                }
                if(count==median-1)
                {
                    cout<<"YES"<<endl;
                }
                else
                {
                    v[ind]=-1*v[ind];
                    firstel=-1*firstel;
                    sort(v.begin(),v.end());
                    if(v[median-1]==firstel)
                    {
                        cout<<"YES"<<endl;
                        continue;
                    }
                    for(ll i=0;i<n;i++)
                    {
                        if(v[i]==firstel)
                        {
                            ind=i;
                            break;
                        }

                    }
                    if(count>median-1)
                    {
                        while(count!=median-1&&i<ind)
                        {
                            if((-1)*v[i]>=firstel)
                            {
                                count--;
                            }
                            i++;
                        }
                        if(count==median-1)
                        {
                            cout<<"YES"<<endl;
                        }   
                        else
                        {
                            cout<<"NO"<<endl;
                        }

                    }
                    else
                    {
                        ll i=median;
                        while(count!=median-1&&i<n)
                        {
                            if((-1)*v[i]<=firstel)
                            {
                                count++;
                            }
                            i++;
                        }
                        if(count==median-1)
                        {
                            cout<<"YES"<<endl;
                        }
                        else
                        {
                            cout<<"NO"<<endl;
                        }

                    }
                    


                }
                
            }
            else
            {
                ll i=median;
                while(count!=median-1&&i<n)
                {
                    if((-1)*v[i]<=firstel)
                    {
                        count++;
                    }
                    i++;
                }
                if(count==median-1)
                {
                    cout<<"YES"<<endl;
                }
                else
                {
                    v[ind]=-1*v[ind];
                    firstel=-1*firstel;
                    sort(v.begin(),v.end());
                    if(v[median-1]==firstel)
                    {
                        cout<<"YES"<<endl;
                        continue;
                    }
                    for(ll i=0;i<n;i++)
                    {
                        if(v[i]==firstel)
                        {
                            ind=i;
                            break;
                        }

                    }
                    
                    if(count>median-1)
                    {
                        while(count!=median-1&&i<ind)
                        {
                            if((-1)*v[i]>=firstel)
                            {
                                count--;
                            }
                            i++;
                        }
                        if(count==median-1)
                        {
                            cout<<"YES"<<endl;
                        }   
                        else
                        {
                            cout<<"NO"<<endl;
                        }

                    }
                    else
                    {
                        ll i=median;
                        while(count!=median-1&&i<n)
                        {
                            if((-1)*v[i]<=firstel)
                            {
                                count++;
                            }
                            i++;
                        }
                        if(count==median-1)
                        {
                            cout<<"YES"<<endl;
                        }
                        else
                        {
                            cout<<"NO"<<endl;
                        }

                    }
                }
                
            }



        }

        
    }
}

    